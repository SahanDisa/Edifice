import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoDataService from "./../../../services/photo.service";
import AlbumDataService from "../../../services/album.service";
import UploadService from "./../../../services/photoupload.service";

export default class UpdatePhoto extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePath = this.onChangePath.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      currentPhoto: {
        id: null,
        title: "",
        description: "",
        category: "",
        path: "",
        
      },
      message: "",
      temp: this.props.match.params.id,
      pid: this.props.match.params.pid,
      albums: [],

      //file
      selectedFiles: undefined,
      currentFile: undefined,
      image: undefined,
      progress: 0,
    };
  }

  componentDidMount() {
    this.getPhoto(this.props.match.params.id);
    this.retrivePhotoCategory(this.props.match.params.pid);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPhoto: {
          ...prevState.currentPhoto,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentPhoto: {
        ...prevState.currentPhoto,
        description: description
      }
    }));
  }

  onChangeCategory(e) {
    const category = e.target.value;
    
    this.setState(prevState => ({
      currentPhoto: {
        ...prevState.currentPhoto,
        category: category
      }
    }));
  }

  onChangePath(e) {
    const path = e.target.value;
    
    this.setState(prevState => ({
      currentPhoto: {
        ...prevState.currentPhoto,
        path: path
      }
    }));
  }
  retrivePhotoCategory(id){
    AlbumDataService.getAll(id)
    .then(response => {
        this.setState({
          albums: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  getPhoto(id) {
    PhotoDataService.get(id)
      .then(response => {
        this.setState({
          currentPhoto: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePhoto() {
    PhotoDataService.update(
      this.state.currentPhoto.id,
      this.state.currentPhoto
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The photo details was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePhoto() {    
    PhotoDataService.delete(this.state.currentPhoto.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/photos/'+this.state.pid)
      })
      .catch(e => {
        console.log(e);
      });
  }
  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
      image:URL.createObjectURL(event.target.files[0]),
    });
  }
  upload() {
    let currentFile = this.state.selectedFiles[0];
    let fileName = this.state.currentPhoto.title+".png";
    console.log(currentFile);
    console.log(fileName);
    
    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, fileName, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

    render() {
      const { currentPhoto, temp, albums,selectedFiles,currentFile,progress,message,image,pid} = this.state;
  
      return (
        <div>
          {currentPhoto ? (
            <div className="container">
              <h2>Update a Photo</h2>
              <h4>Photo Id : {temp}</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentPhoto.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentPhoto.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="category">Photo Category</label>
                <select 
                    className="form-control"
                    id="category"
                    required
                    name="category"
                    value={this.state.category}
                    onChange={this.onChangeCategory}
                >
                    {albums &&
                    albums.map((drawingcategory, index) => (
                    <option
                        value={drawingcategory.id}
                        onChange={this.onChangeCategory}
                        key={index}
                    >
                    {/* unit data */}
                    {drawingcategory.title}
                    </option>
                    ))}
                </select>
                </div>
  
                <div className="form-group">
                  <label>
                    <strong>Current Image Resource:</strong>
                  </label>
                  {/* {currentPhoto.path} */}
                  {/* Button Group */}
                  {currentPhoto.title.substring(0, 9) == "oncapture" ? 
                      <img src={"http://localhost:8080/api/capture/"+currentPhoto.title} alt="Upload the image source again or remain the filename as it is" style={{'width': '200px', 'height': '200px'}}/>
                      : 
                      <img src={"http://localhost:8080/api/photos/"+currentPhoto.title+".png"} alt="Upload the image source again or remain the filename as it is" style={{'width': '200px', 'height': '200px'}}/>
                  }
                </div>
                {image &&
                <div className="form-group">
                <label>
                    <strong>Updated Image Resource:</strong>
                  </label>
                  <img src={image} style={{'width': '200px', 'height': '200px'}}/>
                </div>
                }
              </form>
              {/* Photo Uploading Unit */}
              <div>
                <h5>Update the Image Source</h5>
                <p>File source document : - {currentPhoto.title}{".png"}</p>
                {/* Div starts */}
                <div>
                  {currentFile && (
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress + "%" }}
                      >
                        {progress}%
                      </div>
                    </div>
                  )}

                  <label className="btn btn-default">
                    <input type="file" onChange={this.selectFile} />
                  </label>

                  <button className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={this.upload}
                  >
                    Upload
                  </button>

                  <div className="alert alert-light" role="alert">
                    {message}
                  </div>
                  {/*Ends div here  */}
                  </div>
              {/* End the container uploading here */}
              </div> 
              <Link className="btn btn-primary m-2" to={"/photos/"+pid}>
                Back Home
              </Link>
              <button
                type="submit"
                className="btn btn-warning mr-2"
                onClick={this.updatePhoto}
              >
                Update
              </button>
              
              <button
                className="btn btn-danger  mr-2"
                onClick={this.deletePhoto}
              >
                Delete
              </button>
              <p>{this.state.message}</p>
              
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Photo...</p>
            </div>
          )}
        </div>
      );
  }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoFileDataService from "./../../../services/photo.service";
import AlbumService from "../../../services/album.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CameraCapture from './cameracpature.component';

export default class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangePath = this.onChangePath.bind(this);
    this.savePhoto = this.savePhoto.bind(this);
    this.newPhoto = this.newPhoto.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      category: "1",
      path: "http://localhost:8080/api/photos/", 
      projectId: this.props.match.params.id, 
      
      albums: [],
      currentIndex: -1,
      submitted: false
    };
  }
  componentDidMount() {
    this.retriveAlbum(this.props.match.params.id);
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangePath(e) {
    this.setState({
      path: e.target.value
    });
  }
  retriveAlbum(id){
    AlbumService.getAll(id)
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
  savePhoto() {  
    var data = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      path: this.state.path,
      projectId: this.state.projectId
    };

    PhotoFileDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          category: response.data.category,
          path: response.data.path,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPhoto() {
    this.setState({
      id: null,
      title: "",
      description: "",
      category: "",
      path: "",
      projectId: this.props.match.params.id,
      
      submitted: false
    });
  }

  render() {
    const {projectId, title,currentIndex, albums} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>File details successfully submitted!</h4>
            <h4>Upload the image source</h4>
            <Link to={"/uploadphoto/"+title+".png"} className="btn btn-warning"  style={{ 'text-decoration': 'none' }}>
              Upload Image
            </Link>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Photo</h2>
            <div className="row">
            <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="name">Image Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Album</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.category}
                onChange={this.onChangeType}
              >
                {albums &&
                albums.map((album, index) => (
                <option
                    value={album.id}
                    onChange={this.onChangeType}
                    key={index}
                >
                {/* unit data */}
                {album.title}
                </option>
                ))}
              </select>
            </div>  
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Document Settings</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Upload File</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            <button onClick={this.savePhoto} className="btn btn-success">
              Create 
            </button>
          </div>
        )}
      </div>
    );
  }
}
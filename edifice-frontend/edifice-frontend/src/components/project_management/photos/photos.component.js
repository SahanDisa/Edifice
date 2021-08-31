import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumDataService from "./../../../services/album.service";
import { WebcamCapture } from './webcam.component';
import { CameraViewer } from "./viewphoto.component";
import Accordion from 'react-bootstrap/Accordion';
import Typography from '@material-ui/core/Typography';
import Icon1 from "././../../../assets/PM/photos/image1.jpg";
import Icon2 from "././../../../assets/PM/photos/albumicon.jpg";
import UploadPhotoService from "../../../services/photoupload.service";
import Card from 'react-bootstrap/Card';

export default class PhotosHome extends Component {
  
    constructor(props) {
      super(props);
      this.retrieveAlbums = this.retriveAlbums.bind(this);
      this.state = {
        albums: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id,
        selectedFiles: undefined,
        currentFile: undefined,
        progress: 0,
        message: "",

        fileInfos: [],
        Captures: [],
      };
    }
    componentDidMount() {
      this.retriveAlbums(this.props.match.params.id);
      UploadPhotoService.getFiles().then((response) => {
        this.setState({
          fileInfos: response.data,
        });
      });
      UploadPhotoService.getCaptures().then((response) => {
        this.setState({
          Captures: response.data,
        });
      });
    }
    selectFile(event) {
      this.setState({
        selectedFiles: event.target.files,
      });
    }
    retriveAlbums(id){
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

    render() {
      const { albums, currentIndex,id,fileInfos, Captures } = this.state;
      return (
        <div>
          <h2>Photos</h2>
          <p>Here you can manage your photos and captures photos onsite</p>
          <hr></hr>
          {/* Album division starts */}
          <div className="container">
            <h3>Albums</h3>
            <p>Manage your photo by adding it into albums</p>
            <Link className="btn btn-primary mr-2" to={"/addalbum/"+id}>
              Add Album
            </Link>
            <hr></hr>
            <h4>Recent Albums</h4>
            <p>Click on Albums to manage your photos</p>
            <div className="container row">
            {albums &&
                albums.map((album, index) => (
                <div
                    className={
                    "container col-3" +
                    (index === currentIndex ? "active" : "")
                    }
                    key={index}
                >
                {/* unit data */}
                <Link to={"/viewalbum/"+album.id} style={{'text-decoration': 'none'}}>
                  <Card className="bg-light text-white">
                    <Card.Img src={Icon2} alt="Card image" />
                    <Card.ImgOverlay>
                      <Card.Title>{album.title}</Card.Title>
                      <Card.Text>
                        {album.description}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
                </div>
            ))}
            </div>
            <hr></hr>
          </div>
        {/* Album div ends */}
        {/* Photo div starts */}
        <div className="container">
          <h3>Photos</h3>
          <p>Manage your photos by uploading it to the system</p>
            <Link className="btn btn-primary mr-2" to={"/addphoto/"+id}>
              Add Photo
            </Link>
            <hr></hr>
          </div> 
          <div className="container">
            <h4>Recent Photos</h4>
            <div className="container row">
            
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <div className="container col-4 mt-1" key={index}>
                    {/* <a href={file.url}>{file.name}{" "}{file.url}</a>
                    <img src={file.url} style={{'height':'300px'}}/> */}
                    <Card className="bg-dark text-white">
                    <Card.Img src={file.url} alt="Card image" style={{'width': '320px', 'height': '300px'}}/>
                    <Card.ImgOverlay>
                      <Card.Title>{file.name}</Card.Title>
                      <Card.Text>
                        {file.description}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                  </div>
                ))}
            </div>
            <hr></hr>
        </div>
        {/* onsite capturing component import dynamically*/}
        <div className="container">
          <Typography>
          <WebcamCapture/>      
          </Typography>
        </div>
        {/* <CameraViewer/>     */}
      </div>
      
    );
  }
}
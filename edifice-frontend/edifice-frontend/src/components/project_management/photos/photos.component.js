import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumDataService from "./../../../services/album.service";
import { WebcamCapture } from './webcam.component';
// import { CameraViewer } from "./viewphoto.component";
// import Accordion from 'react-bootstrap/Accordion';
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from "@material-ui/core";
// import Icon1 from "././../../../assets/PM/photos/image1.jpg";
import Icon2 from "././../../../assets/PM/photos/albumicon.jpg";
import UploadPhotoService from "../../../services/photoupload.service";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-customizable-progressbar';
import { IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

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
          <h2>PHOTOS HOME</h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">
              Home
            </Link>
            <Link color="inherit" to={"/projectmanagementhome/"+id}>
              App Dashboard
            </Link>
            <Link color="textPrimary" to={"/photos/"+id} aria-current="page">
              Photos Home
            </Link>
          </Breadcrumbs>
          <hr></hr>
          <div>
            <h3>Insights</h3>
            <h6>Overview of Document progress</h6>
            <div className="row">
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Albums Insights">
                  <h1 className="m-2">4</h1>
                  <h3 className="h5 nav-heading-title m-2">Albums</h3>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </div>
              </div>
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Photos Insights">
                  <h1 className="m-2" >9</h1>
                  <h3 className="h5 nav-heading-title mb-0 m-2">Photos</h3>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </div>
              </div>
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Capture Insights">
                  <h1 className="m-2">15</h1>
                  <h3 className="h5 nav-heading-title mb-0 m-2">Captures</h3>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </div>
              </div>
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Project Detail Specification with Analytics">
                <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/portfolio/" + id} style={{ 'text-decoration': 'none' }}>
                  <center>
                  <ProgressBar
                      radius={29}
                      progress={65}
                      cut={120}
                      rotate={-210}
                      initialAnimation
                      initialAnimationDelay={1}
                      strokeWidth={13}
                      strokeColor="#273f7d"
                      transition="2s ease"
                      trackStrokeWidth={12}
                      trackTransition="1s ease"
                      pointerRadius={3}
                      pointerStrokeWidth={12}
                  />
                  {/* <h3 className="h5 nav-heading-title mb-0">Progress</h3> */}
                  </center>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </Link>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          {/* Album division starts */}
          <div>
            <h3>Albums</h3>
            <h6>Manage your photo by adding it into Albums,Click on Albums to Manage</h6>
            <Link className="btn btn-primary mb-2 mt-2" to={"/addalbum/"+id}>
              Add Album
            </Link>
            <h4>Recent Albums</h4>
            <div className="row">
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
        <div>
          <h3>Photos</h3>
          <h6>Here you can manage your photos and captured photos onsite</h6>
            <Link className="btn btn-primary mr-2" to={"/addphoto/"+id}>
              Add Photo
            </Link>
            <Link className="btn btn-primary mr-2" to={"/movecapture/"+id}>
              Move Captures
            </Link>
            <hr></hr>
          </div> 
          <div>
            <h4>Recent Photos</h4>
            <div className="container row">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <div className="container col-4 mt-1" key={index}>
                    {/* <a href={file.url}>{file.name}{" "}{file.url}</a>
                    <img src={file.url} style={{'height':'300px'}}/> */}
                    <Card className="bg-dark text-white">
                    <Card.Img src={file.url} alt="Card image" style={{'width': '328px', 'height': '300px'}}/>
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
        <div>
          <Typography>
          <h3>Onsite Capturing</h3>
          <p>Press Capture button to take an image and press Retake to undo the operation.</p>
          <center>
          <Link style={{'text-decoration':'none'}} to={"/camera/"+id}>
          <IconButton color="primary" aria-label="start camera" component="span">
            <PhotoCamera  style={{'height': '100px', 'width': '100px'}} />
          </IconButton>  
          <h5>Start Camera</h5>
          </Link>
          </center>   
          </Typography>
        </div>
        {/* <CameraViewer/>     */}
      </div>
      
    );
  }
}
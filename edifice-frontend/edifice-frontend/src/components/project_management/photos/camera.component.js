import React, { Component } from "react";
import { Link } from "react-router-dom";
import { WebcamCapture } from './webcam.component';
import { Breadcrumbs } from "@material-ui/core";

export default class CameraSinglePage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
      };
    }
    componentDidMount() {

    }
    
    render() {
      const { currentIndex,id} = this.state;
      return (
        <div>
        <h3>Edifice Camera</h3>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">
              Home
            </Link>
            <Link color="inherit" to={"/projectmanagementhome/"+id}>
              App Dashboard
            </Link>
            <Link color="inherit" to={"/photos/"+id}>
              Photos Home
            </Link>
            <Link color="textPrimary" to={"/camera/"+id} aria-current="page">
              Camera
            </Link>
          </Breadcrumbs>
         <WebcamCapture/>
         <hr></hr>
         <center>
         <Link className="btn btn-primary" style={{'text-decoration': 'none'}} to={"/movecapture/"+id}>
              Move Captures
        </Link>
        </center>
        </div>
    );
  }
}
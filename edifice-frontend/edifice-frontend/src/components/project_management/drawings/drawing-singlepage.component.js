import React, { Component } from "react";
import DrawingDataService from "./../../../services/drawing.service";

import GestureIcon from '@material-ui/icons/Gesture';

export default class ViewSingleDrawing extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.state = {
        id: this.props.match.params.id,
        name: "",
        description: "",
        drawtype: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrieveDrawing(this.props.match.params.id);
    }
    retrieveDrawing(id) {
      DrawingDataService.get(id)
        .then(response => {
          this.setState({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            drawtype: response.data.drawtype,
            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,name,description,drawtype } = this.state;
        return (
            <div>
            <div className="jumbotron">
                <h2>Drawing Single Page</h2>
                <GestureIcon/>
                <p>Manage as single drawing and add measurements and versioning</p>
                <h4>Drawing Id : {id}</h4>
                <h5>Name : {name}</h5>
                <h5>Description : {description}</h5>
                <h5>Drawing Type : {drawtype}</h5>

            </div>
            <div className="container">
                <h4>Upload the file</h4>
                <input type="file" />
                <button type="upload" className="btn btn-warning">Upload</button>

            </div>
            <div className="container">
                <h4>Add Measurements</h4>
                <p>Main measurements : - Area, Distance</p>
            </div>
            <div className="container">
                <h4>Add Versions</h4>
                <p>Make adjustments and keep the drawing upto date</p>
            </div> 
            </div>
        );
    }
}
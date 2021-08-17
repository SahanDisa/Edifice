import React, { Component } from "react";
import DrawingDataService from "./../../../services/drawing.service";


export default class ViewSingleDrawingCategory extends Component {
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
              <h2>Drawing Category Single Page</h2>
              <p>Manage the drawing in each drawing category</p>
              <hr></hr>
              <h3>File details</h3>
              <h6>Drawing Id : {id}</h6>
              <h6>Name : {name}</h6>
              <h6>Description : {description}</h6>
              <h6>Drawing Type : {drawtype}</h6>
              <hr></hr>
              <h3>View File</h3>
              <p>View the particular drawing in pdf format</p>
            
            </div>
        );
    }
}
import React, { Component } from "react";
import DrawingDataService from "./../../../services/drawing.service";

export default class AddDrawing extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.saveDrawing = this.saveDrawing.bind(this);
    this.newDrawing = this.newDrawing.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      drawtype: "", 
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      drawtype: e.target.value
    });
  }

  saveDrawing() {
    console.log("click kala");  
    var data = {
      name: this.state.name,
      description: this.state.description,
      drawtype: this.state.drawtype,
      projectId: this.state.projectId
    };

    DrawingDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          drawtype: response.data.drawtype,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDrawing() {
    this.setState({
      id: null,
      name: "",
      description: "",
      drawtype: "",
      projectId: this.props.match.params.id,

      submitted: false
    });
  }

  render() {
    const {projectId} = this.state;
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newDrawing}>
              Add Another Drawing
            </button>
          </div>
        ) : (
          <div class="jumbotron">
            <h2>Add New Drawing {projectId}</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
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
              <label htmlFor="drawtype">Drawing Type</label>
              <input
                type="text"
                className="form-control"
                id="datatype"
                required
                value={this.state.drawtype}
                onChange={this.onChangeType}
                name="drawtype"
              />
            </div>

            <button onClick={this.saveDrawing} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
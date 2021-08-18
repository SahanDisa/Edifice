import React, { Component } from "react";
import DrawingDataService from "./../../../services/drawing.service";
import DrawingCategoryService from "../../../services/drawing-category.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

//JSX(Javascript XML)
//https://addrwaing/projectId?=1
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
      drawtype: "1", 
      projectId: this.props.match.params.id, 
      
      drawingcategories: [],
      currentIndex: -1,
      submitted: false
    };
  }
  componentDidMount() {
    this.retriveDrawingCategory(this.props.match.params.id);
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
  retriveDrawingCategory(id){
    DrawingCategoryService.getAll(id)
    .then(response => {
        this.setState({
          drawingcategories: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  saveDrawing() {  
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
    const {projectId, currentIndex, drawingcategories} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>File details successfully submitted!</h4>
            <h4>Upload the file</h4>
            <input type="file" />
            <button type="upload" className="btn btn-warning">Upload</button>
            <button className="btn btn-success" onClick={this.newDrawing}>
            
            Add Another Drawing
            </button>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Drawing</h2>
            <div className="row">
            <div className="col-sm-8">
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
              <label htmlFor="drawtype">Drawing Category</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="drawtype"
                value={this.state.drawtype}
                onChange={this.onChangeType}
              >
                {drawingcategories &&
                drawingcategories.map((drawingcategory, index) => (
                <option
                    value={drawingcategory.id}
                    onChange={this.onChangeType}
                    key={index}
                >
                {/* unit data */}
                {drawingcategory.title}
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
                <TimelineContent><h5><strong>Step 1</strong><br/>Drawing Settings</h5> </TimelineContent>
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
            <button onClick={this.saveDrawing} className="btn btn-success">
              Create 
            </button>
          </div>
        )}
      </div>
    );
  }
}
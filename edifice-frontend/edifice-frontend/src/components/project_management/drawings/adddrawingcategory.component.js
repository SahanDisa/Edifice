import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingCategoryDataService from "./../../../services/drawing-category.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Breadcrumbs } from "@material-ui/core";

//JSX(Javascript XML)
//https://addrwaing/projectId?=1
export default class AddDrawingCategory extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveDrawingCategory = this.saveDrawingCategory.bind(this);
    this.newDrawingCategory = this.newDrawingCategory.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      projectId: this.props.match.params.id,  
      submitted: false
    };
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

  saveDrawingCategory() {
    console.log("click kala");  
    var data = {
      title : this.state.title,
      description: this.state.description,
      projectId: this.state.projectId
    };

    DrawingCategoryDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDrawingCategory() {
    this.setState({
      id: null,
      title: "",
      description: "",
      projectId: this.props.match.params.id,

      submitted: true
    });
  }

  render() {
    const {projectId} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
         <center> 
          <div>
            <h4>Category details successfully submitted!</h4>
            <button className="btn btn-success m-2" onClick={this.newDrawing}>
            Add Another Drawing Category
            </button>
            <Link className="btn btn-primary m-2" to={"/drawing/"+projectId }>
            Back Home
            </Link>
          </div>
        </center>
        ) : (
          <div class="container">
            <h2>Add New Drawing Category</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">
                Home
              </Link>
              <Link color="inherit" to={"/projectmanagementhome/"+projectId}>
                App Dashboard
              </Link>
              <Link color="textPrimary" to={"/drawing/"+projectId} aria-current="page">
                Drawing Home
              </Link>
              <Link color="textPrimary" to={"/adddrawingcategory/"+projectId} aria-current="page">
                Add Category
              </Link>
            </Breadcrumbs>
            <div className="row">
            <div className="col-sm-8">
                <div className="form-group">
                <label htmlFor="name">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
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
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1 </strong>Category Details</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2 :</strong>Submit</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            <button onClick={this.saveDrawingCategory} className="btn btn-success">
              Create 
            </button>
          </div>
        )}
      </div>
    );
  }
}
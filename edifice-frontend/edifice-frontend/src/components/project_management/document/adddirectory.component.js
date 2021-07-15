import React, { Component } from "react";
import ProjectDataService from "./../../../services/project.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default class AddDirectory extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.saveProject = this.saveProject.bind(this);
    this.newProject = this.newProject.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      location: "", 
      published: false,

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
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  saveProject() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location
    };

    // ProjectDataService.create(data)
    //   .then(response => {
    //     this.setState({
    //       id: response.data.id,
    //       title: response.data.title,
    //       description: response.data.description,
    //       location: response.data.location,
    //       published: response.data.published,

    //       submitted: true
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }

  newProject() {
    this.setState({
      id: null,
      title: "",
      description: "",
      location: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProject}>
              Add Another Directory
            </button>
          </div>
        ) : (
          <div class="container">
          <div className="row">
            <div className="container col-8">
            <h2>Add New Directory</h2>
            <h5>Step 1: Project Settings</h5>
            <div className="form-group">
              <label htmlFor="title">Directory Name:</label>
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
              <label htmlFor="description">Description :</label>
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

            <a href="/adddepartment" onClick={this.saveProject} className="btn btn-success">
              Submit
            </a>
            </div>
            <div className="container col-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1 </strong>Directory Details</h5> </TimelineContent>
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
          </div>
        )}
      </div>
    );
  }
}
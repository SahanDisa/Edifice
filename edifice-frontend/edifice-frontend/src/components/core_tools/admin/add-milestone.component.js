import React, { Component } from "react";
import { Link } from "react-router-dom";
import MilestoneDataService from "./../../../services/milestone.service";
import ProjectDataService from "./../../../services/project.service";
import PortfolioDataService from "../../../services/portfolio.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Card } from "@material-ui/core";

export default class AddMilestone extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.saveMilestone = this.saveMilestone.bind(this);
    this.newMilestone = this.newMilestone.bind(this);

    this.state = {
      id: null,
      lastproject: [],
      title: "",
      description: "",
      duration: "", 
      currentIndex: -1,
      projectId: "",

      milestones: [],
      submitted: false
    };
  }
  componentDidMount() {
    this.getLastProjectID();
    this.retriveMilestones(this.props.match.params.id);
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
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  getLastProjectID(){
    ProjectDataService.findlastProject()
      .then(response => {
          this.setState({
            lastproject: response.data,
            projectId: response.data[0].id
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }
  retriveMilestones(id){
    PortfolioDataService.getAllMilestones(id)
      .then(response => {
        this.setState({
          milestones: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  saveMilestone() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      duration: this.state.duration,
      projectId: this.state.projectId
    };
    MilestoneDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          duration: response.data.duration,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newMilestone() {
    this.setState({
      id: null,
      title: "",
      description: "",
      duration: "",
      published: false,

      submitted: false
    });
  }

  render() {
    const {lastproject, currentIndex, projectId, milestones} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>You add a Milestone successfully</h4>
           
            <button className="btn btn-success" onClick={this.newMilestone}  style={{ 'text-decoration': 'none' }}>
              Add Another Milestone
            </button>
            <Link to={"/assignuser/"+projectId} className="btn btn-warning"  style={{ 'text-decoration': 'none' }}>
              Assign Users
            </Link>
          </div>
        ) : (
          <div class="container">
          <div className="row">
            <div className="container col-8">
            <h2>Add New Milestone</h2>
            <h5>Step 3 : Define Milestones</h5>
            <div className="form-group">
              <label htmlFor="title">Title</label>
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

            <div className="form-group">
              <label htmlFor="description">Duration</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                required
                value={this.state.duration}
                onChange={this.onChangeDuration}
                name="duration"
              />
            </div>
            <button onClick={this.saveMilestone} className="btn btn-success">
              Create Milestone
            </button>
            {/* Show Current Milestones */}
            <div>
            <div className="col-md-8">
              <div className="list-group">
              <h5 className="mt-2">Current Milestones</h5>
              {milestones &&
                milestones.map((milestone, index) => (
                  <Card style={{ width: '40rem'}} className="m-2 shadow-md">
                  <div className="row">
                    <div className="col-9">
                      <br/>
                        <h6><b>Title : {milestone.title}</b></h6>
                        <h6>Description : {milestone.description}</h6>
                        <h6>Duration : {milestone.duration}</h6>
                    </div>
                  </div>
                  </Card>
                ))}
                </div>
            </div>
            </div>
            {/* Show Current Milestones ends  */}
            </div>
            <div className="container col-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 1 :</strong>Project Settings</h6> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2 :</strong>Define departments</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 3 </strong>Define milestones</h5></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 4 :</strong>Assign users for the project</h6></TimelineContent>
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
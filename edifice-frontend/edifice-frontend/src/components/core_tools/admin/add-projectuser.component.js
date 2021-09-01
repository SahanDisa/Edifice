import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectUserDataService from "./../../../services/projectuser.service";
import ProjectDataService from "./../../../services/project.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default class AssignUserProject extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.saveProjectUser = this.saveProjectUser.bind(this);
    this.newProjectUser = this.newProjectUser.bind(this);

    this.state = {
      id: null,
      lastproject: [],
      title: "",
      description: "",
      duration: "", 
      currentIndex: -1,
      projectId: this.props.match.params.id,

      submitted: false
    };
  }
  componentDidMount() {
    //this.getLastProjectID();
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
//   getLastProjectID(){
//     ProjectDataService.findlastProject()
//       .then(response => {
//           this.setState({
//             lastproject: response.data,
//             projectId: response.data[0].id
//           });
//           console.log(response.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//   }
  saveProjectUser() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      duration: this.state.duration,
      projectId: this.state.projectId
    };
    ProjectUserDataService.create(data)
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
  newProjectUser() {
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
    const {lastproject, currentIndex, projectId} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>You add a ProjectUser successfully</h4>
           
            <button className="btn btn-success" onClick={this.newProjectUser}  style={{ 'text-decoration': 'none' }}>
              Add Another ProjectUser
            </button>
            <Link to={"/addmilestone/"+projectId} className="btn btn-warning"  style={{ 'text-decoration': 'none' }}>
              Assign Users
            </Link>
          </div>
        ) : (
          <div class="container">
          <div className="row">
            <div className="container col-8">
            <h2>Assign User To the Project</h2>
            <h5>Step 4 : Assign Users to the project by giving the position</h5>
            <div className="form-group">
              <label htmlFor="category">User ID</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.category}
                onChange={this.onChangeType}
              >
                {/* {drawingcategories &&
                drawingcategories.map((drawingcategory, index) => (
                <option
                    value={drawingcategory.id}
                    onChange={this.onChangeType}
                    key={index}
                >
                
                {drawingcategory.title}
                </option>
                ))} */}
                <option>1 - John Doe</option>
                <option>2 - Steve Smith</option>
                <option>3 - Kamal Perera</option>
                <option>4 - Saman Dissanayaka</option>
                <option>5 - Ranjith Weerasuriya</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Position</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.category}
                onChange={this.onChangeType}
              >
                {/* {drawingcategories &&
                drawingcategories.map((drawingcategory, index) => (
                <option
                    value={drawingcategory.id}
                    onChange={this.onChangeType}
                    key={index}
                >
                
                {drawingcategory.title}
                </option>
                ))} */}
                <option>1 - Project Manager</option>
                <option>2 - Senior Enginner</option>
                <option>3 - Senior Architect</option>
                <option>3 - Enginner</option>
                <option>2 - Architect</option>
                <option>4 - QA Enginner</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project ID</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                required
                // value={this.state.duration}
                // onChange={this.onChangeDuration}
                // name="duration"
                value = {this.state.projectId}
              />
            </div>
            <button onClick={this.saveProjectUser} className="btn btn-success">
              Assign User
            </button>
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
                <TimelineContent><h6><strong>Step 3 :</strong>Define milestones</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 4 </strong>Assign users for the project</h5></TimelineContent>
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
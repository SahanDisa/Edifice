import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectUserDataService from "./../../../services/projectuser.service";
import ProjectDataService from "./../../../services/projectuser.service";
import PortfolioDataService from "./../../../services/portfolio.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import EmployeeDataService from "./../../../services/employee.service";
import employeeService from "./../../../services/employee.service";


export default class AssignUserProject extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.saveProjectUser = this.saveProjectUser.bind(this);
    this.newProjectUser = this.newProjectUser.bind(this);

    this.state = {
      id: null,
      userId: "",
      department: "",
      position: "", 
      currentIndex: -1,
      projectId: this.props.match.params.id,
      departments: [],
      employees: [],
      submitted: false
    };
    
  }
  componentDidMount() {
    this.retrieveDepartments(this.props.match.params.id);
    this.getEmployees();
  }
  onChangeUserID(e) {
    this.setState({
      userId: e.target.value
    });
  }
  onChangeDepartment(e) {
    this.setState({
      department: e.target.value
    });
  }
  onChangePosition(e) {
    this.setState({
      position: e.target.value
    });
  }
  retrieveDepartments(id){
    PortfolioDataService.getAllDep(id)
      .then(response => {
        this.setState({
          departments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  saveProjectUser() {
    var data = {
      userId: this.state.userId,
      department: this.state.department,
      position: this.state.position,
      projectId: this.state.projectId
    };
    ProjectUserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          userId: response.data.userId,
          department: response.data.department,
          position: response.data.position,
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
      userId: "",
      department: "",
      position: "",

      submitted: false
    });
  }

  getEmployees(){
    EmployeeDataService.getAll()
      .then(response => {
        this.setState({
          employees: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
      //console.log(this.state.employees)
  }

  render() {
    const {departments, currentIndex, projectId,employees} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
          <center>
            <h4>You add a ProjectUser successfully </h4>
            <button className="btn btn-success" onClick={this.newProjectUser}  style={{ 'text-decoration': 'none' }}>
              Add Another ProjectUser
            </button>
            <Link to={"/projects/"} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Back Home
            </Link>
            {/* <Link to={"/adddrawing/"+projectId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Add Drawing
            </Link> */}
          </center>
          </div>
        ) : (
          <div class="container">
          <div className="row">
            <div className="container col-8">
            <h2>Assign User To the Project</h2>
            <h5>Step 4 : Assign Users to project </h5>
            <div className="form-group">
              <label htmlFor="category">User ID</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.userId}
                onChange={this.onChangeUserID}
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
                {employees &&
                employees.map((employee,index) => {
                  return(
                    <option value={employee.name} onChange={this.onChangeUserID}>{employee.name}</option>
                  )
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Position</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.position}
                onChange={this.onChangePosition}
              >
                <option value={"Project Manager"} onChange={this.onChangePosition}>1 - Project Manager</option>
                <option value={"Senior Architect"} onChange={this.onChangePosition}>2 - Senior Enginner</option>
                <option value={"Senior Enginner"} onChange={this.onChangePosition}>3 - Senior Architect</option>
                <option value={"Enginner"} onChange={this.onChangePosition}>3 - Enginner</option>
                <option value={"Architect"} onChange={this.onChangePosition}>2 - Architect</option>
                <option value={"QA Enginner"} onChange={this.onChangePosition}>4 - QA Enginner</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.department}
                onChange={this.onChangeDepartment}
              >
                {departments &&
                departments.map((department, index) => (
                <option
                    value={department.name}
                    onChange={this.onChangeDepartment}
                    key={index}
                >
                
                {department.title}
                </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="projectID">Project ID</label>
              <input
                type="text"
                className="form-control"
                id="projectID"
                required
                // value={this.state.projectID}
                // onChange={this.onChangePosition}
                name="projectID"
                value = {this.state.projectId}
                disabled
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
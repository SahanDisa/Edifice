import React, { Component } from "react";
import Dates from './core_tools/admin/dates.component'
import Defaults from './core_tools/admin/defaults.component'
import Roles from './core_tools/admin/roles.component'
import { Link } from "react-router-dom";

import ProgressBar from 'react-bootstrap/ProgressBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import WarningIcon from '@material-ui/icons/Warning';
import Employees from './core_tools/edifice-directory/employees.component'

import UserService from "../services/user.service";
import ProjectDataService from "../services/project.service";
import projectService from "../services/project.service";

//css styles
const cardStyle = {
  backgroundColor: "#6B7BA4",
  "&:hover": {
    backgroundColor: "#efefef"}
}

const linkText={
  color: "#FFFFFF",
  textDecoration: "none"
}

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.getprojectCount=this.getprojectCount.bind(this);
    this.getprojectDetails=this.getprojectCount.bind(this);
    this.state = {
      content: "",
      projectCount: 0,
      employeeCount: 0,
      currProjectId: 0,
      id: "this.props.match.params.id"
    };

    //console.log(this.getprojectDetails());
  }

  expand(card) {
    card.classList.toggle('profile--expanded');

    // If card is not expanded after toggle, add 'unexpanded' class
    if (!card.classList.contains('profile--expanded')) card.classList.toggle('profile--unexpanded');
    // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
    else if (card.classList.contains('profile--expanded') && card.classList.contains('profile--unexpanded')) card.classList.toggle('profile--unexpanded');
  }

  toggleTheme() {
      let docu = document.querySelector('html');

      docu.classList.toggle('light-theme');
      docu.classList.toggle('dark-theme');
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );

    this.getprojectCount();
    //console.log(projectCount);
    for(let i=0;i<5;i++){
      //this.getprojectDetails(i);
    }
    
  }

  getprojectCount(){
    //get Project count
    ProjectDataService.getAll().then(response => {
      this.setState({
        projectCount: response.data.length,
        
      });
      //console.log(projectDetails);
    })
    .catch(e => {
      console.log(e);
    });
  }

  //private  var projectDetails=[];
  getprojectDetails(id){
    //get Project count
    console.log(id);
    ProjectDataService.get(id).then(response => {
      //console.log( response.data[id]["id"]);
      this.setState({
        
      })
      console.log(id);
    })
    //GOLDEN CODE
    //projectDetails.then(function(result) {
      //console.log(result) // "Some User token"
   //})
    
  }

  render() {
    const { projectDetails,projectCount,employeeCount } = this.state;
    var elements = {};
    //this.getprojectDetails(elements);
    //console.log(elements);
    const items = []

    //this.getprojectDetails(1);
    //for (const [index, value] of elements.entries()) {
    //  items.push(<li key={index}>{value}</li>)
    //}

    return (
      `
    .card-hover:hover {
      color:red;
      transform: scale(1.001);
      background: #f0c14b;
    }
    `,
      <div className="container">

        <h3> Core tools home</h3>
        <p>Current statistics of ongoing projects </p>
        <div className="row">
            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="employeecard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3 mb-1" href="/employees" style={linkText}>

                <h1 className="nav-heading-title mb-0" style={{ fontSize:55 }}>148</h1>
                <h5 mb-0> <SupervisorAccountIcon style={{ fontSize:25 }}/>  Employees</h5>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-5" id="projectcard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3 mb-1" style={linkText} href="/projects">

                <h1 className="nav-heading-title mb-0" style={{ fontSize:55 }}>{projectCount}</h1>
                <h5> <HomeWorkIcon style={{ fontSize:25 }}/>  Projects</h5>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="vendorcard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3 mb-1" style={linkText} href="/vendor">

                <h1 className="nav-heading-title mb-1" style={{ fontSize:55 }}>56</h1>
                <h6> <HomeWorkIcon style={{ fontSize:25 }}/>  Vendors & Subcontractors</h6>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="capitalcard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3 mb-1" style={linkText} href="#">

                <h3 className="nav-heading-title mb-0" style={{ fontSize:55 }}><span style={{ fontSize:18 }}>Rs. </span>48M</h3>
                <h5> <HomeWorkIcon style={{ fontSize:25 }}/>  Capital</h5>
              </a>
              </div>
            </div>

          </div>
            <div classname-="mb-2">
              <h3> Ongoing Projects:</h3>
            </div>
          <div classname="row">
            
            <div className="card card-hover shadow-sm col-lg-12 pt-1 mb-3 pb-3" id="project1">
              <a className="d-block nav-heading text-left ml-4 mt-3 mb-1 pb-3" href="#">
                  <div classname="row">
                    <h4 style={{color: "#273F7D"}} className="mb-6">Port City</h4>
                        <div className="col-sm-6 mb-2" id="project1">
                          <ProgressBar now={20} label="20" />
                        </div>
                      <div className="col-sm-6" id="project1_d">
                        <h5 mb-0> <SupervisorAccountIcon style={{ fontSize:24 }}/>  31</h5>

                      </div>
                  </div>
              </a>
            </div>

            <div className="card card-hover shadow-sm col-lg-12 pt-1 mb-3 pb-3" id="project2">
              <a className="d-block nav-heading text-left ml-4 mt-3 mb-1 pb-3" href="#">
                  <h4 style={{color: "#273F7D"}} className="mb-6">Anilana</h4>
                    <div className="col-sm-6 ml-6 mr-6 mt-6 pt-6 mb-2" id="project2">
                      <ProgressBar now={40} label="40" variant="warning" />
                    </div>
                    <div className="col-sm-2 mb-grid-gutter" id="project1_d">
                      <h5 mb-0> <SupervisorAccountIcon style={{ fontSize:24 }}/>  12</h5>
                    </div>
              </a>
            </div>

          </div>
        <div className="row">
          <div className="col-3">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-settings-list" data-toggle="list" href="/reports" role="tab" aria-controls="settings">Generate Report</a>
            </div>
          </div>
          <div className="col-3">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-settings-list" data-toggle="list" href="#list-report" role="tab" aria-controls="settings">Analytics</a>
            </div>
          </div>
          {/* Admin content */}
          <div className="col-10">
            <div className="tab-content" id="nav-tabContent">
              {/*Admin core tools description  */}
              <div className="modal fade pt-4" id="list-admin" role="dialog" aria-labelledby="list-home-list" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered pt-4" role="document">
                  <div className="modal-content">
                    <p>Manage Important dates</p>
                    <div class="col text-center">
                      <a href="/dates" className="btn btn-outline-primary"> Go To Dates</a>
                    </div>  
                    <p>Manage Deafults</p>
                    <a href="/defaults" className="btn btn-outline-primary"> Go To Defaults</a>
                    <p>Manage Roles</p>
                    <a href="/roles" className="btn btn-outline-primary"> Go To Roles</a>
                  </div>
                </div>  
              </div>
              {/* Admin project description */}
              <div className="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-profile-list">
              {/* This is the pre project creation tab  */}
                <h2>Project Admin</h2>
                
                <p>Create a new project inside the system</p>
                <a href="/addproject" className="btn btn-outline-primary">+ Add New Project</a>
                <p>List All Project</p>
                <a href="/projects" className="btn btn-outline-primary">Project Home</a>
              </div>
              <div className="tab-pane fade" id="list-directory" role="tabpanel" aria-labelledby="list-messages-list">
              <h5>Directory</h5>
                <p>View Employee Directory</p>
                <a href="/employees" className="btn btn-outline-primary"> Employees</a>
                <p>View Vendor Directory</p>
                <a href="/vendor" className="btn btn-outline-primary"> Vendors</a>
                <p>View Project Directory</p>
                <a href="/projects" className="btn btn-outline-primary"> Projects</a>
              </div>

              <div className="tab-pane fade" id="list-document" role="tabpanel" aria-labelledby="list-settings-list">
                <h5>This is document</h5>
                <p>Manage pre construction level docments</p>
                <a href="/document" className="btn btn-outline-primary"> Go To a Document</a>
              </div>
              
              <div className="tab-pane fade" id="list-tasks" role="tabpanel" aria-labelledby="list-settings-list">
                <h5>Tasks</h5><hr/>
                <a href="/tasksconfiguration" className="btn btn-outline-primary mr-3"> Task Tool Configuration</a>
                <a href="/managetasks" className="btn btn-outline-primary"> Manage Tasks</a>
              </div>
              <div className="tab-pane fade" id="list-report" role="tabpanel" aria-labelledby="list-settings-list">This is report</div>
            </div>
          </div>
          {/*  debug stuff DELETE*/}
          {/* <div><p>sfdsfds</p></div> */}
          
        </div>
        {/* <Defaults /><Dates /><Roles /> */}
      </div>
    );
  }
}
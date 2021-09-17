import React, { Component } from "react";
import Dates from './core_tools/admin/dates.component'
import Defaults from './core_tools/admin/defaults.component'
import Roles from './core_tools/admin/roles.component'
import { Link } from "react-router-dom";

//import PDF generating
import Report from './report/report.component'

import ProgressBar from 'react-bootstrap/ProgressBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

//import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Assessment,HomeWork,LocationOn,Description,SupervisorAccount,AddCircleOutline} from '@material-ui/icons';

import UserService from "../services/user.service";
import EmployeeDataService from "../services/employee.service";
import VendorDataService from "../services/vendor.service";
import ProjectDataService from "../services/project.service";

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
    this.getVendorCount=this.getVendorCount.bind(this);
    this.getEmployeeCount=this.getEmployeeCount.bind(this);
    this.getprojectDetails=this.getprojectCount.bind(this);
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.state = {
      projects:[],
      content: "",
      projectCount: 0,
      vendorCount: 0,
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

    this.retrieveProjects();
    this.getprojectCount();
    this.getVendorCount();
    this.getEmployeeCount();
  }

  getEmployeeCount(){
    //get Employee count
    EmployeeDataService.getAll().then(response => {
      this.setState({
        employeeCount: response.data.length,
        
      });
      //console.log(this.employeeCount);
    })
    .catch(e => {
      console.log(e);
    });
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

  getVendorCount(){
    //get Project count
    VendorDataService.getAll().then(response => {
      this.setState({
        vendorCount: response.data.length,
        
      });
      //console.log(projectDetails);
    })
    .catch(e => {
      console.log(e);
    });
  }
  //private  var projectDetails=[];
  retrieveProjects() {
    ProjectDataService.getAll()
      .then(response => {
        this.setState({
          projects: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  generatePDF(project){
    Report.generatePDF(project);
  }
  
  createUser(userId){
    if (typeof userId == 'undefined') {
      window.location="/register"
    }else{
      window.location="/register/"+userId
    }
  }

  render() {
    const { projectDetails,projectCount,vendorCount,employeeCount,projects } = this.state;
    
    var elements = {};
    //this.getprojectDetails(elements);
    console.log(projects);
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
            <div className="col-lg-3 col-sm-6 pb-2" id="employeecard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3" href="/employees" style={linkText}>

                <h1 className="nav-heading-title mb-0" style={{ fontSize:55 }}>{employeeCount}</h1>
                <h5 mb-0> <SupervisorAccount style={{ fontSize:25 }}/>  Employees</h5>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 pb-5" id="projectcard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3" style={linkText} href="/projects">

                <h1 className="nav-heading-title mb-0" style={{ fontSize:55 }}>{projectCount}</h1>
                <h5> <HomeWork style={{ fontSize:25 }}/>  Projects</h5>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 pb-2" id="vendorcard">
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3" style={linkText} href="/vendor">

                <h1 className="nav-heading-title mb-1" style={{ fontSize:55 }}>{vendorCount}</h1>
                <h6> <HomeWork style={{ fontSize:25 }}/>  Vendors & Subcontractors</h6>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 pb-2" id="capitalcard" hidden>
              <div className="card card-hover shadow-sm" style={cardStyle}>
              <a className="d-block nav-heading text-center mt-3" style={linkText} href="#">

                <h3 className="nav-heading-title mb-0" style={{ fontSize:55 }}>5</h3>
                <h5> <SupervisorAccount style={{ fontSize:25 }}/>  Pending Tasks</h5>
              </a>
              </div>
            </div>

          <div className="col-8 mb-4 mr-5">
            <a className="btn btn-primary p-2" onClick={()=>{this.generatePDF();}} id="list-settings-list"><Description style={{ fontSize:20 }}/> Generate Report</a>
            <a className="btn btn-primary p-2 ml-5 mr-5" id="list-settings-list" href="/list-report"> <Assessment style={{ fontSize:20 }}/> Analytics</a>
            <a className="btn btn-secondary p-2 ml-5" onClick={()=>{this.createUser(5);}}><AddCircleOutline style={{ fontSize:20 }}/> Add User</a>
            
          </div>
          <div className="col-4 mb-4 mr-5">

            
          </div>
          </div>
            <div classname-="mt-2 mb-2">
              <h3> Ongoing Projects:</h3>
            </div>
          <div classname="row">
            {projects.map(project =>(
              <div className="card card-hover shadow-sm col-lg-12 pt-1 mb-3 pb-3" id="project1">
              <a style={{ textDecoration: 'none' }} className="d-block nav-heading text-left ml-4 mt-3 mb-1 pb-3">
                  <div classname="row">
                    <h4 style={{color: "#273F7D"}} className="mb-6">{project.title}</h4>
                        <div className="col-sm-6 mb-2" id="project1">
                          <ProgressBar now={20} label="20" />
                        </div>
                      <div className="col-sm-6" id="project1_d">
                        <div className="row pb-2">
                          <h5 className="pr-5 pl-2"> <SupervisorAccount style={{ fontSize:24 }}/>  0</h5>
                          <h5> <LocationOn style={{ fontSize:24 }}/>  {project.location}</h5>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="list-group" id="list-tab" role="tablist"></div>
                          <a className="btn btn-primary p-2" onClick={()=>{this.generatePDF(project);}} id="list-settings-list">Report</a>
                      </div>
                  </div>
              </a>
              </div>
            ))}

          </div>
        <div className="row">
          
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
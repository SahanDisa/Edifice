import React, { Component } from "react";
import Dates from './core_tools/admin/dates.component'
import Defaults from './core_tools/admin/defaults.component'
import Roles from './core_tools/admin/roles.component'
import { Link } from "react-router-dom";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Employees from './core_tools/edifice-directory/employees.component'

import UserService from "../services/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      id: "this.props.match.params.id"
    };

    this.animationsomething();
  }

  animationsomething(){
    console.log("kohomathee");
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
  }

  render() {
    return (
      <div className="container">

        <div className="row">
            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="employeecard">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-3 mb-1" href="#">

                <h1 className="nav-heading-title mb-0" style={{ fontSize:65 }}>148</h1>
                <h4 mb-0> <SupervisorAccountIcon style={{ fontSize:30 }}/>  Employees</h4>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="projectcard">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-3 mb-1" href="#">

                <h1 className="nav-heading-title mb-0" style={{ fontSize:65 }}>11</h1>
                <h4> <HomeWorkIcon style={{ fontSize:25 }}/>  Projects</h4>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="vendorcard">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-3 mb-1" href="#">

                <h1 className="nav-heading-title mb-1" style={{ fontSize:65 }}>56</h1>
                <h6> <HomeWorkIcon style={{ fontSize:25 }}/>  Vendors & Subcontractors</h6>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="capitalcard">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-3 mb-1" href="#">

                <h3 className="nav-heading-title mb-0" style={{ fontSize:65 }}><span style={{ fontSize:35 }}>Rs.</span>48M</h3>
                <h4> <HomeWorkIcon style={{ fontSize:25 }}/>  Capital</h4>
              </a>
              </div>
            </div>

          </div>
          <div classname="row">

            <div className="card card-hover shadow-sm col-lg-12 pt-1 mb-3 pb-3" id="project1">
              <a className="d-block nav-heading text-left ml-4 mt-3 mb-1 pb-3" href="#">
                  <p>Port City</p>
                  <div classname="ml-6 mr-6">
                    <LinearProgress variant="determinate" value={50} />
                  </div>
              </a>
            </div>

            <div className="card card-hover shadow-sm col-lg-12 pt-1 mb-3 pb-3" id="project2">
              <a className="d-block nav-heading text-left ml-4 mt-3 mb-1 pb-3" href="#">
                  <p>Anilana</p>
                  <div classname="ml-6 mr-6">
                    <LinearProgress variant="determinate" value={38} />
                  </div>
              </a>
            </div>

          </div>
        <div className="row">
          <div className="col-2">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-admin" role="tab" aria-controls="home">Admin</a>
              <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Project</a>
              <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-directory" role="tab" aria-controls="profile">Directory</a>
              <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-document" role="tab" aria-controls="messages">Document</a>
              <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-tasks" role="tab" aria-controls="settings">Task</a>
              <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-report" role="tab" aria-controls="settings">Reports</a>
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
                      <a href="/dates" className="btn btn-primary"> Go To Dates</a>
                    </div>  
                    <p>Manage Deafults</p>
                    <a href="/defaults" className="btn btn-primary"> Go To Defaults</a>
                    <p>Manage Roles</p>
                    <a href="/roles" className="btn btn-primary"> Go To Roles</a>
                  </div>
                </div>  
              </div>
              {/* Admin project description */}
              <div className="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-profile-list">
              {/* This is the pre project creation tab  */}
                <h2>Project Admin</h2>
                
                <p>Create a new project inside the system</p>
                <a href="/addproject" className="btn btn-primary">+ Add New Project</a>
                <p>List All Project</p>
                <a href="/projects" className="btn btn-primary">Project Home</a>
              </div>
              <div className="tab-pane fade" id="list-directory" role="tabpanel" aria-labelledby="list-messages-list">
              <h5>Directory</h5>
                <p>View Employee Directory</p>
                <a href="/employees" className="btn btn-primary"> Employees</a>
                <p>View Vendor Directory</p>
                <a href="/vendors" className="btn btn-primary"> Vendors</a>
                <p>View Project Directory</p>
                <a href="/projects" className="btn btn-primary"> Projects</a>
              </div>

              <div className="tab-pane fade" id="list-document" role="tabpanel" aria-labelledby="list-settings-list">
                <h5>This is document</h5>
                <p>Manage pre construction level docments</p>
                <a href="/document" className="btn btn-primary"> Go To a Document</a>
              </div>
              
              <div className="tab-pane fade" id="list-tasks" role="tabpanel" aria-labelledby="list-settings-list">
                <h5>Tasks</h5><hr/>
                <a href="/tasksconfiguration" className="btn btn-primary mr-3"> Task Tool Configuration</a>
                <a href="/managetasks" className="btn btn-primary"> Manage Tasks</a>
              </div>
              <div className="tab-pane fade" id="list-report" role="tabpanel" aria-labelledby="list-settings-list">This is report</div>
            </div>
          </div>
          
        </div>
        {/* <Defaults /><Dates /><Roles /> */}
      </div>
    );
  }
}
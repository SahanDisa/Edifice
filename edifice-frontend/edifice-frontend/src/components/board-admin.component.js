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

        <h3> Core Tools Home</h3>
        <p>Current statistics of ongoing projects </p>

        <div className="row">
            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="employeecard">
              <div className="card card-hover shadow-sm" style={{backgroundColor: "#6B7BA4"}}>
              <a className="d-block nav-heading text-center mt-3 mb-1" href="#" style={{color: "#FFFFFF"}}>

                <h1 className="nav-heading-title mb-0" style={{ fontSize:55 }}>148</h1>
                <h5 mb-0> <SupervisorAccountIcon style={{ fontSize:25 }}/>  Employees</h5>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-5" id="projectcard">
              <div className="card card-hover shadow-sm" style={{backgroundColor: "#6B7BA4"}}>
              <a className="d-block nav-heading text-center mt-3 mb-1" style={{color: "#FFFFFF"}} href="#">

                <h1 className="nav-heading-title mb-0" style={{ fontSize:55 }}>11</h1>
                <h5> <HomeWorkIcon style={{ fontSize:25 }}/>  Projects</h5>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="vendorcard">
              <div className="card card-hover shadow-sm" style={{backgroundColor: "#6B7BA4"}}>
              <a className="d-block nav-heading text-center mt-3 mb-1" style={{color: "#FFFFFF"}} href="#">

                <h1 className="nav-heading-title mb-1" style={{ fontSize:55 }}>56</h1>
                <h6> <HomeWorkIcon style={{ fontSize:25 }}/>  Vendors & Subcontractors</h6>
              </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" id="capitalcard">
              <div className="card card-hover shadow-sm" style={{backgroundColor: "#6B7BA4"}}>
              <a className="d-block nav-heading text-center mt-3 mb-1" style={{color: "#FFFFFF"}} href="#">

                <h3 className="nav-heading-title mb-0" style={{ fontSize:55 }}><span style={{ fontSize:18 }}>Rs. </span>48M</h3>
                <h5> <HomeWorkIcon style={{ fontSize:25 }}/>  Capital</h5>
              </a>
              </div>
            </div>

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
        {/* <Defaults /><Dates /><Roles /> */}
      </div>
    );
  }
}
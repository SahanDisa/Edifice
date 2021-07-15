import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserService from "./../services/user.service";
import ProjectDataService from "./../services/project.service";
import AuthService from "./../services/auth.service";
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import { Grid,Container,Card,LinearProgress } from '@material-ui/core';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);

    this.state = {
      projects: [],
      currentIndex: -1,
      content: "",
      currentUser: AuthService.getCurrentUser()
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
    this.retrieveProjects(this.state.currentUser.id);
  }
  retrieveProjects(id) {
    ProjectDataService.userProjects(id)
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

  render() {
    const { projects,currentIndex,currentUser } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3> <HomeIcon color="primary" fontSize="large"/> Home</h3>
          <h3>Projects</h3>
          <h6>Projects that you are involved In</h6>
          
          {/* Display involved Project of a particular user */}
          <ul className="list-group">
            {projects &&
              projects.map((project, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  // onClick={() => this.setActiveProject(project, index)}
                  key={index}
                >
                  {project.firstname + " " + project.lastname}
                  <h5>{project.position}</h5>
                  <h6>{project.email}</h6>
                 
                <Link
                  to={"/projectmanagementhome/" + project.projectuserId}
                  className="btn btn-primary"
                >
                  Go To Project
                </Link>
                </li>
                
              ))}
          </ul>
          <h3>Puch List Items</h3>
          <h6>Items that you need attention to</h6>
          <ul className="list-group list-group-flush col-7">
              <li className="list-group-item">Basement Plan Checking</li>
              <li className="list-group-item">Inspect 2nd Floor Beam 2mm curving</li>
              <li className="list-group-item">Bidding #23 awarding</li>
          </ul>
          <h3>Action Plans & Schedule</h3>
          <h6>plans that you are contribution is assigned to</h6>
          <ul className="list-group list-group-flush col-7">
              <li className="list-group-item">
              <h5>Basement Plan</h5>
              Layer checking
              </li>
              <li className="list-group-item">
              <h5>Foundation Plan #2</h5>
              Concrete Bed inspect and quality check
              </li>
              <li className="list-group-item">
              <h5>Foundation Plan #1</h5>
              Layer 1 concrete + temperature check
              </li>
          </ul>
          <Link to={"/projectmanagement"}>
          <Fab color="primary" aria-label="add" >
            <CategoryIcon />
          </Fab>
          </Link>
        </header>
        
      </div>
    );
  }
}
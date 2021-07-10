import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserService from "./../services/user.service";
import ProjectDataService from "./../services/project.service";
import AuthService from "./../services/auth.service";
import HomeIcon from '@material-ui/icons/Home';
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
          <h5>Projects that you are involved In</h5>
          
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
                  <p>Project Id : {project.projectuserId}</p>
                  <p>User Id : {project.userId}</p>
                <Link
                  to={"/projectmanagementhome/" + project.projectuserId}
                  className="btn btn-primary"
                >
                  Go To Project
                </Link>
                </li>
                
              ))}
          </ul>

          <div class="card">
            <h5 class="card-header">Project XX2</h5>
            <div class="card-body">
              <h5 class="card-title">Port City: Apartment Section 01</h5>
              <Grid container direction="row-reverse" >
                <Grid item md={6}>
                  <Container style={{ backgroundColor: '#cfe8fc'}}>
                    <Grid container justifyContent="space-between">
                    <Grid item md={4} spacing={3}>
                      Progress of project
                    <LinearProgress variant="determinate" value={31} />
                    </Grid>
                    <Grid item >
                      <Paper>Issues</Paper>
                    </Grid>
                    </Grid>
                  </Container> 
                </Grid>
              </Grid> 
              </div>
              <div class="p-3 float-right">
                <a href={"/Project"} className="btn btn-primary"> Go to the project</a>
              </div>
            </div>
          <Link to={"/AddProject"}>
          <Fab color="primary" aria-label="add" >
            <AddIcon />
          </Fab>
          </Link>
        </header>
        
      </div>

      
    );
  }
}
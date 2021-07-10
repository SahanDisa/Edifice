import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserService from "./../services/user.service";
import AuthService from "./../services/auth.service";
import ProjectDataService from "./../services/project.service";
import CircularProgress from '@material-ui/core/CircularProgress';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.state = {
      projects: [],
      uprojects: [],
      currentIndex: -1,
      content: "",
      currentUser:  AuthService.getCurrentUser() 
    };
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
    //this.retrieveProjects();
    this.retrieveProjects(this.state.currentUser.id);
  }
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
  retriveSingleProject(id){
    ProjectDataService.get(id)
    .then(response => {
      this.setState({
        uprojects: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const { projects,uprojects,currentIndex } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Project Management Home</h3>
          <p>Start work on your project by select manage</p>
        </header>
        <div className="col-md-10">
        <h4>My Projects List</h4>

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
                {this.retriveSingleProject(project.projectuserId)}
                {uprojects.title}
                <h6>{uprojects.description}</h6>
                <p>{uprojects.location}</p>
              <CircularProgress variant="determinate" color="success" value={61} />
                  <p>61%</p>
              <Link
                to={"/projectmanagementhome/" + uprojects.id}
                className="btn btn-primary"
              >
                Manage
              </Link>
              </li>
              
            ))}
        </ul>
        </div> 
      </div> 
    );
  }
}
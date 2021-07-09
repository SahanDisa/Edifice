import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserService from "./../services/user.service";
import ProjectDataService from "./../services/project.service";
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.state = {
      projects: [],
      currentIndex: -1,
      content: "Moderator content"
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
    this.retrieveProjects();
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
  //UI component
  render() {
    const { projects,currentIndex } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Financial Management</h3>
          <p>Start work on your project financials by select manage</p>
        </header>
        <div className="col-md-10">
        <h4>Projects List</h4>

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
                {project.title}
                <h6>{project.description}</h6>
                <p>{project.location}</p>
              <CircularProgress variant="determinate" color="success" value={61} />
                  <p>61%</p>
              <Link
                to={"/financialmanagementhome/" + project.id}
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
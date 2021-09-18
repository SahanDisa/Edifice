import React, { Component } from "react";
import ProjectDataService from "./../../../services/project.service";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { Breadcrumbs } from "@material-ui/core";

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProject = this.setActiveProject.bind(this);
    this.removeAllProjects = this.removeAllProjects.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      projects: [],
      currentProject: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveProjects();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
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

  refreshList() {
    this.retrieveProjects();
    this.setState({
      currentProject: null,
      currentIndex: -1
    });
  }

  setActiveProject(project, index) {
    this.setState({
      currentProject: project,
      currentIndex: index
    });
  }

  removeAllProjects() {
    ProjectDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    ProjectDataService.findByTitle(this.state.searchTitle)
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
    const { searchTitle, projects, currentProject, currentIndex } = this.state;

    return (
      <div>
      {/* Top */}
      <div>
          <h2>Project Dashboard</h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">
              Home
            </Link>
            <Link color="inherit" to={"/admin"}>
              Core Dashboard
            </Link>
            <Link color="inherit" to={"/projects/"}>
              Projects
            </Link>
          </Breadcrumbs>
        </div> 
        <div className="mt-1">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      {/* Top ends */}
      <div className="">
        <h3>Projects List</h3>
        <h6>Create new projects to the system</h6>
        
      </div>
      <div className="row"> 
        <div className="col-md-6">
        <Link className="btn btn-primary mb-2" to="/addProject">Add New Project</Link>
          <ListGroup as="ul">
            {projects &&
              projects.map((project, index) => (
                <ListGroup.Item as="li"
                  action
                  onClick={() => this.setActiveProject(project, index)}
                  key={index}
                >
                  <h6>{project.title}</h6>
                </ListGroup.Item>
              ))}
            </ListGroup>

          <button className="btn btn-danger mt-2" onClick={this.removeAllProjects}>
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentProject ? (
            <div>
              <div>
                <label>
                  <h5><strong>Title:</strong></h5>
                </label>{" "}
                <h6>{currentProject.title}</h6>
              </div>
              <div>
                <label>
                  <h5><strong>Description:</strong></h5>
                </label>{" "}
                <h6>{currentProject.description}</h6>
              </div>
              <div>
                <label>
                  <h5><strong>Location:</strong></h5>
                </label>{" "}
                <h6>{currentProject.location}</h6>
              </div>
              <div>
                <label>
                  <h5><strong>Status:</strong></h5>
                </label>{" "}
                <h6>{currentProject.published ? "🔵 Published" : "🟡 Pending"}</h6>
              </div>
              <hr></hr>
              <Link
                to={"/projectmanagementhome/"+ currentProject.id}
                className="m-1 btn btn-sm btn-primary">
                Manage
              </Link>
              <Link
                to={"/addcustomdepartment/"+ currentProject.id}
                className="m-1 btn btn-sm btn-success"
                >
                Department
              </Link>
              <Link
                to={"/addmilestoneproject/"+ currentProject.id}
                className="m-1 btn btn-sm btn-success">
                Milestone
              </Link>
              <Link
                to={"/assignuser/"+ currentProject.id}
                className="m-1 btn btn-sm btn-success">
                Assign Users
              </Link>
              <Link
                to={"/projects/" + currentProject.id}
                className="m-1 btn btn-sm btn-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br/>
              <p>Please click on a Project...</p>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}
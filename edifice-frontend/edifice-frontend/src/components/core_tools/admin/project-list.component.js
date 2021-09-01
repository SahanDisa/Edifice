import React, { Component } from "react";
import ProjectDataService from "./../../../services/project.service";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

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
      <div className="row">
      <h2>Project Dashboard</h2>
        
        <div className="col-md-10">
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
        <div className="col-md-6">
          <h4>Projects List</h4>

          <a
            className="m-3 btn btn-sm btn-primary"
            href="/addProject">
            Add Project
          </a>

          <ListGroup as="ul">
            {projects &&
              projects.map((project, index) => (
                <ListGroup.Item as="li"
                  // className={
                  //   "list-group-item" +
                  //   (index === currentIndex ? "active" : "")}
                  action
                  onClick={() => this.setActiveProject(project, index)}
                  key={index}
                  
                >
                  {project.title}
                </ListGroup.Item>
              ))}
            </ListGroup>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllProjects}
          >
            Remove All
          </button>

        </div>
        <div className="col-md-6">
          {currentProject ? (
            <div>
              <h4>Project</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentProject.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentProject.description}
              </div>
              <div>
                <label>
                  <strong>Location:</strong>
                </label>{" "}
                {currentProject.location}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentProject.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/projects/" + currentProject.id}
                className="m-1 btn btn-sm btn-warning"
              >
                Edit
              </Link>
              <Link
                to={"#"}
                className="m-1 btn btn-sm btn-success"
                >
                Department
              </Link>
              <Link
                to={"/assignuser/"+ currentProject.id}
                className="m-1 btn btn-sm btn-primary">
                Assign Users
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
    );
  }
}
import React, { Component } from "react";
import ProjectDataService from "./../../../services/project.service";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.getProject = this.getProject.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);

    this.state = {
      currentProject: {
        id: null,
        title: "",
        description: "",
        location: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProject(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProject: {
          ...prevState.currentProject,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentProject: {
        ...prevState.currentProject,
        description: description
      }
    }));
  }

  onChangeLocation(e) {
    const location = e.target.value;
    
    this.setState(prevState => ({
      currentProject: {
        ...prevState.currentProject,
        location: location
      }
    }));
  }

  getProject(id) {
    ProjectDataService.get(id)
      .then(response => {
        this.setState({
          currentProject: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentProject.id,
      title: this.state.currentProject.title,
      description: this.state.currentProject.description,
      location: this.state.currentProject.location,
      published: status
    };

    ProjectDataService.update(this.state.currentProject.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentProject: {
            ...prevState.currentProject,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProject() {
    ProjectDataService.update(
      this.state.currentProject.id,
      this.state.currentProject
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The project was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProject() {    
    ProjectDataService.delete(this.state.currentProject.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/projects')
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
      const { currentProject } = this.state;
  
      return (
        <div>
          {currentProject ? (
            <div className="edit-form">
              <h2>Update a Project</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentProject.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentProject.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={currentProject.location}
                    onChange={this.onChangeLocation}
                  />
                </div>
  
                <div className="form-group">
                  <label>
                    <strong>Status:</strong>
                  </label>
                  {currentProject.published ? "Published" : "Pending"}
                </div>
              </form>
  
              {currentProject.published ? (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.updatePublished(false)}
                >
                  UnPublish
                </button>
              ) : (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.updatePublished(true)}
                >
                  Publish
                </button>
              )}
  
              <button
                className="badge badge-danger mr-2"
                onClick={this.deleteProject}
              >
                Delete
              </button>
  
              <button
                type="submit"
                className="badge badge-success"
                onClick={this.updateProject}
              >
                Update
              </button>
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Project...</p>
            </div>
          )}
        </div>
      );
  }
}
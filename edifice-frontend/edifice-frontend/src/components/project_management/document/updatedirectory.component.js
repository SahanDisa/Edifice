import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectoryDataService from "../../../services/directory.service";
import { Breadcrumbs } from "@material-ui/core";

export default class UpdateDirectory extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getDirectory = this.getDirectory.bind(this);
    this.updateDirectory = this.updateDirectory.bind(this);
    this.deleteDirectory = this.deleteDirectory.bind(this);

    this.state = {
      currentDirectory: {
        id: null,
        title: "",
        description: "",
        projectId: "",
        
      },
      message: "",
      temp: this.props.match.params.id,
      pid: this.props.match.params.pid,
      
    };
  }

  componentDidMount() {
    this.getDirectory(this.props.match.params.id);
    // this.retriveDirectoryCategory(this.props.match.params.pid);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDirectory: {
          ...prevState.currentDirectory,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentDirectory: {
        ...prevState.currentDirectory,
        description: description
      }
    }));
  }

  getDirectory(id) {
    DirectoryDataService.getOne(id)
      .then(response => {
        this.setState({
          currentDirectory: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateDirectory() {
    var data = {
      id: this.state.currentDirectory.id,
      title: this.state.currentDirectory.title,
      description: this.state.currentDirectory.description,
    };

    DirectoryDataService.update(this.state.currentDirectory.id,data)
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The directory content was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteDirectory() {    
    DirectoryDataService.delete(this.state.currentDirectory.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/projects')
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
      const { currentDirectory, temp,pid} = this.state;
  
      return (
        <div>
          {currentDirectory ? (
            <div className="container">
              <h2>Update a Directory</h2>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">
                  Home
                </Link>
                <Link color="inherit" to={"/projectmanagementhome/"+pid}>
                  App Dashboard
                </Link>
                <Link color="textPrimary" to={"/document/"+pid}>
                  Document Home
                </Link>
                <Link color="textPrimary" to={"/updatedirectory/"+pid+"/"+temp} aria-current="page">
                  Update Directory / {temp}
                </Link>
              </Breadcrumbs>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentDirectory.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentDirectory.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </form>
  
              <button
                className="btn btn-danger  mr-2"
                onClick={this.deleteDirectory}
              >
                Delete
              </button>
  
              <button
                type="submit"
                className="btn btn-warning mr-2"
                onClick={this.updateDirectory}
              >
                Update
              </button>
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Directory...</p>
            </div>
          )}
        </div>
      );
  }
}
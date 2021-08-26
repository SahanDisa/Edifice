import React, { Component } from "react";
import DrawingDataService from "./../../../services/drawing.service";

export default class UpdateDrawing extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.getDrawing = this.getDrawing.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateDrawing = this.updateDrawing.bind(this);
    this.deleteDrawing = this.deleteDrawing.bind(this);

    this.state = {
      currentDrawing: {
        id: null,
        title: "",
        description: "",
        category: "",
        status: "",
        published: false
        
      },
      message: "",
      temp: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.getDrawing(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDrawing: {
          ...prevState.currentDrawing,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentDrawing: {
        ...prevState.currentDrawing,
        description: description
      }
    }));
  }

  onChangeCategory(e) {
    const category = e.target.value;
    
    this.setState(prevState => ({
      currentDrawing: {
        ...prevState.currentDrawing,
        category: category
      }
    }));
  }

  onChangeStatus(e) {
    const status = e.target.value;
    
    this.setState(prevState => ({
      currentDrawing: {
        ...prevState.currentDrawing,
        status: status
      }
    }));
  }

  getDrawing(id) {
    DrawingDataService.get(id)
      .then(response => {
        this.setState({
          currentDrawing: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentDrawing.id,
      title: this.state.currentDrawing.title,
      description: this.state.currentDrawing.description,
      category: this.state.currentDrawing.category,
      status: status
    };

    DrawingDataService.update(this.state.currentDrawing.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentDrawing: {
            ...prevState.currentDrawing,
            status: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateDrawing() {
    DrawingDataService.update(
      this.state.currentDrawing.id,
      this.state.currentDrawing
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

  deleteDrawing() {    
    DrawingDataService.delete(this.state.currentDrawing.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/projects')
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
      const { currentDrawing, temp} = this.state;
  
      return (
        <div>
          {currentDrawing ? (
            <div className="container">
              <h2>Update a Drawing</h2>
              <h4>Drawing Id : {temp}</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentDrawing.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentDrawing.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={currentDrawing.category}
                    onChange={this.onChangeCategory}
                  />
                </div>
  
                <div className="form-group">
                  <label>
                    <strong>Status:</strong>
                  </label>
                  {currentDrawing.status}
                </div>
              </form>

              {currentDrawing.status == "Not Complete" ? (
                <button
                  className="btn btn-pending mr-2"
                  onClick={() => this.updatePublished("Pending")}
                >
                  Set Pending
                </button>
              ) : 
              (currentDrawing.status == "Pending" ?
                <button
                  className="btn btn-success mr-2"
                  onClick={() => this.updatePublished("Complete")}
                >
                  Set Complete
                </button>
              :
              (
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => this.updatePublished("Not Complete")}
                >
                  Set Incomplete
                </button>
              ))}
  
              <button
                className="btn btn-danger  mr-2"
                onClick={this.deleteDrawing}
              >
                Delete
              </button>
  
              <button
                type="submit"
                className="btn btn-warning mr-2"
                onClick={this.updateDrawing}
              >
                Update
              </button>
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Drawing...</p>
            </div>
          )}
        </div>
      );
  }
}
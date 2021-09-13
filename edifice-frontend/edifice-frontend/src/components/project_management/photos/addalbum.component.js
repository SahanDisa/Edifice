import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumDataService from "./../../../services/album.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default class AddAlbum extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveAlbum = this.saveAlbum.bind(this);
    this.newAlbum = this.newAlbum.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveAlbum() {
    console.log("click kala");  
    var data = {
      title : this.state.title,
      description: this.state.description,
      projectId: this.state.projectId
    };

    AlbumDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newAlbum() {
    this.setState({
      id: null,
      title: "",
      description: "",
      projectId: this.props.match.params.id,

      submitted: false
    });
  }

  render() {
    const {projectId} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <center>
          <div>
          
            <h4>Album details successfully submitted!</h4>
            <button className="btn btn-success m-2" onClick={this.newDrawing}>
            Add Another Album
            </button>
            <Link className="btn btn-primary m-2" to={"/photos/"+projectId}>
                Home
            </Link>
          </div>
          </center>
        ) : (
          <div className="container">
            <h2>Add New Album</h2>
            <div className="row">
            <div className="col-sm-8">
                <div className="form-group">
                <label htmlFor="name">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    name="title"
                />
                </div>

                <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                />
                </div>
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Album Design</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Finish/Add Another</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            <button onClick={this.saveAlbum} className="btn btn-success">
              Create 
            </button>
          </div>
        )}
      </div>
    );
  }
}
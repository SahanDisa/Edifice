import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocumentDataService from "./../../../services/documentfile.service";
import DirectoryDataService from "./../../../services/directory.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default class AddDocument extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangePath = this.onChangePath.bind(this);
    this.saveDocument = this.saveDocument.bind(this);
    this.newDocument = this.newDocument.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      category: "1",
      path: "http://localhost:8080/api/files/", 
      projectId: this.props.match.params.id, 
      
      directory: [],
      currentIndex: -1,
      submitted: false
    };
  }
  componentDidMount() {
    this.retriveDocumentCategory(this.props.match.params.id);
  }
  onChangeName(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangePath(e) {
    this.setState({
      path: e.target.value
    });
  }
  retriveDocumentCategory(id){
    DirectoryDataService.getAll(id)
    .then(response => {
        this.setState({
          directory: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  saveDocument() {  
    var data = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      path: this.state.path,
      projectId: this.state.projectId
    };

    DocumentDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          category: response.data.category,
          path: response.data.path,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDocument() {
    this.setState({
      id: null,
      title: "",
      description: "",
      category: "",
      path: "",
      projectId: this.props.match.params.id,
      
      submitted: false
    });
  }

  render() {
    const {projectId, title,currentIndex, directory} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>File details successfully submitted!</h4>
            <h4>Upload the file</h4>
            <Link to={"/uploaddocument/"+title+".pdf"} className="btn btn-warning"  style={{ 'text-decoration': 'none' }}>
              Upload File
            </Link>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Document</h2>
            <div className="row">
            <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="name">Document Title</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.title}
                onChange={this.onChangeName}
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

            <div className="form-group">
              <label htmlFor="category">Document Category</label>
              <select 
                className="form-control"
                id="datatype"
                required
                name="category"
                value={this.state.category}
                onChange={this.onChangeType}
              >
                {directory &&
                directory.map((singledirectory, index) => (
                <option
                    value={singledirectory.id}
                    onChange={this.onChangeType}
                    key={index}
                >
                {/* unit data */}
                {singledirectory.title}
                </option>
                ))}
              </select>
            </div>  
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Document Settings</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Upload File</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            <button onClick={this.saveDocument} className="btn btn-success">
              Create 
            </button>
          </div>
        )}
      </div>
    );
  }
}
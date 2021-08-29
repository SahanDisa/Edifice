import React, { Component, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UploadPhotoService from "./../../../services/photoupload.service";
import CameraAltIcon from '@material-ui/icons/CameraAlt';

export default class UploadPhotos extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    
    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      title: this.props.match.params.name,

      fileInfos: [],
    };
  }
  componentDidMount() {
    // UploadService.getFiles().then((response) => {
    //   this.setState({
    //     fileInfos: response.data,
    //   });
    // });
  }
  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }
  upload() {
    let currentFile = this.state.selectedFiles[0];
    let fileName = this.state.title;
    console.log(currentFile);
    console.log(fileName);
    
    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadPhotoService.upload(currentFile, fileName, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadPhotoService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      title
    } = this.state;

    return (
      <div className="container">
      <h3>Upload the Image Source</h3>
      <p>File source document : - {title}</p>
      <div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <CameraAltIcon/>
          <input type="file" onChange={this.selectFile} />
        </label>

        <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        {/* <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url} target="_blank">{file.name}</a>
                </li>
              ))}
          </ul>
          </div>*/}
        </div>
        {/* <button onClick={() => useHistory.goBack()} >Go Back</button> */}
      </div>
    );
  }
}
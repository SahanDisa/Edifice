import React, { useState, useEffect } from "react";
import UploadService from "./../../../services/document.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { Document, Page } from "react-pdf";

const UploadDocFiles = () => {
  
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    const [fileInfos, setFileInfos] = useState([]);
    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };
    const upload = () => {
        let currentFile = selectedFiles[0];
    
        setProgress(0);
        setCurrentFile(currentFile);
    
        UploadService.upload(currentFile, (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
        })
          .then((response) => {
            setMessage(response.data.message);
            return UploadService.getFiles();
          })
          .then((files) => {
            setFileInfos(files.data);
          })
          .catch(() => {
            setProgress(0);
            setMessage("Could not upload the file!");
            setCurrentFile(undefined);
          });
    
        setSelectedFiles(undefined);
    };
    useEffect(() => {
        UploadService.getFiles().then((response) => {
          setFileInfos(response.data);
        });
    }, []);
    return (
        <div>
        <h2>Add Single Document</h2>
        <hr></hr>
        <p>Add your required and vital documents</p>
        <div className="row">
        <div className="container col-sm-8">
            <div className="form-group">
              <label htmlFor="title">Document Name:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                // value={this.state.title}
                // onChange={this.onChangeTitle}
                // name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description :</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                // value={this.state.description}
                // onChange={this.onChangeDescription}
                // name="description"
              />
            </div>
            {/* Upload part */}
            <h4>Upload Status</h4>
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
            <input type="file" onChange={selectFile} />
          </label>
    
          <button
            className="btn btn-primary"
            disabled={!selectedFiles}
            onClick={upload}
          >
            Upload
          </button>
    
          <div className="alert alert-light" role="alert">
            {message}
          </div>
        </div>
        <div className="col-sm-4">
        </div>
        </div>
        <button className="btn btn-success">Add Document</button>
       </div>
    );
};

export default UploadDocFiles;
import React, { useState, useEffect } from "react";
import UploadService from "./../../../services/document.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

const UploadFiles = () => {
  
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
  
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
        <h2>Document</h2>
        <p>Upload the pre contruction stage document in one place</p>
        <hr></hr>
        <h3>Directory</h3>
        <p>Manage the related documents in one place using directory</p>
        <a href="/document/directory" className="btn btn-primary">Add Directory</a>
        <hr></hr>
        <Row>
          <Col xs={6} md={4}>
            {/* Card one */}
            <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Pre-Construction</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
              </Card>
          </Col>
          <Col xs={6} md={4}>
           {/* Card two */}
           <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Insfrastructure</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            {/* Card three */}
            <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>BOQs</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr></hr>
        <h3>Upload Documents</h3>
        <p>Add your required and vital documents</p>
        <div className="container">
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
        <hr></hr>
        <h3>Document View and Download</h3>  
        <div className="card">
            <div className="card-header"><h5>Recent List</h5></div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={file.url}>{file.name}</a>
                  </li>
                ))}
            </ul>
          </div>
          {/* Browser-native */}
          <h3>View Documents</h3>
          <p>View necessary documents</p>
          <embed
              src="http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
              type="application/pdf"
              frameBorder="0"
              scrolling="auto"
              height="500px"
              width="100%"
          ></embed>
        </div>
    );
};

export default UploadFiles;
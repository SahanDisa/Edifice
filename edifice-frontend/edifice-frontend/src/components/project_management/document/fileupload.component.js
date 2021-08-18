import React, { useState, useEffect } from "react";
import UploadService from "./../../../services/document.service";
import Card from 'react-bootstrap/Card';
import { AccordViewer } from "./viewdocument.component";

const UploadFiles = () => {
  
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
        <h2>Document</h2>
        <p>Manage project specific documents in one place</p>
        <hr></hr>
        <h3>Directory</h3>
        <p>Manage the related documents in one place using directory</p>
        <a href="/directory" className="btn btn-primary m-2">Add Directory</a>
        <a href="/adddocument" className="btn btn-primary">Add Document</a>
        <hr></hr>
        <div className="container row">
          <div className="container">
            <h4>Directory List</h4>
              <div className="container row">
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
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
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Finishing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Plumbing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Electrical</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
              </div>
          </div>
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
          <hr></hr>
          <h3>View Documents</h3>
          <p>View necessary documents</p>
          <embed
              src="https://www.pearsonhighered.com/assets/samplechapter/0/1/3/4/0134454170.pdf"
              type="application/pdf"
              frameBorder="0"
              scrolling="auto"
              height="500px"
              width="100%"
          ></embed>
          {/* <div>
            <Document
              file="http://www.oas.org/juridico/PDFs/https://www.tendringdc.gov.uk/sites/default/files/documents/business/doing%20business%20with%20the%20council/RosemaryRd/3327-Preconstruction%20Information.pdf.pdf.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </div> */}
          <AccordViewer />
        </div>
    );
};

export default UploadFiles;
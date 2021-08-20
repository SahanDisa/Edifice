import React, { useState, useEffect } from "react";
import UploadService from "./../../../services/document.service";

//
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core';
//
import { MobilePDFReader } from 'reactjs-pdf-reader';
import { PDFReader } from 'reactjs-pdf-reader';



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
          console.log("hi");
          console.log(response.data);
        });
    }, []);
    //viewer
    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
      
    // for onchange event
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');

    // for submit event
    const [viewPdf, setViewPdf]=useState(null);

    // onchange event
    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
      let selectedFile=e.target.files[0];
      if(selectedFile){
        if(selectedFile&&fileType.includes(selectedFile.type)){
          let reader = new FileReader();
              reader.readAsDataURL(selectedFile);
              reader.onloadend = (e) =>{
                setPdfFile(e.target.result);
                setPdfFileError('');
              }
        }
        else{
          setPdfFile(null);
          setPdfFileError('Please select valid pdf file');
        }
      }
      else{
        console.log('select your file');
      }
    }

    // form submit
    const handlePdfFileSubmit=(e)=>{
      e.preventDefault();
      console.log("pdf-look");
      if(pdfFile!==null){
        setViewPdf(pdfFile);
      }
      else{
        setViewPdf(null);
      }
    }
    //end viewer
    return (
        <div>
        
        <hr></hr>
        <h3>Document View and Download</h3>  
        <div className="card">
            <div className="card-header"><h5>Recent List</h5></div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={file.url}>{file.name}{" "}{file.url}</a>
                  </li>
                ))}
            </ul>
          </div>
          {/* Browser-native */}
          <hr></hr>
          <div className='container'>
           <br></br>  
              <form className='form-group' onSubmit={handlePdfFileSubmit}>
                <input type="file" className='form-control'
                  required onChange={handlePdfFileChange}
                />
                {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
                <br></br>
                <button type="submit" className='btn btn-success btn-lg'>
                  UPLOAD
                </button>
              </form>
              {/* form select */}
              <br></br>
              <h4>View PDF</h4>
              <div className='pdf-container'>
                {/* show pdf conditionally (if we have one)  */}
                {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer fileUrl={viewPdf}
                    plugins={[defaultLayoutPluginInstance]} />
              </Worker></>}
            
              {/* if we dont have pdf or viewPdf state is null */}
              {!viewPdf&&<>No pdf file selected</>}
              </div>
              <div>
              
              </div>
              {/* <div style={{overflow:'scroll',height:600}}>
                <MobilePDFReader url={"http://localhost:8080/api/files/APPS10.pdf"} showAllPage="true"/>
              </div> */}
            </div>
        </div>
    );
};

export default UploadFiles;
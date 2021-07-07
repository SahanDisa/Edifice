import React, { useState, useEffect } from "react";
import UploadService from "./../../../services/document.service";
import DatePicker from 'react-datepicker';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreatePrimeContracts = () => {

  /* document upload*/
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
  /* document upload*/

    return (
    <div>
       <h3>NEW PRIME CONTRACT </h3><hr/>
       <div className="mb-3">
          <h5>General Information</h5>
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">#</label> 
              </div>
              <div className="form-group col-md-2">
              <input className="form-control" type="number" min="0" required/>
              </div>
              <div className="form-group col-md-2"></div>
              </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Owner/Client:</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Initialized" selected>Vartex Properties</option>
                  <option value="In progress">###</option>
                  <option value="Ready for review">###</option>
                  <option value="Closed">###</option>
                  <option value="Void">###</option>
                </select>
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Contractor:</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Assignee 1" selected>Edifice</option>
                </select>
              </div>
              </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Architect/Engineer:</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Assignee 1" selected>Member 1</option>
                  <option value="Assignee 2">Member 2</option>
                </select>
              </div>
              </div><hr />
              <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Title:</label>
              </div>
              <div className="form-group col-md-4">
              <input className="form-control" type="textarea"/>
              </div>
            </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Status:</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Assignee 1" selected>Draft</option>
                  <option value="Assignee 2">Out for Bid</option>
                  <option value="Assignee 2">Out for Signature</option>
                  <option value="Assignee 2">Approved</option>
                  <option value="Assignee 2">Out for Signature</option>
                  <option value="Assignee 2">Complete</option>
                  <option value="Assignee 2">Terminated</option>
                </select>
              </div><div className="form-group col-md-2"></div>
              
              <div className="form-group col-md-2">
                <label htmlFor="">Private:</label>
              </div>
              <div className="form-group col-md-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="privateCheck" />
                <label htmlFor="privateCheck" className="form-check-label">Make this visible only to administrators.</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="privateCheck" />
                <label htmlFor="privateCheck" className="form-check-label">Allow these users to see SOV items.</label>
              </div></div>
              <hr />
              <div className="form-row">
           
              <select className="form-control" required>
                  <option value="Category 1">Select a person</option>
                  <option value="Category 2">Member 1</option>
                </select>
              
                </div>
            </div><hr />
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Start Date:</label>
              </div>
              <div className="form-group col-md-2">
              <DatePicker
              name="startDate"
              dateFormat="MM/dd/yyyy"
          />
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Estimated Completion Date:</label>
              </div>
              <div className="form-group col-md-2">
              <DatePicker
              name="completionDate"
              dateFormat="MM/dd/yyyy"
          />
              </div>
              </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Signed Contract Received Date:</label>
              </div>
              <div className="form-group col-md-2">
              <DatePicker
              name="startDate"
              dateFormat="MM/dd/yyyy"
          />
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Actual Completion Date:</label>
              </div>
              <div className="form-group col-md-2">
              <DatePicker
              name="startDate"
              dateFormat="MM/dd/yyyy"
          />
              </div>
              </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Default Retainange:</label>
              </div>
              <div className="form-group col-md-1">
              <input className="form-control" type="text"/>
              </div><div className="form-group col-md-1">%</div>
            </div>
            
            <hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Description:</label>
              </div>
              <div className="form-group col-md-6">
              <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Inclusions:</label>
              </div>
              <div className="form-group col-md-6">
              <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Exclusions:</label>
              </div>
              <div className="form-group col-md-6">
              <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="">Attachments:</label>
              </div>
              <div className="form-group col-md-2">
        <div className="container">
            <h6>Upload Status</h6>

        </div>
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
            className="btn btn-success"
            disabled={!selectedFiles}
            onClick={upload}
          >
            Upload
          </button>
    
          <div className="alert alert-light" role="alert">
            {message}
          </div>
    
          <div className="card">
            <div className="card-header">List of Documents</div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={file.url}>{file.name}</a>
                  </li>
                ))}
            </ul>
          </div>

             </div></div>
            <div className="form-row">
            <a href="/prime-contracts" type="submit" className="btn btn-success">Cancel</a>&nbsp;&nbsp;
            <a href="/prime-contracts" type="submit" className="btn btn-success">Create & Email</a>&nbsp;&nbsp;
            <a href="/prime-contracts" type="submit" className="btn btn-success">Create</a>&nbsp;&nbsp;
            
            </div><br />
          </form>
    </div>
    );
}

export default CreatePrimeContracts;
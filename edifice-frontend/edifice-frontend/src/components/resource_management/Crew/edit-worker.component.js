import React, { Component } from 'react';
import WorkersDataService from "./../../../services/worker.service";

class EditWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //crews: [],
      //workers: [],
      //currentIndex: -1,
      //content: "",
      wId: this.props.id,
      fristName:this.props.fName,
      lastName:this.props.lName,
      mobile:this.props.mobile
    };
  }
    render() {
      const { wId,fristName,lastName, mobile} = this.state;
        return (  
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Edit Worker Details</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                    <div>

                        
                        <label htmlFor="">Id</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={wId}/>

                        <label htmlFor="">First Name</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={fristName}/>
                        <br/>

                        <label htmlFor="">Last Name</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={lastName}/>
                        <br/>

                        <label htmlFor="">Mobile</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={mobile}/>
                        <br/>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success">Update</button>
                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default EditWorker;

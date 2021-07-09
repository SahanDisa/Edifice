import React, { Component } from 'react';

class AddWorker extends Component {
    render() {
        return (  
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add New Worker</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                    <div>

                        <label htmlFor="">First Name</label>
                        <input className="form-control" type="text" required/>
                        <br/>

                        <label htmlFor="">Last Name</label>
                        <input className="form-control" type="text" required/>
                        <br/>

                        <label htmlFor="">Id</label>
                        <input className="form-control" type="text" required/>
                        <br/>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-success">Add</button>
                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default AddWorker;

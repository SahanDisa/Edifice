
import React, { Component } from 'react';

class NewEquip extends Component {
    render() {
        return (  
        <div>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add Equipment</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                  <div class="container">                                
                    <div class="row">
                      <div class="col-6">
                        <label htmlFor="">Id</label>
                        <input className="form-control" type="text" required/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Brand/code</label>
                        <input className="form-control" type="text" required/>
                      </div>
                   </div>
                  </div>

                  <div class="container">                                
                    <div class="row">
                      <div class="col-6">
                        <label htmlFor="">Date issued</label>
                        <input className="form-control" type="date" id="timesheet" name="timesheet"/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Condition</label>
                        <select className="form-control" name="" id="">
                            <option value="role1">Good(New)</option>
                            <option value="role2">Fair</option>
                            <option value="role3">Poor</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label htmlFor="">Description</label>
                    <input className="form-control" type="text" required/>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
        </div>
 
      );
    }
  }

export default NewEquip;

import React, { Component } from 'react';

class AllocateEquip extends Component {
    render() {
        return (  
        <div>
            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Allocate</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                  <div class="container">                                
                    <div class="row">
                      <div class="col-12">
                        <label htmlFor="">Select Project</label>
                        <input className="form-control" type="text" required/>
                      </div>
                   </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Assign</button>
                </div>
              </div>
            </div>
        </div>
 
      );
    }
  }

export default AllocateEquip;

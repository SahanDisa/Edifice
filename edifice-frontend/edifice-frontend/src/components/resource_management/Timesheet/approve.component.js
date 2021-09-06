import React, { Component } from 'react';

class Approve extends Component {
    render() {
        return (  
        <div>
    
            <div className="modal-dialog modal modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Timesheet</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body text-center">
                        <p>Are you sure you want to aprove this timesheet?</p>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Approve</button>
                    </div>
                </div>
            </div>
        </div>  
        );
    }
  }

export default Approve;





 
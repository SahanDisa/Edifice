import React, { Component } from 'react';
import TimesheetDataService from "../../../services/timesheet.service";

class Approve extends Component {
    constructor(props) {
        super(props);
        this.updateTimesheet = this.updateTimesheet.bind(this);

        this.state = {
            currentStatus:{
                code: this.props.timesheetId,
                status: "Pending"
            }
        };
      }

      updateTimesheet(){
        var data = {
            status: this.state.currentStatus.status
          };
      
          TimesheetDataService.update(this.props.timesheetId, data)
            .then(response => {
              this.setState(prevState => ({
                currentStatus: {
                  ...prevState.currentStatus,
                }
              }));
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      }

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
                        <p>Are you sure you want to remove the aproval?</p>
                    </div>

                    <div className="modal-footer">
                        <button 
                        className="btn btn-primary" 
                        data-dismiss="modal"
                        onClick={this.updateTimesheet}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>  
        );
    }
  }

export default Approve;





 
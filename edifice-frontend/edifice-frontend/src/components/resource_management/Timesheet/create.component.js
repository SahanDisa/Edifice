import React, { Component } from 'react';

import TimesheetDataService from "./../../../services/timesheet.service";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class CreateTimesheet extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.saveTimesheet = this.saveTimesheet.bind(this);
        this.state = {
          crews: [],
          workers: [],
          currentIndex: -1,
          content: "",
          date:"",
          code:"",
          status:"Pending",
          id: this.props.projectId
        };
      }

      //create timesheet
      onChangeDate(e) {
        this.setState({
          date: e.target.value
        });
      }

      onChangeCode(e) {
        this.setState({
          code: e.target.value
        });
      }

      saveTimesheet() {
        var data = {
          date: this.state.date,
          status: "Pending",
          projectId: this.props.projectId,
          code: this.state.code
        };
    
        TimesheetDataService.create(data)
          .then(response => {
            this.setState({
              date: response.data.date,
              status: response.data.status,
              projectId: response.data.projectId,
              code: response.data.code,
    
            });
            console.log(response.data);
            window.location.reload();
          })
          .catch(e => {
            console.log(e);
          });
      }

    render() {
        const { crews ,currentIndex,id, workers } = this.state;
        //console.log(workers)
        return (  
        <div>
            {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}

            
            
            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">New Timesheet</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body" align ="left">

                        <div class="container">
                                <div class="row">
                                    <div className="col-auto">
                                        
                                            <div className="col-auto">
                                                <label>Select Date</label>
                                            </div>
                                            <div className="col-auto">
                                                <input 
                                                className="form-control" 
                                                type="date" 
                                                id="date" 
                                                name="date"
                                                value={this.state.date}
                                                onChange={this.onChangeDate}
                                                />
                                            </div>
                                            <br />

                                            <div className="col-auto">
                                                <label>Timesheet code</label>
                                            </div>
                                            <div className="col-auto">
                                                <input 
                                                className="form-control" 
                                                type="text" 
                                                id="code" 
                                                name="code"
                                                value={this.state.code}
                                                onChange={this.onChangeCode}
                                                />
                                            </div>
                                            <br />
                                           
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button 
                        type="button" 
                        className="btn btn-success" 
                        data-dismiss="modal"
                        onClick={this.saveTimesheet}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
            {/*-------------------------------------------------------- Add Emp Ends----------------------------------------------------------------------*/}
        </div>  
        );
    }
  }

export default CreateTimesheet;





 
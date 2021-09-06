import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import WorkersDataService from "./../../../services/worker.service";

class EditWorker extends Component {
  constructor(props) {
    super(props);
    this.deleteWorker = this.deleteWorker.bind(this);
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

  deleteWorker() {    
    WorkersDataService.delete(this.state.wId)
      .then(response => {
        console.log(response.data);
       // this.props.history.push('/drawings/'+this.state.pid);
      })
      .catch(e => {
        console.log(e);
      });
  }




    render() {
      const { wId,fristName,lastName, mobile} = this.state;
      //console.log(wId)
        return (  
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Worker Details</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                    <div>

                        <label htmlFor=""><b>Id:</b> {wId}</label>

                        <label htmlFor=""><b>First Name:</b> {fristName}</label>

                        <label htmlFor=""><b>Last Name:</b> {lastName}</label>

                        <label htmlFor=""><b>Mobile:</b> {mobile}</label>
                    </div>
                </div>
                <div className="modal-footer">
                <button 
                type="button" 
                className="btn btn-danger" 
                data-toggle="modal" 
                data-target="#viewWorker"
                onClick={this.deleteWorker}>
                  Delete 
                  <DeleteIcon/>
                </button>

                <button 
                type="button" 
                className="btn btn-success">
                  Check Worked Hours
                </button>

                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default EditWorker;

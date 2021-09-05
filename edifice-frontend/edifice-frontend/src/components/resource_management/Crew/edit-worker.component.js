import React, { Component } from 'react';
import WorkerDataService from "./../../../services/worker.service";

class EditWorker extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.updateWorker=this.updateWorker.bind(this);

    this.state = {
      //crews: [],
      //workers: [],
      //currentIndex: -1,
      //content: "",
      currentWorker:{
        wId: this.props.id,
        firstName:this.props.fName,
        lastName:this.props.lName,
        mobile:this.props.mobile
      }

    };
  }

  onChangeFirstName(e) {
    const firstName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentWorker: {
          ...prevState.currentWorker,
          firstName: firstName
        }
      };
    });
  }

  onChangeMobile(e) {
    const mobile = e.target.value;

    this.setState(function(prevState) {
      return {
        currentWorker: {
          ...prevState.currentWorker,
          mobile: mobile
        }
      };
    });
  }

  onChangeLastName(e) {
    const lastName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentWorker: {
          ...prevState.currentWorker,
          lastName: lastName
        }
      };
    });
  }

  updateWorker() {
    var data = {
      wId:this.state.currentWorker.wId,
      firstName:this.state.currentWorker.firstName,
      lastName:this.state.currentWorker.lastName,
      mobile:this.state.currentWorker.mobile,
    };
    WorkerDataService.update(this.state.currentWorker.wId,data)
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The worker was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
      const { currentWorker} = this.state;
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
                        value={currentWorker.wId}
                        disabled/>

                        <label htmlFor="">First Name</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={currentWorker.firstName}
                        onChange={this.onChangeFirstName}/>
                        <br/>

                        <label htmlFor="">Last Name</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={currentWorker.lastName}
                        onChange={this.onChangeLastName}/>
                        <br/>

                        <label htmlFor="">Mobile</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        value={currentWorker.mobile}
                        onChange={this.onChangeMobile}/>
                        <br/>
                    </div>
                </div>
                <div className="modal-footer">
                  <button 
                  type="submit" 
                  className="btn btn-success"
                  onClick={this.updateWorker}>
                    Update
                  </button>
                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default EditWorker;

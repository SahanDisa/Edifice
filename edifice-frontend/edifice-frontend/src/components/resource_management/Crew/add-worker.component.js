import React, { Component } from 'react';

import WorkerDataService from "./../../../services/worker.service";


class AddWorker extends Component {
  constructor(props) {
    super(props);
    this.onChangewId = this.onChangewId.bind(this);
    this.onChangefirstName =this.onChangefirstName.bind(this);
    this.onChangelastName =this.onChangelastName.bind(this);
    this.onChangemobile =this.onChangemobile.bind(this);
    this.saveWorker = this.saveWorker.bind(this);

    this.state = {
      wId: null,
      firstName: "",
      lastName:"",
      mobile:"",
     // projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangewId(e) {
    this.setState({
      wId: e.target.value
    });
  }

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangemobile(e) {
    this.setState({
      mobile: e.target.value
    });
  }

  saveWorker() {
    var data = {
      wId: this.state.wId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobile: this.state.mobile,
      crewId: this.state.crewId,
      projectId: this.state.projectId
    };


    WorkerDataService.create(data)
      .then(response => {
        this.setState({
          wId: response.data.wId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          mobile: response.data.mobile,
          crewId: response.data.crewId,
          projectId: this.state.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

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
                        <input 
                          className="form-control" 
                          type="text" 
                          required
                          id="firstName"
                          value={this.state.firstName}
                          onChange={this.onChangefirstName}
                          name="firstName"/>
                        <br/>

                        <label htmlFor="">Last Name</label>
                        <input 
                          className="form-control" 
                          type="text" 
                          required
                          id="lastName"
                          value={this.state.lastName}
                          onChange={this.onChangelastName}
                          name="lastName"/>
                        <br/>

                        <label htmlFor="">Id</label>
                        <input 
                          className="form-control" 
                          type="text" 
                          required
                          id="wId"
                          value={this.state.wId}
                          onChange={this.onChangewId}
                          name="wId"/>
                        <br/>

                        <label htmlFor="">Mobile Number</label>
                        <input 
                          className="form-control" 
                          type="number" 
                          required
                          id="mobile"
                          value={this.state.mobile}
                          onChange={this.onChangemobile}
                          name="mobile"/>
                        <br/>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.saveWorker}>Add</button>
                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default AddWorker;

import React, { Component } from 'react';

import WorkerDataService from "./../../../services/worker.service";
import CrewDataService from "./../../../services/crew.service";


class AddWorker extends Component {
  constructor(props) {
    super(props);
    this.retrieveCrew = this.retrieveCrew.bind(this);
    this.onChangewId = this.onChangewId.bind(this);
    this.onChangefirstName =this.onChangefirstName.bind(this);
    this.onChangelastName =this.onChangelastName.bind(this);
    this.onChangemobile =this.onChangemobile.bind(this);
    this.onChangecrewId=this.onChangecrewId.bind(this);
    this.saveWorker = this.saveWorker.bind(this);
    

    this.state = {
      wId: null,
      firstName: "",
      lastName:"",
      mobile:"",
      crewId:"",
      crews:[],
      id: this.props.projectId,
     // projectId: this.props.match.params.id,  
      
    };
    console.log("ssdsdsdsdsdsddddddddddddd")
    console.log(this.props.projectId)
    console.log("ssdsdsdsdsdsddddddddddddd")

  }

  componentDidMount() {
    this.retrieveCrew(1);
  }

  retrieveCrew(id) {
    CrewDataService.getAll(id)
      .then(response => {
        this.setState({
          crews: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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

  onChangecrewId(e) {
    this.setState({
      crewId: e.target.value
    });
  }

  saveWorker() {
    var data = {
      wId: this.state.wId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobile: this.state.mobile,
      crewId: this.state.crewId,
      projectId: this.props.projectId
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

        });
        console.log(response.data);
        window.location.reload();
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
      const { crews } = this.state;
      console.log("sdsdsds")
      console.log(crews)
      console.log("sdsdsds")
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

                        <label htmlFor="">Select crew</label>
                        <select
                        className="form-control" 
                        name="crew" 
                        id="crew"
                        value={this.state.crewId}
                        onChange={this.onChangecrewId}>
                          <option value="--">- - </option>

                          {crews && crews.map((crew, index) => (
                          <option value={crew.id}>{crew.name}</option>
                          ))}  
                        </select>
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

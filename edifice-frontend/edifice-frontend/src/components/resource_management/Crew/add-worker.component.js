import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

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
      //id: this.props.match.params.id,
      //projectId:this.props.match.params.id,  
      
    };
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
        this.props.history.push('/crew/1');
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
      const { crews } = this.state;
        return (  
        <div>
          <Card
            bg={'success'}
            text={'white'}
            className="mb-2">    
          <Card.Body>
            <Card.Title><h4>Add New Worker</h4></Card.Title>
          </Card.Body>
        </Card>
        
        <div class="container">
          <div class="row">
            <div class="col-6">
              <label htmlFor="">First Name</label>
                <input 
                  className="form-control" 
                  type="text" 
                  required
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.onChangefirstName}
                  name="firstName"/>
            </div> 

            <div class="col-6">
              <label htmlFor="">Last Name</label>
                <input 
                  className="form-control" 
                  type="text" 
                  required
                  id="lastName"
                  value={this.state.lastName}
                  onChange={this.onChangelastName}
                   name="lastName"/>
              </div>                   
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-6">
              <label htmlFor="">Id</label>
                <input 
                  className="form-control" 
                  type="text" 
                  required
                  id="wId"
                  value={this.state.wId}
                  onChange={this.onChangewId}
                  name="wId"/>
            </div>

            <div class="col-6">
              <label htmlFor="">Mobile Number</label>
                  <input 
                    className="form-control" 
                    type="number" 
                    required
                    id="mobile"
                    value={this.state.mobile}
                    onChange={this.onChangemobile}
                    name="mobile"/>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-6">
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
            </div>
          </div>
        </div>           
        <button 
        type="button" 
        className="btn btn-primary m-3 pl-3 pr-3" 
        onClick={this.saveWorker}>
          Add
        </button>   
      </div>
 
      );
    }
  }

export default AddWorker;

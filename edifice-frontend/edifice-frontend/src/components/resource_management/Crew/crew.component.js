import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Modal, Button } from "react-bootstrap";

import AddWorker from './add-worker.component';
import EditWorker from './edit-worker.component';
import ViewWorker from './view-worker.component';
import  NewCrew from './new-crew.component';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';


import CrewDataService from "./../../../services/crew.service";
import WorkersDataService from "./../../../services/worker.service";

class Crew extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.retrieveCrew = this.retrieveCrew.bind(this);
    this.retrieveWorkers = this.retrieveWorkers.bind(this);
    this.setActiveEditWorker = this.setActiveEditWorker.bind(this);
    this.setActiveViewWorker = this.setActiveViewWorker.bind(this);

    this.state = {
      crews: [],
      workers: [],
      currentEditWorker: "",
      currentEditIndex: -1,
      currentViewWorker:"",
      currentViewIndex:-1,
      content: "",
      searchTitle: "",
      isOpen: false,
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.retrieveCrew(this.props.match.params.id);
    this.retrieveWorkers(this.props.match.params.id);
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

  retrieveWorkers(id) {
    WorkersDataService.getAll(id)
      .then(response => {
        this.setState({
          workers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  searchTitle() {
    CrewDataService.findByTitle(this.state.searchTitle)
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

  setActiveEditWorker(worker, index) {
    this.setState({
      currentEditWorker: worker,
      currentEditIndex: index
    });
    this.openEditModal();
  }

  setActiveViewWorker(worker,index){
    this.setState({
      currentViewWorker: worker,
      currentViewIndex: index
    });
    this.openViewModal();
  }

  openEditModal = () => this.setState({ isEditOpen: true });
  openViewModal = () => this.setState({ isViewOpen: true });
  closeEditModal = () => this.setState({ isEditOpen: false });
  closeViewModal = () => this.setState({ isViewOpen: false });


    render() {
      const { crews,id, workers,searchTitle, currentEditWorker,currentViewWorker,currentEditIndex} = this.state;
    
      return (
        <div>
          <Card
            bg={'success'}
            text={'white'}
            className="mb-2">
                
            <Card.Body>
              <Card.Title><h4>Crews</h4></Card.Title>
            </Card.Body>
          </Card> 
          <br/>

          <div className="row">
            <div className="col-md-12">
            <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search crew"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
          </div>

        <div className="col-md-12">
          <div className="text-right">
          <a
            className="m-3 btn btn btn-success"
            data-toggle="modal"
            data-target="#newCrew">
            New Crew
          </a>

          <a
            className="m-3 btn btn btn-primary"
            data-toggle="modal"
            data-target="#addWorker">
            Add Workers
          </a>
          </div>
        </div>
      </div>

            <div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">  

                        <div class="accordion" id="accordionExample">

                          {crews && crews.map((crew, index) => (
                            <div class="card" key={crew.id}>
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">

                                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">{crew.name}</button>
                                      <span class="badge bg-success rounded-pill">{crew.total}</span>
                                    </h2>
                                </div>
                                <div id={`collapse${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
  
                                            <Table responsive>
                                              <thead>
                                                <tr>
                                                  <th>Id</th>
                                                  <th>First Name</th>
                                                  <th>Last Name</th>
                                                  <th>Mobile</th>
                                                  <th></th>
                                                  <th></th>
                                                </tr>
                                              </thead>
                                              <tbody>


                                              {workers &&
                                                  workers.map((worker) => (
                                                    worker.crewId === crew.id ?
                                                  <tr
                                                      key={worker.crewId}
                                                  >
                                                  <td>{worker.wId}</td>
                                                  <td>{worker.firstName}</td>
                                                  <td>{worker.lastName}</td>
                                                  <td>{worker.mobile}</td>
                                                  <td>
                                            
                                                    <button 
                                                    className="btn btn-primary" 
                                                    onClick={() =>this.setActiveEditWorker(worker, index)}
                                                    >
                                                      Edit <EditIcon/> 
                                                    </button>

                                                    <button 
                                                    className="btn btn-success m-2" 
                                                    onClick={() =>this.setActiveViewWorker(worker, index)}
                                                    >
                                                      View <VisibilityIcon/> 
                                                    </button>

                                                  </td>    
                                                  </tr>:""
                                                  ))}
                                              </tbody>
                                              {/*Ends */}
                                            </Table>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                          ))}  
                        </div>
                    </div>                  
                </div>
            </div>

          {/* Add Worker Starts */}
          <div className="modal fade" id="addWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <AddWorker/>   
          </div>
          {/* Add Worker Ends */}




          {/* New Crew Starts */}
            <div className="modal fade" id="newCrew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <NewCrew projectId={id}/>          
          </div>
          {/* New Crew Ends */}

          {/* Add Worker Starts */}
            <div className="modal fade" id="addWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <AddWorker projectId={id}/>        
            </div>

          {/* Edit Worker Starts */}
            <Modal show={this.state.isEditOpen} onHide={this.closeEditModal}>
              <EditWorker
                id={currentEditWorker.wId}
                fName={currentEditWorker.firstName}
                lName={currentEditWorker.lastName}
                mobile={currentEditWorker.mobile}
              />  
          </Modal>
          {/* Edit Worker Ends */}



          {/* View Worker Starts */}
          <Modal show={this.state.isViewOpen} onHide={this.closeViewModal}>
              <ViewWorker
                id={currentViewWorker.wId}
                fName={currentViewWorker.firstName}
                lName={currentViewWorker.lastName}
                mobile={currentViewWorker.mobile}
              />  
          </Modal>
        </div>

      );
    }
    
  }

export default Crew;
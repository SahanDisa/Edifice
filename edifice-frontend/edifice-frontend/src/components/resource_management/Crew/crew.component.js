import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import AddWorker from './add-worker.component';
import EditWorker from './edit-worker.component';
import ViewWorker from './view-worker.component';
import  NewCrew from './new-crew.component';
import Card from 'react-bootstrap/Card';

import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';

import CrewDataService from "./../../../services/crew.service";
import WorkersDataService from "./../../../services/worker.service";

class Crew extends Component {

  constructor(props) {
    super(props);
    this.retrieveCrew = this.retrieveCrew.bind(this);
    this.retrieveWorkers = this.retrieveWorkers.bind(this);
    this.state = {
      crews: [],
      workers: [],
      currentIndex: -1,
      content: "",
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

    render() {
      const { crews ,currentIndex,id, workers } = this.state;
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
          
            <div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">  
                        <form>
                            <div className="form-row">
                              <div className="form-group col-md-3">
                                    <input className="form-control" type="text" placeholder="Search" />
                              </div>
                              <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
                              <div class="col-md-7 text-right">
                                <a href="#" className="btn btn-primary"  data-toggle="modal" data-target="#newCrew">+ New Crew</a>
                              </div>

                            </div>
                        </form>

                        <div class="accordion" id="accordionExample">
                          {crews && crews.map((crew, index) => (
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">{crew.name}</button>
                                      <span class="badge bg-success rounded-pill">{crew.total}</span>
                                    </h2>
                                </div>
                                <div id={`collapse${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
                                            <div class="col-md-12 text-right mb-2">
                                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#addWorker">+ Add Worker</a>
                                            </div>
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
                                              {/* Functional for table data */}
                                              <tbody>
                                              {workers &&
                                                  workers.map((worker, index) => (
                                                  <tr
                                                      // className={
                                                      // "list-group-item row" +
                                                      // (index === currentIndex ? "active" : "")
                                                      // }
                                                      // onClick={() => this.setActiveProject(project, index)}
                                                      key={worker.crewId}
                                                  >
                                                  <td>{worker.wId}</td>
                                                  <td>{worker.firstName}</td>
                                                  <td>{worker.lastName}</td>
                                                  <td>{worker.mobile}</td>
                                                  <td>
                                            
                                                    <button className="btn btn-primary" data-toggle="modal" data-target="#editWorker">Edit <EditIcon/> </button>
                                                    <button className="btn btn-success m-2" data-toggle="modal" data-target="#viewWorker">View <VisibilityIcon/> </button>
                                                  
                                                  </td>    
                                                  </tr>
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

          {/* Edit Worker Starts */}
          <div className="modal fade" id="editWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <EditWorker/>        
          </div>
          {/* Edit Worker Ends */}

          {/* View Worker Starts */}
          <div className="modal fade" id="viewWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <ViewWorker/>        
          </div>
          {/* View Worker Ends */}

          {/* New Crew Starts */}
            <div className="modal fade" id="newCrew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <NewCrew />        
          </div>
          {/* New Crew Ends */}

        </div>

      );
    }
    
  }

export default Crew;
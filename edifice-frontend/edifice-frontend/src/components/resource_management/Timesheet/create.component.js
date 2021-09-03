import React, { Component } from 'react';

import CrewDataService from "./../../../services/crew.service";
import WorkersDataService from "./../../../services/worker.service";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class CreateTimesheet extends Component {
    constructor(props) {
        super(props);
        this.retrieveCrew = this.retrieveCrew.bind(this);
        this.retrieveWorkers = this.retrieveWorkers.bind(this);
        this.state = {
          crews: [],
          workers: [],
          currentIndex: -1,
          content: "",
          id: this.props.id
        };
      }

      componentDidMount() {
        this.retrieveCrew(this.props.id);
        this.retrieveWorkers(this.props.id);
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
        //console.log(workers)
        return (  
        <div>
            {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}

            
            
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
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
                                    <form className="row g-3">
                                        <div className="col-auto">
                                            <label>Select Date</label>
                                        </div>
                                        <div className="col-auto">
                                            <input className="form-control" type="date" id="date" name="date"/>
                                        </div>
                                    </form>     
                                </div>
                            </div>
                    </div>
                    <hr/>

               {/*     {crews && crews.map((crew, index) => (
                    <div class="row">
                        <div class="col-4">
                            <div class="list-group" id="list-tab" role="tablist">
                            
                                <button 
                                    key={index}
                                    class="list-group-item" 
                                    id={crew.name}
                                    data-toggle="list" 
                                    href="#list-home" 
                                    role="tab" 
                                    aria-controls="home">
                                        {crew.name}
                                </button> 
                                            
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="tab-content" id="nav-tabContent">
                            
                                <div 
                                class="tab-pane fade show" 
                                id="list-home" 
                                role="tabpanel" 
                                >
                                    
                                {workers && workers.map((worker) => (
                                    worker.crewId === index+1 ?
                                    <div class="input-group-prepend">
                                        <div class="input-group-text mr-3">
                                            <input type="checkbox" />
                                        </div>
                                        <p>{worker.firstName} {worker.lastName}</p> 
                                        <br/>
                                   </div>:""
                                ))}
                                </div>
                            
                            </div>
                        </div>
                                </div>
                    ))} */}
                    <div className="col-auto">
                        <label>Select Workers</label>
                    </div>
                    
                    <div class="accordion" id="accordionExample">
                          {crews && crews.map((crew, index) => (
                            <div class="card" key={crew.id}>
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                    <span class="badge bg-success rounded-pill">{crew.total}</span>
                                      <button 
                                      class="btn btn-link" 
                                      type="button" 
                                      data-toggle="collapse" 
                                      data-target={`#collapse${index}`} 
                                      aria-expanded="true" 
                                      aria-controls="collapseOne">
                                          {crew.name}
                                    </button>
                                      
                                    </h2>
                                </div>
                                <div id={`collapse${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">

                                              {workers &&
                                                  workers.map((worker) => (
                                                    worker.crewId === index+1 ?
                                                <List component="nav" aria-label="mailbox folders" key={worker.crewId}>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text mr-3">
                                                            <input type="checkbox" />
                                                        </div>
                                                        <ListItem button>
                                                         {worker.firstName} {worker.lastName}
                                                        </ListItem>
                                                    </div>
                                                </List> :""                         
                                            ))}
                                              {/*Ends */}
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                          ))}  
                        </div>


                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Create</button>
                    </div>
                </div>
            </div>
            {/*-------------------------------------------------------- Add Emp Ends----------------------------------------------------------------------*/}
        </div>  
        );
    }
  }

export default CreateTimesheet;





 
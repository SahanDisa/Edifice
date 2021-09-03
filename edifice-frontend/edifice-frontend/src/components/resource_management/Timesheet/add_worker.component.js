import React, { Component } from 'react';

import CrewDataService from "./../../../services/crew.service";
import WorkersDataService from "./../../../services/worker.service";
import WorkedHoursDataService from "./../../../services/worked-hours.service";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class AddWorker extends Component {
    constructor(props) {
        super(props);
        this.retrieveCrew = this.retrieveCrew.bind(this);
        this.retrieveWorkers = this.retrieveWorkers.bind(this);
        this.addWorker = this.addWorker.bind(this);
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

      componentDidMount() {
        this.retrieveCrew(this.props.id);
        this.retrieveWorkers(this.props.id);
      }

        //get data
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

        
      addWorker() {
        var data = {
          workerId: "12",
          code:  this.state.code,
        };
    
        WorkedHoursDataService.create(data)
          .then(response => {
            this.setState({
                workerId: response.data.workerId,
                code:  response.data.code,
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
            {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Select Workers</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body" align ="left">

                        <div class="accordion" id="accordionExample">
                            {crews && crews.map((crew, index) => (
                                <div class="card" key={index}>
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
                                    <div id={`collapse${index}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div className="">

                                                {workers &&
                                                    workers.map((worker) => (
                                                        worker.crewId === index+1 ?

                                                    <List component="nav" aria-label="mailbox folders" key={worker.crewId}>
                                                        <div class="input-group-prepend">
                                                            <ListItem button>
                                                                <button 
                                                                className="btn btn-success m-1"
                                                                type="button"
                                                                onClick={this.addWorker} >
                                                                    Add 
                                                                </button>

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
                </div>
            </div>
            {/*-------------------------------------------------------- Add Emp Ends----------------------------------------------------------------------*/}
        </div>  
        );
    }
  }

export default AddWorker;





 
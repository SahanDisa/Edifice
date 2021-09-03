import React, { Component } from 'react';

import Create from "./create.component";
import AddWorker from "./add_worker.component";
import Approve from "./approve.component";
import Card from 'react-bootstrap/Card';


class Timesheet extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: null,
          name: "", 
          projectId: this.props.match.params.id
        };
      }

    render() {
        const {projectId} = this.state;
        return (
          <div>
            <Card
              bg={'success'}
              text={'white'}
              className="mb-2">    
              <Card.Body>
                <Card.Title><h4>Timesheet</h4></Card.Title>
              </Card.Body>
            </Card> 
            <br/>

            

            <div className="container">                                
                <div className="row">   
                    <form className="row g-3">
                        <div className="col-auto">
                            <input className="form-control" type="text" placeholder="Search"/>  
                        </div>

                        <div className="col-auto">
                            <a href="" className="btn btn-success">search</a>
                        </div>

                        <div className="col-auto">
                            <input className="form-control" type="date" id="birthday" name="birthday"/>
                            <br />
                        </div>
                    </form>

                    <div className ="col-6 align-items-end text-right">
                        <a href="/customize" className="btn btn-secondary mr-3"> Customize</a>
                        <a href="#" className="btn btn-secondary mr-3"> Export PDF</a>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#createNew"> Create New</button>

                        {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}
                        <div className="modal fade" id="createNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <Create projectId={projectId}/>
                        </div>
                        {/*-------------------------------------Add Emp Ends----------------------------------------------------------------------*/}
                    </div>
                </div>
            </div>
            <hr />


            <hr/>

            <div className="card">
                <div className="card-header">
                        <h5 >Date: 05/01/2021</h5>
                        <a className="card-header" href="" className="btn btn-primary" data-toggle="modal" data-target="#addWorker"> +Add Worker</a>
        
                </div>

                {/*------------------------------------ Add worker Starts------------------------------------------------------------------ */}
                <div className="modal fade" id="addWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddWorker/>
                </div>
                {/*-------------------------------------Add worker Ends----------------------------------------------------------------------*/}


            <div className="card-body">    
                    <table className="table table-hover table-bordered align-middle">
                        <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col" colspan="2">Lunch</th>
                                    <th scope="col" colspan="2">Tea</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th scope="col">Crew</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Start</th>
                                    <th scope="col">Stop</th>
                                    <th scope="col">Start</th>
                                    <th scope="col">Stop</th>
                                    <th scope="col">Start</th>
                                    <th scope="col">End</th>
                                </tr>
                            </thead>
                        <tbody>

                            <tr className="table-primary">
                                <td>
                                <select className="form-control" name="" id="">
                                    <option value="role1">Concrete Crew</option>
                                    <option value="role2">Welder</option>
                                    <option value="role3">Flooring Crew</option>
                                    <option value="role3">Carpenters</option>
                                </select>
                                </td>
                                <td>Randie pathirae</td>
                                <td>First Floor</td>
                                <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>

                            </tr>
                            <tr className="table-primary">
                            <td>
                                <select className="form-control" name="" id="">
                                    <option value="role1">Concrete Crew</option>
                                    <option value="role2">Welder</option>
                                    <option value="role3">Flooring Crew</option>
                                    <option value="role3">Carpenters</option>
                                </select>
                            </td>
                            <td>Jacob</td>
                            <td>Ground Floor</td>
                            <td>
                                <div className="md-form md-outline">
                                    <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div className="md-form md-outline">
                                    <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div className="md-form md-outline">
                                    <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div className="md-form md-outline">
                                    <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div className="md-form md-outline">
                                    <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                    <div className="md-form md-outline">
                                        <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#approve"> Approve</a>


                    {/*------------------------------------ Add worker Starts------------------------------------------------------------------ */}
                    <div className="modal fade" id="approve" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <Approve/>
                    </div>
                    {/*-------------------------------------Add worker Ends----------------------------------------------------------------------*/}





                </div>
            </div>
          </div>
          
        );
      }
    }

export default Timesheet;
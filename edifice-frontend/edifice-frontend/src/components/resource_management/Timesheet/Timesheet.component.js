import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class Timesheet extends Component {
    render() {
        return (
          <div>
            <div class="container">                                
                <div class="row">
                    <div class="col-4">
                        <h2>Timesheet</h2>
                    </div>
                    <div class="col-8 align-items-end">
                        <a href="/customize" className="btn btn-outline-primary mr-3"> Customize</a>
                        <a href="#" className="btn btn-outline-primary mr-3"> Export PDF</a>
                        <a href="#" className="btn btn-outline-primary" data-toggle="modal" data-target="#addEmp"> Create New</a>
                </div>
                </div>
            </div>



            <hr />

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

            <hr/>

            <p>Date: 05/01/2021</p>
            <div class="jumbotron">
                
                <table class="table table-hover table-bordered align-middle">
                <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" colspan="2">Lunch</th>
                            <th scope="col" colspan="2">Tea</th>
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
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="table-primary">
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
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>

                        </tr>
                        <tr class="table-primary">
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
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
     
            </div>

            <p>Date: 05/01/2021</p>
            <div class="jumbotron">
                
                <table class="table table-hover table-bordered align-middle">
                <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" colspan="2">Lunch</th>
                            <th scope="col" colspan="2">Tea</th>
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
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="table-primary">
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
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>

                        </tr>
                        <tr class="table-primary">
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
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        <td>
                            <div class="md-form md-outline">
                                <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
     
            </div>


            {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}
            <div className="modal fade" id="addEmp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Employees</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">

                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <input className="form-control" type="text" placeholder="Search"/>  
                                    </div>
                                    <div class="col">
                                        <a href="" className="btn btn-success">search</a>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            <div class="container">                                
                                <div class="row">
                                    <div class="col-4">
                                        <p>Crews</p>
                                        <div class="list-group" id="list-tab" role="tablist">
                                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Concrete Crew</a>
                                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Welders</a>
                                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Flooring Crew</a>
                                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Carpenters</a>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><p>Concrete Crew</p></div>
                                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><p>Welders</p></div>
                                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><p>Flooring Crew</p></div>
                                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><p>Carpenters</p></div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
          {/*-------------------------------------------------------- Add Emp Ends----------------------------------------------------------------------*/}
        


          </div>
          
        );
      }
    }

export default Timesheet;
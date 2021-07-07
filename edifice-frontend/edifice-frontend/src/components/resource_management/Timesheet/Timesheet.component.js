import React, { Component } from 'react';
import Create from "./create.component";


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

            <div className="card">
                <div className="card-header">
                        <h5 >Date: 05/01/2021</h5>
                        <a className="card-header" href="" className="btn btn-outline-primary"> +Add Employee</a>
        
                </div>

            <div className="card-body">    
                    <table class="table table-hover table-bordered align-middle">
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
                            <td>
                                    <div class="md-form md-outline">
                                        <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>

            <div class="card">
                <div className="card-header">
                    <h5 >Date: 06/01/2021</h5>
                    <a className="card-header" href="" className="btn btn-outline-primary"> +Add Employee</a>
                </div>
                <div className="card-body"> 
                
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
                            <td>
                                <div class="md-form md-outline">
                                    <input type="time" id="default-picker" class="form-control" placeholder="Select time"/>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
            <br/>

          </div>
          
        );
      }
    }

export default Timesheet;
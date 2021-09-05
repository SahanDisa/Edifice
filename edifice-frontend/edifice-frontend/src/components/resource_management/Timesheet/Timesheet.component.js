import React, { Component } from 'react';

import Create from "./create.component";
import AddWorker from "./add_worker.component";
import Approve from "./approve.component";
import Card from 'react-bootstrap/Card';

import TimesheetDataService from "./../../../services/timesheet.service";

class Timesheet extends Component {
    constructor(props) {
        super(props);
        this.retrieveTimesheet = this.retrieveTimesheet.bind(this);

        this.state = {
          id: null,
          name: "", 
          timesheets:[],
          id: this.props.match.params.id
        };
      }

      componentDidMount() {
        this.retrieveTimesheet(this.props.match.params.id);
      }

      retrieveTimesheet(id){
          TimesheetDataService.getAll(id)
          .then(response => {
              this.setState({
                timesheets: response.data
              });
              console.log(response.data);
              })
            .catch(e => {
              console.log(e);
      });
      }

    render() {
        const {id , timesheets} = this.state;
        
        //console.log(timesheets)
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
                            <Create projectId={id}/>
                        </div>
                        {/*-------------------------------------Add Emp Ends----------------------------------------------------------------------*/}
                    </div>
                </div>
            </div>
            <hr />
            
            {timesheets && timesheets.map((timesheet, index) => (
              
            <div className="card" key={timesheet.code}>
                <div className="card-header">
                
                        <div className=" container">
                            <div className="row">
                                <div class="col-10">
                                <h5 >Date: {timesheet.date}</h5>
                                <p>Code: {timesheet.code}</p>
                                </div>

                                <div className="col-2 align-middle">
                                    <button                         
                                        className="btn btn-primary" 
                                        data-toggle="modal" 
                                        data-target="#addWorker">
                                    Add Workers
                                    </button>
                                </div>

                            </div>
                        </div> 
                         
                </div>
                {/*------------------------------------ Add worker Starts------------------------------------------------------------------ */}
                <div className="modal fade" id="addWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                   <AddWorker 
                   timesheetId={timesheet.code}
                   id={id}/> 
                </div>
                {/*-------------------------------------Add worker Ends----------------------------------------------------------------------*/}


            <div className="card-body">    
                    <table className="table table-bordered align-middle">
                            <thead>
                                <tr>
                                    <th className=" align-middle text-center"  rowspan="2">Crew</th>
                                    <th  className=" align-middle text-center" rowspan="2">Employee Name</th>
                                    <th  className=" align-middle text-center" rowspan="2">Location</th>
                                    <th  className=" align-middle text-center" rowspan="2">Start</th>
                                    <th className=" align-middle text-center" colspan="2">Lunch</th>
                                    <th className=" align-middle text-center" colspan="2">Tea</th>
                                    <th className=" align-middle text-center" rowspan="2">Leave</th>
                                </tr>
                                <tr>
                                    <th className=" align-middle text-center" >Start</th>
                                    <th className=" align-middle text-center" >End</th>
                                    <th className=" align-middle text-center" >Start</th>
                                    <th className=" align-middle text-center" >End</th>
                                </tr>
                            </thead>
                        <tbody>

                            <tr>
                                <td>
                                    crename
                                </td>
                                <td>Randie pathirae</td>
                                <td>First Floor</td>
                                <td>                                 
                                    <input 
                                    type="time" 
                                    id="default-picker" 
                                    className="form-control" 
                                    placeholder="Select time"/>           
                                </td>
                                <td>
                                    <input 
                                    type="time" 
                                    id="default-picker" 
                                    className="form-control" 
                                    placeholder="Select time"/>
                                </td>
                                <td>
                                    <input 
                                    type="time" 
                                    id="default-picker" 
                                    className="form-control" 
                                    placeholder="Select time"/>
                                </td>
                                <td>
                                    <input
                                    type="time" 
                                    id="default-picker" 
                                    className="form-control" 
                                    placeholder="Select time"/>
                                </td>
                                <td>
                                    <input
                                    type="time" 
                                    id="default-picker" 
                                    className="form-control" 
                                    placeholder="Select time"/>
                                </td>
                                <td>
                                    <input
                                    type="time" 
                                    id="default-picker" 
                                    className="form-control" 
                                    placeholder="Select time"/>
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
            ))}
          </div>
          
        );
      }
    }

export default Timesheet;
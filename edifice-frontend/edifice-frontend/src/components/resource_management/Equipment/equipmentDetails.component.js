import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

import AllocateEquip from './allocateEquipment.component';

class EquipDetails extends Component {

  render() {
    return (
      <div>
        <Card
          bg={'success'}
          text={'white'}
          className="mb-2">    
          <Card.Body>
            <Card.Title><h4>Equipment</h4></Card.Title>
              <h5>235E - ExcavatorABC</h5>
          </Card.Body>
        </Card>
        <div className="text-right">
                    <form>
                      <a href="#" className="btn btn-success mr-3">Edit</a>
                      <a href="#" className="btn btn-primary mr-3">View Usage</a>
                      
                    </form>
                  </div>

        <div class="container">                                
                    <div class="row">                      
                      <div class="col-6">
                        <label htmlFor="">Id</label>
                        <input className="form-control" type="text" required/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Brand/code</label>
                        <input className="form-control" type="text" required/>
                      </div>
                   </div>
                  </div>
                  <div class="container">                                
                    <div class="row">
                      <div class="col-6">
                        <label htmlFor="">Category</label>
                        <input className="form-control" type="text" required/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Assiged Project</label>
                        <form>
                          <div className="form-row">
                            <div className="form-group col-md-10">
                              <input className="form-control" type="text" required/>
                            </div>
                            <div className="form-group col-md-2">
                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#allocateEquip">Change</a>
                            </div>
                            
                            </div>
                        </form>
                      </div>
                   </div>
                  </div>

                  <div class="container">                                
                    <div class="row">
                      <div class="col-6">
                        <label htmlFor="">Date issued</label>
                        <input className="form-control" type="date" id="timesheet" name="timesheet"/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Condition</label>
                        <select className="form-control" name="" id="">
                            <option value="role1">Good(New)</option>
                            <option value="role2">Fair</option>
                            <option value="role3">Poor</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label htmlFor="">Description</label>
                    <input className="form-control" type="text" required/>
                  </div>
                  <br/>

                  {/* Allocate Equipment Starts */}
                    <div className="modal fade" id="allocateEquip" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <AllocateEquip />        
                  </div>
                {/* Allocate Equipment Ends */}
      </div>
    );
  }
  
}

export default EquipDetails;
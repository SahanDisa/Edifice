import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Switch from "././../../../assets/PM/photos/drawings/broken_switch.jpg";

class ViewAP extends Component {

  render() {
    return (
      <div className="">
        <h2>Add New Action Item</h2><hr/>
        <div className="mb-3">
            <div>
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" id="detailsT" data-toggle="tab" href="#det" aria-controls="det" aria-selected="true">Details</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="assigneesT" data-toggle="tab" href="#assign" aria-controls="assign" aria-selected="true">Assignees</a>
                </li>
                </ul>
                
                <div class="tab-content" id="myTabContent">
                
                    <div class="tab-pane fade show active" id="det" role="tabpanel" aria-labelledby="Details">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="">No</label>
                                    <input className="form-control" type="number" min="0" required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Status</label>
                                    <input className="form-control" type="text" value="Initiated" readOnly/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Date</label>
                                    <input className="form-control" type="date" min="" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Location</label>
                                    <input className="form-control" type="text" required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Trade</label>
                                    <input className="form-control" type="text" required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Type</label>
                                    <input className="form-control" type="text" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="">Description</label>
                                    <input className="form-control" type="text" required/>
                                </div>
                            </div>

                            <div class="accordion mt-2" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Link Drawings</button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <a href="#" className="btn btn-success mt-2 mr-2">Add Drawings</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Link Photos</button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <a href="#" className="btn btn-success mt-2 mr-2">Add photos</a>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <a href="#" className="btn btn-primary mt-2 mr-2">Next: Add Assignees</a>
                            <a href="/actionplan" className="">Cancel</a>
                        </form>
                    </div>          
                    
                    <div class="tab-pane fade" id="assign" role="tabpanel" aria-labelledby="Assignees">
                        <div className="row">
                            <div className="col-sm-3 mr-2">
                                <Card style={{ width: '18rem' }} className="mt-2">
                                    <Card.Body>
                                        <a href="#" className="btn btn-success">Add Assignees</a>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <a href="/actionplan" className="btn btn-primary mt-2 mr-2">Save</a>
                        <a href="/actionplan" className="">Cancel</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
}

export default ViewAP;
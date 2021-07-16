import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Switch from "././../../../assets/PM/photos/drawings/broken_switch.jpg";

class ViewPL extends Component {

  render() {
    return (
      <div className="">
        <h2>1 - Replace the Broken Switch Plate</h2><hr/>
        <div className="mb-3">
        <div className="col-sm-6 mb-3">
                <h5>Date: 2021-07-15</h5>
                <h5>Status : <b>Initiated 🟢</b></h5>
              </div>
          {/* <form>
            <div className="form-row">
                <div className="form-group col-md-3 form-check">
                    <label htmlFor="" className="form-check-label">Status: Open</label>
                </div>
                <div className="form-group col-md-3 form-check">
                    <label htmlFor="" className="form-check-label">Date: 2021-07-15</label>
                </div>
            </div>
        </form> */}
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
                                <label htmlFor="">Location</label>
                                <input className="form-control" type="text" value="1st Floor > North > Storage Room 134" readOnly/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Trade</label>
                                <input className="form-control" type="text" value="Switch and Hardware" readOnly/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Reason</label>
                                <input className="form-control" type="text" value="Damaged by one of the labourer" readOnly/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="">Description</label>
                                <input className="form-control" type="text" value="Storage switch plate on 1st level is damaged left side and needs to be repaired." readOnly/>
                            </div>
                        </div>
                    </form>
                    <div class="accordion mt-2" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Linked Drawings</button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">No linked drawings yet</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Linked Photos</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={Switch} />
                                                <Card.Body>
                                                    <Card.Title>Storage room 134</Card.Title>
                                                    <Card.Text>Should replace the switch</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>           
                <div class="tab-pane fade" id="assign" role="tabpanel" aria-labelledby="Assignees">
                    <div className="row">
                        <div className="col-sm-3 mr-2">
                            <Card style={{ width: '18rem' }} className="mt-2">
                                <Card.Body>
                                    <Card.Title>Engineer</Card.Title>
                                    <Card.Text>Mr. Kusal Weerasinghe</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-3">
                            <Card style={{ width: '18rem' }} className="mt-2">
                                <Card.Body>
                                    <Card.Title>Engineer</Card.Title>
                                    <Card.Text>Ms. Aleesha Cooray</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/projectmanagementhome/1" className="btn btn-primary mt-2 mr-2">Done</a>
          </div>
        </div>
      </div>
    );
  }
  
}

export default ViewPL;
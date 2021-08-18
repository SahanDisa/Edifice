import React, { Component } from 'react';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from 'react-bootstrap/Card';

import  NewCategory from './new-category.component';
import AddEquip from './new-equipment.component';


class Equipment extends Component {

    render() {
        return (
          <div>
            <Card
              bg={'success'}
              text={'white'}
              className="mb-2">    
              <Card.Body>
                <Card.Title><h4>Equipment</h4></Card.Title>
              </Card.Body>
            </Card> 
            <br/>

            <div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">  
                        <form>
                            <div className="form-row">
                              <div className="form-group col-md-3">
                                <select className="form-control" name="" id="">
                                  <option value="role1">Excavator</option>
                                  <option value="role2">Crane</option>
                                  <option value="role3">Bulldozer</option>
                                </select>
                              </div>
                              <a href="#" className="btn btn-outline-dark mb-3">Filter</a>
                              <div class="col-md-7 text-right">
                              <a href="#" className="btn btn-primary"  data-toggle="modal" data-target="#newCategory">Add New Category</a>
                              </div>
                            </div>
                        </form>

                        <h5>Categories</h5>
                        <br/>

                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Excavator</button>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </h2>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
                                            <div class="col-md-12 text-right mb-2">
                                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#addEquip">+ Add New</a>
                                            
                                              <List component="nav" aria-label="mailbox folders">
                                                <ListItem button>
                                                <a href="#" className="btn btn-primary mr-3" data-toggle="modal" data-target="#addEquip">Allocate</a>
                                                  <a href="/equipDetails" >235E - ExcavatorABC</a>
                                                </ListItem>
                                                <Divider />
                                                  <ListItem button divider>
                                                  <a href="#" className="btn btn-primary mr-3" data-toggle="modal" data-target="#addEquip">Allocate</a>
                                                    <a href="#" >432E - Excavator cataplller</a>
                                                  </ListItem>
                                                  <ListItem button>
                                                  <a href="#" className="btn btn-primary mr-3" data-toggle="modal" data-target="#addEquip">Allocate</a>
                                                    <a href="#" >542E - ikon2</a>
                                                  </ListItem>
                                                <Divider light />
                                                <ListItem button>
                                                <a href="#" className="btn btn-primary mr-3" data-toggle="modal" data-target="#addEquip">Allocate</a>
                                                  <a href="#" >098E - Arko</a>
                                                </ListItem>
                                            </List>                            
 
                                          </div>
      
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Crane</button>
                                        <span class="badge bg-primary rounded-pill">5</span>
                                    </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
                                            <div class="col-md-12 text-right mb-2">
                                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#addWorker">+ Add Worker</a>
                                            </div>
                      
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>                    
                </div>
            </div>
                {/* New Caregory Starts */}
                  <div className="modal fade" id="newCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                   <NewCategory />      
                  </div>
                {/* New Caregory Ends */}

                {/* New Equipment Starts */}
                  <div className="modal fade" id="addEquip" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddEquip />        
                  </div>
                {/* New Equipment Ends */}
          </div>


          
        );
      }
    }

export default Equipment;
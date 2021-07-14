import React, { Component } from 'react';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import  NewEquip from './new-equipment.component';


class Equipment extends Component {
    render() {
        return (
          <div>
            <h2>Equipments</h2><hr/>

            <form>
                    <div className="form-row mt-3">
                      <div class="col-md-12 text-right">
                        <a href="#" className="btn btn-primary"  data-toggle="modal" data-target="#newEquip">Add New Category</a>
          
                      </div>
                      <div className="form-group col-md-4">                     
                        <div className="col-auto">
                          <select className="form-control" name="" id="">
                            <option value="role1">Excavator</option>
                            <option value="role2">Crane</option>
                            <option value="role3">Bulldozer</option>
                          </select>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary mb-3">Filter</a>
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
                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#addWorker">+ Add New</a>
        
                            <List component="nav" aria-label="mailbox folders">
                              <ListItem button>
                                <a href="/equipDetails" >235E - ExcavatorABC</a>
                              </ListItem>
                              <Divider />
                              <ListItem button divider>
                                <a href="#" >235E - ExcavatorABC</a>
                              </ListItem>
                              <ListItem button>
                                <a href="#" >235E - ExcavatorABC</a>
                              </ListItem>
                              <Divider light />
                              <ListItem button>
                                <a href="#" >235E - ExcavatorABC</a>
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
                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#addWorker">+ Add New</a>
                          </div>
                                            
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>

                {/* New Crew Starts */}
                  <div className="modal fade" id="newEquip" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <NewEquip />        
                  </div>
                {/* New Crew Ends */}
          </div>


          
        );
      }
    }

export default Equipment;
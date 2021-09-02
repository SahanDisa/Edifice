import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EquipmentDataService from "./../../../services/equipment.service";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Card from 'react-bootstrap/Card';

import  NewCategory from './new-category.component';
import AddEquip from './new-equipment.component';



class Equipment extends Component {

  constructor(props) {
    super(props);
    this.retrieveEquipment = this.retrieveEquipment.bind(this);

    this.state = {
      equipments: [],
      categorys:[],
      currentIndex: -1,
      content: "",
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.retrieveEquipment(this.props.match.params.id);
  }
  retrieveEquipment(id) {
    EquipmentDataService.getAll(id)
      .then(response => {
        this.setState({
          equipments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      
  }

    render() {
      const { equipments ,currentIndex,id, categorys } = this.state;
      //console.log(equipments[0])

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
                              <a href="#" className="btn btn-primary"  data-toggle="modal" data-target="#addEquip">Add New</a>
                              </div>
                            </div>
                        </form>

                        <h5>Categories</h5>
                        <br/>

                        <div class="accordion" id="accordionExample">
                        {equipments && equipments.map((equipment, currentIndex) => (
                          categorys.includes(equipment.category)? null : categorys.push(equipment.category) &&
                            <div class="card">
                                <div class="card-header" id="headingOne">
                
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${currentIndex}`} aria-expanded="true" aria-controls="collapseOne">{equipment.category}</button>
                                    </h2>
                                </div>
                                <div id={`collapse${currentIndex}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
                                            <div class="col-md-12 text-right mb-2">
                                            {equipments && equipments.map((equipmentList, currentIndex) => (
                                              equipment.category === equipmentList.category ?
                                            
                                              <List component="nav" aria-label="mailbox folders">
                                                <ListItem button>
        
                                                  <Link to=/*{"/equipDetails/"+id+"/"+equipment.code}*/{"/equipDetails/"+equipment.code}>{equipmentList.code} {equipmentList.description}</Link>
                                                </ListItem>
                                                <Divider />
                                                <Divider light />
                                            </List> :""                           
                                            ))} 
                                          </div>
      
                                        </div>
                                    </div>
                                </div>
                            </div> 
                           ))}  
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
                    <AddEquip projectId ={id} />        
                  </div>
                {/* New Equipment Ends */}


          </div>


          
        );
      }
    }

export default Equipment;
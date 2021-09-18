import React, { Component } from 'react';
import { Link } from "react-router-dom";

import EquipmentDataService from "./../../../services/equipment.service";
import EquipmentCategoryDataService from "./../../../services/equipment-category.service";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Card from 'react-bootstrap/Card';

import NewCategory from './new-category.component';
import AddEquip from './new-equipment.component';



class Equipment extends Component {

  constructor(props) {
    super(props);
    this.retrieveEquipment = this.retrieveEquipment.bind(this);
    this.retrieveEquipmentCategory = this.retrieveEquipmentCategory.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      equipments: [],
      categorys: [],
      currentIndex: -1,
      searchTitle: "",
      content: "",
    };
  }

  componentDidMount() {
    this.retrieveEquipment();
    this.retrieveEquipmentCategory();
  }

  retrieveEquipment() {
    EquipmentDataService.getAll()
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

  retrieveEquipmentCategory() {
    EquipmentCategoryDataService.getAll()
      .then(response => {
        this.setState({
          categorys: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  searchTitle() {
    EquipmentDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          crews: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { equipments, id, categorys, searchTitle } = this.state;
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
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search crew"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.searchTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="text-right">
              <a
                className="btn btn-success mr-3"
                data-toggle="modal"
                data-target="#newCategory">
                New Category
              </a>

              <a
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#addEquip">
                New Equipment
              </a>
            </div>
          </div>
        </div>


        <div>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">
              <h5>Categories</h5>
              <br />
              <div class="accordion" id="accordionExample">
                {categorys && categorys.map((category, currentIndex) => (
                  <div class="card" key={category.id}>
                    <div class="card-header" id="headingOne">

                      <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${currentIndex}`} aria-expanded="true" aria-controls="collapseOne">{category.name}</button>
                      </h2>
                    </div>
                    <div id={`collapse${currentIndex}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="">
                          <div class="col-md-12 text-right mb-2">
                            {/* {equipments && equipments.map((equipmentList, currentIndex) => (
                              equipment.category == equipmentList.category ?

                                <List component="nav" aria-label="mailbox folders">
                                  <ListItem button>

                                    <Link to={"/equipDetails/" + equipment.code} > {equipmentList.code} {equipmentList.description}</Link>
                                  </ListItem>
                                  <Divider />
                                  <Divider light />
                                </List> : ""
                            ))} */}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div >
        </div >

        {/* New Caregory Starts */}
        <div div className="modal fade" id="newCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
          <NewCategory />
        </div >
        {/* New Caregory Ends */}

        {/* New Equipment Starts */}
        <div className="modal fade" id="addEquip" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <AddEquip />
        </div>
        {/* New Equipment Ends */}


      </div >



    );
  }
}

export default Equipment;
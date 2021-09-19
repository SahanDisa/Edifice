import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import AllocateEquip from './allocateEquipment.component';
import EquipmentDataService from "./../../../services/equipment.service";

class EquipDetails extends Component {
  constructor(props) {
    super(props);
    this.retrieveEquipment = this.retrieveEquipment.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeProjectId = this.onChangeProjectId.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.updateEquipment = this.updateEquipment.bind(this);
    this.deleteEquipment = this.deleteEquipment.bind(this);

    this.state = {
      // equipments: [],
      // categorys:[],
      // currentIndex: -1,
      // content: "",
      currentEquipment: {
        equipCode: this.props.match.params.code,
        category: "",
        projectId: "",
        condition: "",
        description: ""
      }

    };
  }

  componentDidMount() {
    this.retrieveEquipment(this.props.match.params.code);
  }

  retrieveEquipment(id) {
    EquipmentDataService.get(id)
      .then(response => {
        this.setState({
          currentEquipment: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeCategory(e) {
    const category = e.target.value
    this.setState(function (prevState) {
      return {
        currentEquipment: {
          ...prevState.currentEquipment,
          category: category
        }
      };
    });
  }
  onChangeProjectId(e) {
    const projectId = e.target.value
    this.setState(function (prevState) {
      return {
        currentEquipment: {
          ...prevState.currentEquipment,
          projectId: projectId
        }
      };
    });
  }

  onChangeCondition(e) {
    const condition = e.target.value
    this.setState(function (prevState) {
      return {
        currentEquipment: {
          ...prevState.currentEquipment,
          condition: condition
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value
    this.setState(function (prevState) {
      return {
        currentEquipment: {
          ...prevState.currentEquipment,
          description: description
        }
      };
    });
  }

  updateEquipment() {
    var data = {
      category: this.state.currentEquipment.category,
      projectId: this.state.currentEquipment.projectId,
      condition: this.state.currentEquipment.condition,
      description: this.state.currentEquipment.description,
    };

    EquipmentDataService.update(this.props.match.params.code, data)
      .then(response => {
        this.setState(prevState => ({
          currentEquipment: {
            ...prevState.currentEquipment,
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteEquipment() {
    EquipmentDataService.delete(this.props.match.params.code)
      .then(response => {
        console.log(response.data);
        //this.props.history.push('/equipments/1');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { equipCode, currentEquipment } = this.state;
    return (
      <div>
        <Card
          bg={'success'}
          text={'white'}
          className="mb-2">
          <Card.Body>
            <Card.Title><h4>Equipment</h4></Card.Title>
            {/* <h5>235E - ExcavatorABC</h5>*/}
          </Card.Body>
        </Card>


        <div>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <label htmlFor="">Brand/code</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  disabled
                  id="code"
                  name="code"
                  value={currentEquipment.code}
                />
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <label htmlFor="">Category</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  id="category"
                  name="category"
                  value={currentEquipment.category}
                  onChange={this.onChangeCategory}
                />
              </div>

              <div class="col-6">
                <label htmlFor="">Assiged Project</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  id="projectId"
                  name="projectId"
                  value={currentEquipment.projectId}
                  onChange={this.onChangeProjectId} />
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-6">
                <label htmlFor="">Date issued</label>
                <input
                  className="form-control"
                  type="text"
                  id="date"
                  name="date"
                  disabled
                  value={currentEquipment.date} />
              </div>

              <div class="col-6">
                <label htmlFor="">Condition</label>
                <select
                  className="form-control"
                  name="condition"
                  id="condition">
                  <option value={currentEquipment.condition} selected="selected" hidden="hidden">{currentEquipment.condition}</option>
                  <option value="Good">Good(New)</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-12">
            <label htmlFor="">Description</label>
            <input
              className="form-control"
              type="text"
              required
              value={currentEquipment.description}
              onChange={this.onChangeDescription} />
          </div>
        </div>
        <br />
        <div className="text-right">
          <form>
            <button
              className="btn btn-danger mr-3"
              onClick={this.deleteEquipment}>
              Delete
            </button>
            {/*
                      <button  
                      className="btn btn-primary mr-3">
                        View Usage
                      </button>
*/}
            <button
              className="btn btn-primary mr-3"
              onClick={this.updateEquipment}>
              Update
            </button>

            <Link
              className="btn btn-success"
              to={"/equipments/1"}>
              Back
            </Link>
          </form>
        </div>

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
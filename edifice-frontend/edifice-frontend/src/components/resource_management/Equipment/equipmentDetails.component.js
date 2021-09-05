import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

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
      equipments: [],
      categorys:[],
      currentIndex: -1,
      content: "",
      equipCode: this.props.match.params.code,  
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

  onChangeCategory(e){
    this.setState({
      category: e.target.value
    });
  }
  onChangeProjectId(e){
    this.setState({
      projectId: e.target.value
    });
  }

  onChangeCondition(e){
    this.setState({
      condition: e.target.value
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  updateEquipment(){
    var data = {
      category: this.state.category,
      projectId: this.state.projectId,
      condition: this.state.condition,
      description: this.state.description,
    };

    EquipmentDataService.update(this.state.code, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteEquipment(){
    EquipmentDataService.delete(this.props.match.params.code)
    .then(response => {
      console.log(response.data);
      this.props.history.push('/equipments/'+this.props.match.params.code)
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const { equipCode,equipments } = this.state;
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


        {equipments && equipments.map((equipment) => (
          equipment.code === equipCode ?
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
                        value={equipCode}
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
                        value={equipment.category}
                        onChange={this.onChangeCategory}/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Assiged Project</label>
                              <input 
                              className="form-control" 
                              type="text" 
                              required
                              id="projectId" 
                              name="projectId"
                              value={equipment.projectId}
                              onChange={this.onChangeProjectId}/>
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
                        value={equipment.date}/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Condition</label>
                        <select 
                        className="form-control" 
                        name="condition" 
                        id="condition">
                            <option value={equipment.condition} selected="selected" hidden="hidden">{equipment.condition}</option>
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
                    id="description" 
                    name="description"
                    value={equipment.description}
                    onChange={this.onChangeDescription}/>
                  </div>
                  </div>: null
                  ))} 
                  <br/>
                  <div className="text-right">
                    <form>
                      <button  
                      className="btn btn-danger mr-3" 
                      onClick ={this.deleteEquipment}>
                        Delete
                      </button>

                      <button  
                      className="btn btn-primary mr-3">
                        View Usage
                      </button>

                      <button  
                      className="btn btn-success"
                      onClick={this.updateEquipment}>
                        Edit
                      </button>
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
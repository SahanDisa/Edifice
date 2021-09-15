import React, { Component } from 'react';
import EquipmentDataService from "./../../../services/equipment.service";

class NewEquip extends Component {

  constructor(props) {
    super(props);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveEquipment = this.saveEquipment.bind(this);

    this.state = {
      code: "",
      date:"",
      condition:"",
      category:"",
      description:"",
      //projectId: this.props.projectId,  
      submitted: false
    };
  }

  onChangeCode(e){
    this.setState({
      code: e.target.value
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  onChangeCondition(e){
    this.setState({
      condition: e.target.value
    });
  }

  onChangeCategory(e){
    this.setState({
      category: e.target.value
    });
  }

  saveEquipment() {
    var data = {
      code: this.state.code,
      date: this.state.date,
      condition: this.state.condition,
      category: this.state.category,
      description: this.state.description,
      projectId: this.state.projectId

    };

    EquipmentDataService.create(data)
      .then(response => {
        this.setState({
          code: response.data.code,
          date: response.data.date,
          condition: response.data.condition,
          description: response.data.description,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(data);
        console.log(response.data);
        window.location.reload();
      })
      .catch(e => {
        console.log(e);
      });
      
  }

    render() {
        return (  
        <div>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add Equipment</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                  <div class="container">                                
                    <div class="row">
                      <div class="col-6">
                        <label htmlFor="">Category</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        id="category"
                        value={this.state.category}
                        onChange={this.onChangeCategory}
                        name="category"/>
                      </div>

                      <div class="col-6">
                        <label htmlFor="">Brand/code</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        required
                        id="code"
                        value={this.state.code}
                        onChange={this.onChangeCode}
                        name="code"/>
                      </div>
                   </div>
                  </div>

                  <div class="container">                                
                    <div class="row">
                      <div class="col-6">
                        <label htmlFor="">Date issued</label>
                        <input 
                        className="form-control" 
                        type="date" 
                        id="date" 
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        name="date"/>
                       </div>

                       <div class="col-6">
                        <label htmlFor="">Condition</label>
                        <select 
                        className="form-control" 
                        name="condition" 
                        id="condition"
                        value={this.state.condition}
                        onChange={this.onChangeCondition}>
                          <option value="good">- - </option>
                            <option value="good">Good(New)</option>
                            <option value="fair">Fair</option>
                            <option value="poor">Poor</option>
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
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"/>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary"data-dismiss="modal" onClick={this.saveEquipment}>Add</button>
                </div>
              </div>
            </div>
        </div>
 
      );
    }
  }

export default NewEquip;

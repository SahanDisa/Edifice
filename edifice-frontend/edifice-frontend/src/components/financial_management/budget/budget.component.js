import React, { Component } from "react";
import BudgetDataService from "./../../../services/budget.service";

export default class AddDrawing extends Component{

  constructor(props) {
    super(props);
    this.onChangeCostCode = this.onChangeCostCode.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeOriginalBudget = this.onChangeOriginalBudget.bind(this);
    this.saveBudget = this.saveBudget.bind(this);
    this.newBudget = this.newBudget.bind(this);

    this.state = {
      id: null,
      costCode: "",
      category: "",
      originalBudget: "",
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeCostCode(e) {
    this.setState({
      costCode: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangeOriginalBudget(e) {
    this.setState({
      originalBudget: e.target.value
    });
  }

  saveBudget() {
    console.log("clicked");  
    var data = {
      costCode: this.state.costCode,
      category: this.state.category,
      originalBudget: this.state.originalBudget,
      projectId: this.state.projectId
    };

    BudgetDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          costCode: response.data.costCode,
          category: response.data.category,
          originalBudget: response.data.originalBudget,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newBudget() {
    this.setState({
      id: null,
      costCode: "",
      category: "",
      originalBudget: "",
      projectId: this.props.match.params.id,

      submitted: false
    });
  }

 
  render() {
    return (
        <div>
          <br />
          <ul class="nav nav-tabs">
           <h3 style={{paddingLeft: 10, paddingRight: 50}}> BUDGET</h3>
            <hr />
          </ul>
          <br />
          <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBudget}>
              Add Another Budget Line Item
            </button>
          </div>
        ) : (
          <div class="jumbotron">
            <h2>Add New Budget Line Item {/*projectId*/}</h2>
            <div className="form-group">
              <label htmlFor="costCode">Cost Code</label>
              <input
                type="text"
                className="form-control"
                id="costCode"
                required
                value={this.state.costCode}
                onChange={this.onChangeCostCode}
                name="costCode"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
                name="category"
              />
            </div>

            <div className="form-group">
              <label htmlFor="originalBudget">Original Budget</label>
              <input
                type="text"
                className="form-control"
                id="originalBudget"
                required
                value={this.state.originalBudget}
                onChange={this.onChangeOriginalBudget}
                name="originalBudget"
              />
            </div>

            <button onClick={this.saveBudget} className="btn btn-success">
             Add
            </button>
          </div>
        )}
      </div>
    </div>
    );
  }
};


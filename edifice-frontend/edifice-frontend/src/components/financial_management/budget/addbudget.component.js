import React, { Component } from "react";
import { Link } from "react-router-dom";
import BudgetDataService from "./../../../services/budget.service";

export default class AddBudget extends Component{

  constructor(props) {
    super(props);
    this.onChangeCostCode = this.onChangeCostCode.bind(this);
    //this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeEstimatedBudget = this.onChangeEstimatedBudget.bind(this);
    this.saveBudget = this.saveBudget.bind(this);
    this.newBudget = this.newBudget.bind(this);

    this.state = {
      id: null,
      costCode: "",
      //category: "",
      estimatedBudget: "",
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeCostCode(e) {
    this.setState({
      costCode: e.target.value
    });
  }


  onChangeEstimatedBudget(e) {
    this.setState({
      estimatedBudget: e.target.value
    });
  }

  saveBudget() {
    console.log("clicked");  
    var data = {
      costCode: this.state.costCode,
      //category: this.state.category,
     estimatedBudget: this.state.estimatedBudget,
      projectId: this.state.projectId
    };

    BudgetDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          costCode: response.data.costCode,
          //category: response.data.category,
          estimatedBudget: response.data.estimatedBudget,
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
      //category: "",
      estimatedBudget: "",
      projectId: this.props.match.params.id,

      submitted: false
    });
  }

 
  render() {
    const {projectId} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBudget}>
              Add Another Budget Line Item
            </button>&nbsp;&nbsp;
            <Link  to={"/budget/"+projectId} className="btn btn-success">View Budget</Link>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Budget Line Item</h2>
            <div className="form-group">
              <label htmlFor="costCode">Cost Code</label>
              {/*<input
                type="text"
                className="form-control"
                id="costCode"
                required
                value={this.state.costCode}
                onChange={this.onChangeCostCode}
                name="costCode"
              />*/}
                 <select 
                className="form-control"
                id="costCode"
                required
                value={this.state.costCode}
                onChange={this.onChangeCostCode}
                name="costCode"
              >
                <option>000-General</option>
                <option>200-Site Preparation</option>
                <option>220-Site Demolition</option>
                <option>230-Site Clearing</option>
                <option>240-Dewatering</option>
              </select>
            </div>

          
            <div className="form-group">
              <label htmlFor="originalBudget">Estimated Budget Ammount</label>
              <input
                type="text"
                className="form-control"
                id="originalBudget"
                required
                value={this.state.estimatedBudget}
                onChange={this.onChangeEstimatedBudget}
                name="originalBudget"
              />
            </div>

            <button onClick={this.saveBudget} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
};


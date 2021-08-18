import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectCostDataService from "./../../../services/directcost.service";

export default class AddDirectCost extends Component{

  constructor(props) {
    super(props);
    this.onChangeCostCode = this.onChangeCostCode.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeVendor = this.onChangeVendor.bind(this);
    this.onChangeEmployee = this.onChangeEmployee.bind(this);
    this.onChangeReceivedDate = this.onChangeReceivedDate.bind(this);
    this.onChangePaidDate = this.onChangePaidDate.bind(this);
    this.onChangeAmmount= this.onChangeAmmount.bind(this);
    this.saveDirectCost = this.saveDirectCost.bind(this);
    this.newDirectCost = this.newDirectCost.bind(this);

    this.state = {
      id: null,
      costCode :"",
      description :"",
      category :"",
      vendor :"",
      employee :"",
      receivedDate :"",
      paidDate :"",
      ammount: "",
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeCostCode(e) {
    this.setState({
      costCode: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeVendor(e) {
    this.setState({
      vendor: e.target.value
    });
  }

  onChangeEmployee(e) {
    this.setState({
      employee: e.target.value
    });
  }

  onChangeReceivedDate(e) {
    this.setState({
      receivedDate: e.target.value
    });
  }

  onChangePaidDate(e) {
    this.setState({
      paidDate: e.target.value
    });
  }

  onChangeAmmount(e) {
    this.setState({
      ammount: e.target.value
    });
  }

  saveDirectCost() {
    console.log("clicked");  
    var data = {
      costCode: this.state.costCode,
      description: this.state.description,
      category: this.state.category,
      vendor: this.state.vendor,
      employee: this.state.employee,
      receivedDate: this.state.receivedDate,
      paidDate: this.state.paidDate,
      ammount: this.state.ammount,
      projectId: this.state.projectId
    };

    DirectCostDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          costCode: response.data.costCode,
          description: response.data.description,
          category: response.data.category,
          vendor: response.data.vendor,
          employee: response.data.employee,
            receivedDate: response.data.receivedDate,
            paidDate: response.data.paidDate,
            ammount: response.data.ammount,
            projectId: response.data.projectId,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDirectCost() {
    this.setState({
      id: null,
      costCode: "",
      desription: "",
      category: "",
      vendor: "",
      employee: "",
      receivedDate: "",
      paidDate: "",
      ammount: "",
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
            <button className="btn btn-success" onClick={this.newDirectCost}>
              Add Another Direct Cost
            </button>&nbsp;&nbsp;
            <Link  to={"/directcost/"+projectId} className="btn btn-success">View Direct Costs</Link>
          </div>
        ) : (
          <div class="container">
            <h2>New Direct Cost</h2>
            <div className="form-group">
              <label htmlFor="costCode">Cost Code</label>
             {/* <input
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
                <option>010-Maintenance Equipment</option>
                <option>924-Sodding</option>
                <option>100-Visual Display Boards</option>
                <option>230-Site Clearing</option>
                <option>240-Dewatering</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              {/*<input
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
                name="category"
              />*/}
  <select 
                className="form-control"
                id="category"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
                name="category"
              >
                <option>Expense</option>
                <option>Invoice</option>
                <option>Payroll</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Vendor</label>
              <input
                type="text"
                className="form-control"
                id="vendor"
                required
                value={this.state.vendor}
                onChange={this.onChangeVendor}
                name="vendor"
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Employee</label>
              <input
                type="text"
                className="form-control"
                id="employee"
                required
                value={this.state.employee}
                onChange={this.onChangeEmployee}
                name="employee"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Received Date</label>
              <input
                type="date"
                className="form-control"
                id="receivedDate"
                required
                value={this.state.receivedDate}
                onChange={this.onChangeReceivedDate}
                name="receivedDate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Paid Date</label>
              <input
                type="date"
                className="form-control"
                id="paidDate"
                required
                value={this.state.paidDate}
                onChange={this.onChangePaidDate}
                name="paidDate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Ammount</label>
              <input
                type="text"
                className="form-control"
                id="ammount"
                required
                value={this.state.ammount}
                onChange={this.onChangeAmmount}
                name="ammount"
              />
            </div>
            <button onClick={this.saveDirectCost} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
        <br /><br />
      </div>
    );
  }
};


import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectCostDataService from "./../../../services/directcost.service";

export default class AddDirectCost extends Component{

  constructor(props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeVendor = this.onChangeVendor.bind(this);
    this.onChangeType= this.onChangeType.bind(this);
    this.onChangeInvoice= this.onChangeInvoice.bind(this);
    this.onChangeStatus= this.onChangeStatus.bind(this);
    this.onChangeAmmount= this.onChangeAmmount.bind(this);
    this.onChangeReceivedDate= this.onChangeReceivedDate.bind(this);
    this.onChangePaidDate= this.onChangePaidDate.bind(this);
    this.saveDirectCost = this.saveDirectCost.bind(this);
    this.newDirectCost = this.newDirectCost.bind(this);

    this.state = {
      id: null,
      date :"",
      vendor :"",
      type: "",
      invoice: "",
      status: "",
      ammount: "",
      receivedDate: "",
      paidDate: "",
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onChangeVendor(e) {
    this.setState({
      vendor: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeInvoice(e) {
    this.setState({
      invoice: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onChangeAmmount(e) {
    this.setState({
      ammount: e.target.value
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

  saveDirectCost() {
    console.log("clicked");  
    var data = {
      date: this.state.date,
      vendor: this.state.vendor,
      type: this.state.type,
      invoice: this.state.invoice,
      status: this.state.status,
      ammount: this.state.ammount,
      receivedDate: this.state.receivedDate,
      paidDate: this.state.paidDate,
      projectId: this.state.projectId
    };

    DirectCostDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
            date: response.data.date,
            vendor: response.data.vendor,
            type: response.data.type,
            invoice: response.data.invoice,
            status: response.data.status,
            ammount: response.data.ammount,
            receivedDate: response.data.receivedDate,
            paidDate: response.data.paidDate,
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
      date: "",
      vendor: "",
      type: "",
      invoice: "",
      status: "",
      ammount: "",
      receivedDate: "",
      paidDate: "",
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
            </button>
            <Link  to={"/directcost/"+projectId} className="btn btn-success">View Direct Costs</Link>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Direct Cost</h2>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                required
                value={this.state.date}
                onChange={this.onChangeDate}
                name="date"
              />
            </div>

            <div className="form-group">
              <label htmlFor="vendor">Vendor</label>
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
              <label htmlFor="Type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ReceivedDate">Received Date</label>
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
              <label htmlFor="paidDate">Paid Date</label>
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
              <label htmlFor="Invoice">Invoice</label>
              <input
                type="text"
                className="form-control"
                id="invoice"
                required
                value={this.state.invoice}
                onChange={this.onChangeInvoice}
                name="invoice"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Status">Status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                name="status"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Ammount">Ammount</label>
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


import React, { Component } from "react";
import VendorDataService from "./../../../services/vendor.service";

class AddVendor extends Component {

  constructor(props) {
    super(props);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeContactNo = this.onChangeContactNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactPersonName = this.onChangeContactPersonName.bind(this);
    this.saveVendor = this.saveVendor.bind(this);
    this.newVendor = this.newVendor.bind(this);
    //this.retriveVendors = this.retrieveVendors.bind(this);
    this.state = {
      companyName: "",
      type: "",
      contactNo:"",
      email:"",
      contactPersonName: "",

      submitted: false,
      lastVendor:[],
      lastVendorID:undefined,
      currentIndex: -1,
      id: undefined
    };
  }
  componentDidMount() {
    this.getLastVendorID();
  }

  //onChange functions
  onChangeCompanyName(e) {
    this.setState({
      companyName: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeContactNo(e) {
    this.setState({
      contactNo: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeContactPersonName(e) {
    this.setState({
      contactPersonName: e.target.value
    });
  }

  saveVendor() {
    //this.getLastVendorID();
    console.log(this.lastVendorID);
    var data = {
      id: this.state.lastVendorID+1,
      companyName: this.state.companyName,
      type: this.state.type,
      contactNo:this.state.contactNo,
      email:this.state.email,
      contactPersonName: this.state.contactPersonName
    };
    this.state.lastVendorID=data.id;

    console.log(data);

    VendorDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          companyName: response.data.companyName,
          type: response.data.type,
          contactNo: response.data.contactNo,
          email: response.data.email,
          contactPersonName: response.data.contactPersonName
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        //console.log(data);
      });
    //this.state.getLastvendorID();
  }

  newVendor() {
    this.setState({
      id: null,
      companyName: "",
      type: "",
      contactNo:"",
      email:"",
      contactPersonName: "",

      submitted: false
    });
  }

  getLastVendorID(){
    VendorDataService.findlastVendor()
      .then(response => {
          this.setState({
            lastVendorID: response.data[0].id
          });
          console.log(this.state);
          //return response.data[0].id;
        })
        .catch(e => {
          console.log(e);
        });
  }

  render() {
    const {lastproject, currentIndex} = this.state;


    return (
      <div className="container ">
        <h2>New Vendor </h2><hr/>
        <div className="vendorBox" >
          <h5>Enter necessary vendor details</h5>

          <label htmlFor="" hidden>Id</label>
          <input className="form-control" type="number" hidden/>
          <br/>

          <label htmlFor="">Company Name</label>
          <input className="form-control" type="text" id="companyName"
                required
                value={this.state.companyName}
                onChange={this.onChangeCompanyName}
                name="companyName" required/>
          <br/>

          <label htmlFor="">Type</label>

          <select className="form-control" name="type" id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="companyName" required>
            <option value="concrete">concrete</option>
            <option value="electronic">electronic</option>
            <option value="other">other</option>
          </select><br />

          <label htmlFor="">Contact No</label>
          <input className="form-control" type="text" id="contactNo"
                required
                value={this.state.contactNo}
                onChange={this.onChangeContactNo}
                name="companyName" required/>
          <br/>

          <label htmlFor="">Email</label>
          <input className="form-control" type="text"  id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email" required/>
          <br/>

          
          <label htmlFor="">Contact Person Name</label>
          <input className="form-control" type="text"  id="contactPersonName"
                required
                value={this.state.contactPersonName}
                onChange={this.onChangeContactPersonName}
                name="contactPersonName" required/>
          <br/>
          <br/>

          <div className="row">
            <a onClick={()=>{this.saveVendor(); setTimeout(this.setState.bind(this, {position:1}), 3000);}}className="btn btn-success">Add </a>
            <div className="pl-4">  
              <a className="btn btn-secondary" type="reset">Cancel</a>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
  
}

export default AddVendor;
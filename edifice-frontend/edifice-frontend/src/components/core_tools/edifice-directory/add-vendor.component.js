import React, { Component } from "react";
import {Link } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Breadcrumbs } from "@material-ui/core";
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
    this.displayResult = this.displayResult.bind(this);
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
      id: undefined,
      disableSubmitButton:true,
      isSuccess: true
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
      type: e.target.value,
      disableSubmitButton: true
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
    this.state.getLastvendorID();

    this.setState({
      isSuccess: true
    })

    this.displayResult();
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

  displayResult(){
    //this.state.isSuccess
    if(true){
      cogoToast.success(
        <div>
          <div>Vendor <b>{this.state.name}</b>has been added Successfully</div>
        </div>
      );
    }else{
      cogoToast.error(
        <div>
          <div>Failed to add Vendor <b>{this.state.name}</b></div>
        </div>
      );
      
    }
    

    setTimeout(() => {
      window.location.href="/vendor"
    }, 2000);
  }

  render() {
    const {lastproject, currentIndex} = this.state;


    return (
      <div className="container ">
        <h2><AddCircleOutlineIcon/> NEW VENDOR </h2><hr/>

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/home">
            Home
          </Link>
          <Link color="inherit" to={"/admin"}>
            Core Dashboard
          </Link>
          <Link color="inherit" to={"/vendor"}>
            Vendors
          </Link>
          <Link color="inherit">
            Add Vendor
          </Link>
        </Breadcrumbs>

        <div className="vendorBox" >
          <h5 className="mt-3">Enter necessary vendor details</h5>

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
            <option value="concrete">Concrete</option>
            <option value="electronic">Electronic</option>
            <option value="other">Other</option>
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
            <a onClick={()=>{this.saveVendor(); setTimeout(this.setState.bind(this, {position:1}), 3000); this.displayResult()}}className="btn btn-success" disabled={this.state.disableSubmitButton}>Add </a>
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
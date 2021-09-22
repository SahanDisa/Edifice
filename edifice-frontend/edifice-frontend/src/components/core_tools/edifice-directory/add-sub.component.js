import React, { Component } from "react";
import {Link } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Breadcrumbs } from "@material-ui/core";
import SubDataService from "./../../../services/subcontractor.service";

class AddSub extends Component {

  constructor(props) {
    super(props);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeContactNo = this.onChangeContactNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactPersonName = this.onChangeContactPersonName.bind(this);
    this.saveSub = this.saveSub.bind(this);
    this.newSub = this.newSub.bind(this);
    this.displayResult = this.displayResult.bind(this);

    this.state = {
      companyName: "",
      type: "Concrete",
      contactNo:"",
      email:"",
      contactPersonName: "",

      submitted: false,
      lastSub:[],
      lastSubID:undefined,
      currentIndex: -1,
      id: undefined,
      isSuccess: false
    };
  }
  componentDidMount() {
    this.getLastSubID();
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

  saveSub() {
    //this.getLastSubID();
    console.log(this.lastSubID);
    var data = {
      id: this.state.lastSubID+1,
      companyName: this.state.companyName,
      type: this.state.type,
      contactNo:this.state.contactNo,
      email:this.state.email,
      contactPersonName: this.state.contactPersonName
    };
    this.state.lastSubID=data.id;

    console.log(data);

    SubDataService.create(data)
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
    this.getLastSubID();
    this.setState({
      isSuccess: true
    })
    this.displayResult()
   }

  newSub() {
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

  getLastSubID(){
    SubDataService.findlastSub()
      .then(response => {
          this.setState({
            lastSubID: response.data[0].id
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
          <div>Sub-Contractor <b>{this.state.name}</b>has been added Successfully</div>
        </div>
      );
    }else{
      cogoToast.error(
        <div>
          <div>Failed to add Sub-Contractor <b>{this.state.name}</b></div>
        </div>
      );
      
    }
  }

  render() {
    const {lastsub, currentIndex} = this.state;


    return (
      <div className="container ">
        <h2> <AddCircleOutlineIcon/> NEW SUB-CONTRACTOR </h2><hr/>

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/home">
            Home
          </Link>
          <Link color="inherit" to={"/admin"}>
            Core Dashboard
          </Link>
          <Link color="inherit" to={"/subcontractors"}>
            Sub-contractors
          </Link>
          <Link color="inherit">
            Add Sub-contractor
          </Link>
        </Breadcrumbs>

        <div className="subBox mt-2" >
          <h5>Enter necessary Sub-contractor details</h5>

          <label htmlFor="" hidden>ID</label>
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
            <option value="Concrete">Concrete</option>
            <option value="Electronic">Electronic</option>
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
            <a onClick={()=>{this.saveSub(); setTimeout(this.setState.bind(this, {position:1}), 3000);}}className="btn btn-success">Add </a>
            <div className="pl-4">  
              <a className="btn btn-secondary" type="reset">Cancel</a>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
  
}

export default AddSub;
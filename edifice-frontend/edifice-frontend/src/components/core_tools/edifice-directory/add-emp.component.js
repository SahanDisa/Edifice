import React, { Component } from "react";
import EmployeeDataService from "./../../../services/employee.service";

class AddEmployee extends Component {
  constructor(props) {
      super(props);
      this.onChangeID = this.onChangeID.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeRole = this.onChangeRole.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeMobile = this.onChangeMobile.bind(this);
      this.onChangeOther = this.onChangeOther.bind(this);
      this.saveEmployee = this.saveEmployee.bind(this);
      this.newEmployee = this.newEmployee.bind(this);
      //this.retriveVendors = this.retrieveVendors.bind(this);
      this.state = {
        name: "",
        role:"",
        email:"",
        mobile:"",
        projCount:0,
        other:"",

        submitted: false,
        lastEmployee:[],
        lastEmployeeID:undefined,
        currentIndex: -1,
        id: undefined
      };
    }
  
  componentDidMount() {
    this.getLastEmployee();
  }

    //onChange functions
  onChangeID(e) {
    this.setState({
      id: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeOther(e) {
    this.setState({
      other: e.target.value
    });
  }

  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    });
  }

  saveEmployee() {
    
    var data = {
      id: this.state.lastEmployeeID+1,
      name: this.state.name,
      mobile: this.state.mobile,
      role: this.state.role,
      projCount:this.state.projCount,
      email:this.state.email,
      other: this.state.other
    };

    console.log(data);

    EmployeeDataService.create(data)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        role: response.data.role,
        mobile: response.data.mobile,
        email: response.data.email,
        projCount: response.data.projCount,
        other: response.data.other,
      });
      console.log(response.data);
      this.getLastEmployee();
    })
    .catch(e => {
      console.log(e);
      //console.log(data);
    });
      this.getLastEmployee();
  }

  newEmployee() {
    this.setState({
      id: null,
      name: "",
      role: "",
      mobile:"",
      email:"",
      projCount:0,
      other: "",

      submitted: false
    });
  }

  getLastEmployee(){
    EmployeeDataService.findlastEmployee()
      .then(response => {
          this.setState({
            lastEmployeeID: response.data[0].id
          });
          //console.log(response.data[0].id);
          console.log(this.state.lastEmployeeID);
          //return response.data[0].id;
        })
        .catch(e => {
          console.log(e);
        });
  }

  render() {

    return (
      <div className="container">
        <h2>New User</h2><hr/>
        <div className="">
          <h5>Enter user details</h5>

          <label htmlFor="" hidden>Id</label>
          <input className="form-control" type="number" hidden/>
          <br/>

          <label htmlFor="">Name</label>
          <input className="form-control" type="text" id="name"
            required
            value={this.state.name}
            onChange={this.onChangeName}
            name="name" required/>
          <br/>

          <label htmlFor="">Role</label>

          <select className="form-control" name="" id="role"
          required
          value={this.state.role}
          onChange={this.onChangeRole}
          name="role" required>
            <option value="Civil Engineer">Civil engineer</option>
            <option value="Project Manager">Project manager</option>
            <option value="Site supervisor">Site supervisor</option>
          </select><br />

          <label htmlFor="">Email</label>
          <input className="form-control" type="email"  id="email"
            required
            value={this.state.email}
            onChange={this.onChangeEmail}
            name="email" required/>
          <br/>

          <label htmlFor="">Mobile</label>
          <input className="form-control" type="text"  id="mobile"
            required
            value={this.state.mobile}
            onChange={this.onChangeMobile}
            name="mobile" required/>
          <br/>

          <label htmlFor="">Other notes: </label>
          <input className="form-control" type="text"  id="other"
            required
            value={this.state.other}
            onChange={this.onChangeOther}
            name="other" required/>
          <br/>

          <div>
          <a onClick={()=>{this.saveEmployee(); setTimeout(this.setState.bind(this, {position:1}), 3000); this.getLastEmployee()}} className="btn btn-success">Add</a>
          <a className="btn btn-secondary" type="reset">Cancel</a>
          </div>
          <div>
          
          </div>
        </div>
      
      </div>
    );
  }
  
}

export default AddEmployee;
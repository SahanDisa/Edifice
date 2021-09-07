import React, { Component } from "react";
import EmployeeDataService from "./../../../services/employee.service";

class EditUser extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.match.params);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      role:"",
      email:"",
      mobile:"",
      projCount:0,
      other:"",
    };
  }

  componentDidMount() {
    this.getEmployee(this.props.match.params.id);
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

  getEmployee(id){
    EmployeeDataService.getOne(id)
    .then(response => {
      this.setState({
        
        name: response.data.name,
        role: response.data.role,
        mobile: response.data.mobile,
        email: response.data.email,
        projCount: response.data.projCount,
        other: response.data.other,
        //submitted: true
      });
      console.log(response.data);
      //this.getLastEmployee();
    })
    .catch(e => {
      console.log(e);
      //console.log(data);
    });
  }

  render() {
    //const {cid}= this.state;
    const {id,name,} = this.state;

    return (
      <div className="col-auto">
        <h2>Edit Employee Details</h2><hr/>
        <div className="">
          <h5>Enter user details</h5>

          <label htmlFor="">Id</label>
          <input className="form-control" type="number" value={id} required/>
          <br/>

          <label htmlFor="">Name</label>
          <input className="form-control" type="text" value={this.state.name}required/>
          <br/>
          <label htmlFor="">Role</label>

          <select className="form-control" name="role" id="role" value={this.state.role}>
            <option value="Civil engineer">Civil engineer</option>
            <option value="Project manager">Project manager</option>
            <option value="Site supervisor">Site supervisor</option>
          </select><br />

          <label htmlFor="">Email</label>
          <input className="form-control" type="text" value={this.state.email} required/>
          <br/>

          <label htmlFor="">Mobile</label>
          <input className="form-control" type="text" value={this.state.mobile} required/>
          <br/>
          <br/>

          <label htmlFor="">Other Notes</label>
          <input className="form-control" type="text" value={this.state.other} required/>
          <br/>
          <br/>

          <div className="row">
            <div>
            <button className="btn btn-success" disabled>Update</button>
            </div>
            <div className="mx-3">
            <a href="/employees" className="btn btn-success">Cancel</a>
            </div>
            <div >
            <a href="/deleteuser/" className="btn btn-danger">Delete</a>
            </div>
          </div>
          
        </div>
        

      </div>
    );
  }
  
}

export default EditUser;
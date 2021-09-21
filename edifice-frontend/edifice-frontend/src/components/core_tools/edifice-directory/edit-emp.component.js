import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import EmployeeDataService from "./../../../services/employee.service";
import { Breadcrumbs } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

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
      disableButton:true
    };

    this.getEmployee(this.props.match.params.id);
  }

  componentDidMount() {
    
  }
  
  onChangeName(e) {
    this.setState({
      name: e,
      disableButton:false
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e,
      disableButton:false
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e,
      disableButton:false
    });
  }

  onChangeOther(e) {
    this.setState({
      other:e,
     disableButton:false
    });
  }

  onChangeMobile(e) {
    this.setState({
      mobile: e,
      disableButton:false
    });
  }

  displaySuccess(){
    
    window.location.reload();
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

  updateEmployee(id){
    var data={
    name: this.state.name,
    role:this.state.role,
    mobile:this.state.mobile,
    email: this.state.email,
    other: this.state.other
    }

    EmployeeDataService.update(id,data)
    .then(response => {
      console.log(response.data);
      //this.getLastEmployee();
    })
    .catch(e => {
      console.log(e);
      //console.log(data);
    });

    this.displaySuccess();
  }

  deleteEmployee(id){

    EmployeeDataService.delete(id)
    .then(response => {
      console.log(response.data);
      //this.getLastEmployee();
    })
    .catch(e => {
      console.log(e);
      //console.log(data);
    });

    window.location.href="/employees";
  }

  render() {
    //const {cid}= this.state;
    const {id,name} = this.state;

    return (
      <div className="col-auto">
        <h2>Edit Employee Details</h2><hr/>
        <div className="">
          <div className="row pl-3" >
            <p>Employee ID:</p>
            <b className="pl-3">{id}</b>
          </div>

          <label htmlFor="">Name</label>
          <input className="form-control" size="20" type="text" value={this.state.name} 
          onChange={e => this.onChangeName(e.target.value)}
          required/>
          <br/>
          <label htmlFor="">Role</label>

          <select className="form-control" name="role" id="role" value={this.state.role}
          onChange={e => this.onChangeRole(e.target.value)}
          >
            <option value="Civil engineer">Civil engineer</option>
            <option value="Project manager">Project manager</option>
            <option value="Site supervisor">Site supervisor</option>
          </select><br />

          <label htmlFor="">Email</label>
          <input className="form-control" type="text" value={this.state.email}
          onChange={e => this.onChangeEmail(e.target.value)}
          required/>
          <br/>

          <label htmlFor="">Mobile</label>
          <input className="form-control" type="text" value={this.state.mobile}
          onChange={e => this.onChangeMobile(e.target.value)}
          required/>
          <br/>

          <label htmlFor="">Other Notes</label>
          <input className="form-control" type="text" value={this.state.other}
          onChange={e => this.onChangeOther(e.target.value)}
          required/>
          <br/>

          <div className="row">
            <div>
            <button className="btn btn-success" disabled={this.state.disableButton} id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
            </div>
            <div className="mx-3">
            <a href="/employee" className="btn btn-success">Cancel</a>
            </div>
            <div >
            <button className="btn btn-danger" id="updateBtn" data-target="#deleteModal" data-toggle="modal" ><DeleteIcon style={{ fontSize:15 }}/> Delete</button>
            </div>
          </div>
          
        </div>

       {/* Update modal Starts */}
       <div className="modal fade" id="promptModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <p className="modal-title" id="exampleModalCenterTitle" style={{ fontSize:20 }}>Are you sure you want to update details of Mr.<b>{this.state.name}.</b> </p>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <a onClick={() =>{this.updateEmployee(id)}} className="btn btn-primary pr-3 ml-2 mr-3"> Yes, Update</a>
                  <a className="btn btn-secondary ml-6 mr-6 pl-3" data-dismiss="modal"> Cancel</a>
                </div>
              </div>
            </div>
          </div>
          {/* Update modal Ends */}

          {/* Delete modal Starts */}
       <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <p className="modal-title" id="exampleModalCenterTitle" style={{ fontSize:20 }}> 
                    Are you sure you want to delete Mr.<b>{this.state.name}</b> as an employee?</p>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={() =>{this.deleteEmployee(id)}} > Yes, Delete</a>
                  <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                </div>
              </div>
            </div>
          </div>
          {/* Delete modal Ends */}  

      </div>

      
    );
  }
  
}

export default EditUser;
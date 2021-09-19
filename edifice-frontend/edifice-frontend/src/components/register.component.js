import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import mainIcon from "././../assets/logoedifice.png";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Chip from "@material-ui/core/Chip";
//import Stack from '@material-ui/core/Stack';

import EmployeeDataService from "../services/employee.service";
import DesignationDataService from "../services/designation.service";
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    //this.addToRoles=this.addToRoles.bind(this);

    this.state = {
      id: this.props.match.params.id,
      username: "",
      empname: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      rolesSelected: [],
      designations:[],
      rolesColors: [],
      signupDisabled:true
    };

    this.makeRolearray(this.state.id)
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    //console.log("agagagagag")
    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
    
  }

  //handle frontend input

  makeRolearray(id){
    if(id!="undefined"){

      EmployeeDataService.getOne(id)
      .then(response => {
        this.setState({
          email: response.data.email,
          empname: response.data.name
        });
        
        console.log(this.state.email);
      })
      .catch(e => {
        console.log(e);
      });

      DesignationDataService.getAllDesignations()
      .then(response => {
        this.setState({
          designations: response.data
        });
        
        console.log(this.state.designations);
        this.state.designations.forEach(element => {
          this.state.rolesSelected.push(
            "default"
          )
        });
        
      })
      .catch(e => {
        console.log(e);
      });
    }
    
    console.log(this.state.rolesSelected);
  }

  addToRoles(index){
    //console.log(index)
    if(this.state.rolesSelected[index]=="default"){
      let rolesSelected = [...this.state.rolesSelected];
      let roleSelected = {...rolesSelected[1]};
      roleSelected = 'secondary';
      rolesSelected[index] = roleSelected;
      this.setState({rolesSelected});
    }else{
      //you cant use x[]= in state!
      let rolesSelected = [...this.state.rolesSelected];
      let roleSelected = {...rolesSelected[1]};
      roleSelected = 'default';
      rolesSelected[index] = roleSelected;
      this.setState({rolesSelected});
    }
    //console.log(this.state.color)
    console.log(this.state.rolesSelected[index])
  }

  render() {

    const roles= this.state.designations;

    return (
      <div>
        <h2 className="py-4"><PersonAddIcon/> Create Account</h2>

        <div className="row">
          <div className="col-6 pr-4">

            <Form
              onSubmit={this.handleRegister}
              ref={c => {
                this.form = c;
              }}
            >
              {!this.state.successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required, vusername]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="roles">

                  </div>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
            </Form>
            
          {/* row end down*/}
          </div>
          <div className="col-6">
            <h3 className="pd-3">Select Roles </h3>
            <p>Allocate roles for employee </p>
            <div className="row">
            {roles.map((value,index) => { 
              return(

                <div className="pr-2">
                  <Chip 
                    className="py-1"
                    label={value.name}
                    onClick={() =>this.addToRoles(index)}
                    clickable={true} color={this.state.rolesSelected[index]} />
                </div>
                )
              })}
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={this.handleRegister}>Sign Up</button>
          </div>
        
        </div>
      </div>
    );
  }
}
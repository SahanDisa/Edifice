import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import mainIcon from "././../assets/logoedifice.png";

import AuthService from "../services/auth.service";

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
   
    this.onChangeUserMail = this.onChangeUserMail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.showCodeArea = this.showCodeArea.bind(this);
    this.isCodeSuccess = this.isCodeSuccess.bind(this);
    this.ChangeToNewPassword = this.ChangeToNewPassword.bind(this);

    this.state = {
      usermail: "",
      password: "",
      loading: false,
      message: "",
      isCodeSend: false,
      code: 0,
      isAuthUser: false
    };
  }

  onChangeUserMail(e) {
    this.setState({
      usermail: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  
  showCodeArea(){
    const min = 100000;
    const max = 900000;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(rand);
    this.setState({
     isCodeSend: true,
     code: rand
    });
  }

  isCodeSuccess(){
    if(this.state.password == this.state.code){
        console.log("code is success");
        this.setState({
            isAuthUser: true
        });
    }else{
        console.log("code is unsuccess");
    }
  }
  ChangeToNewPassword(){

  }

  render() {
    const {isCodeSend,isAuthUser} = this.state;
    return (
    <div>
    {isAuthUser == false ? 
    // User is not authenticate to change the password 
    <div className="col-md-12">
        <div className="card card-container" id="card">
          <img
            // src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            src={mainIcon}
            alt="profile-img"
            className="profile-img-card"
            id="img"
          />
         
          <div className="form-group">
                <label htmlFor="projectID">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="usermail"
                    required
                    // value={this.state.projectID}
                    // onChange={this.onChangePosition}
                    name="usermail"
                    value = {this.state.usermail}
                />
          </div>
          {!isCodeSend && 
          <div className="form group">
           <button className="btn btn-primary btn-block" onClick={this.showCodeArea}>
                Send Code
            </button>
          </div>
          }
          {isCodeSend && 
          <div>
          <div className="form-group">
                <label htmlFor="projectID">Code</label>
                <input
                    type="password"
                    className="form-control"
                    id="code"
                    // required
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    name="code"
                />
          </div>
          <div className="form group">
           <button className="btn btn-primary btn-block" onClick={this.isCodeSuccess}>
               Change Password
            </button>
          </div>
          <div className="form group">
           <button className="btn btn-primary btn-block mt-2" onClick={this.showCodeArea}>
               Resend Code
            </button>
          </div>
          </div>
          
          } 
        </div>
    </div>
    :
    // User is authenticate to change the password
    <div className="col-md-12">
        <div className="card card-container" id="card">
          <img
            // src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            src={mainIcon}
            alt="profile-img"
            className="profile-img-card"
            id="img"
          />
          <center><h6>Change Password</h6></center>
         
          <div className="form-group">
                <label htmlFor="projectID">New Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="newpassword"
                    required
                    // value={this.state.projectID}
                    // onChange={this.onChangePosition}
                    name="newpassword"
                    //value = {this.state.password}
                />
          </div>
          <div className="form-group">
                <label htmlFor="projectID">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="code"
                    // required
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    name="code"
                />
          </div>
          
          <div className="form group">
           <button className="btn btn-primary btn-block" onClick={this.ChangeToNewPassword}>
               Change Password
            </button>
          </div>
          
        </div>
    </div>
    } 
    </div> 
    );
  }
}
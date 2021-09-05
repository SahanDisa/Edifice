import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import UserService from "./../services/user.service";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import mainIcon from "././../assets/profile-gen.png";
import buildIcon from "././../assets/PM/ibulldozer.png";
import PersonIcon from '@material-ui/icons/Person';
import Card from 'react-bootstrap/Card';

//css styles
const linkText={
  color: "#FFFFFF",
  textDecoration: "none"
}

const adminCardStyle = {
  backgroundColor: "#273f7d",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#efefef"}
}

const modCardStyle = {
  backgroundColor: "#6B7BA4",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#efefef"}
}

const userCardStyle = {
  backgroundColor: "#6B7BA4",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#efefef"}
}

function makeButtonForRole(name) {
  // return a lassana div
  if(name=='ROLE_ADMIN'){
    return <div className="d-inline-block pt-1 pl-2 pr-3 mt-1 mb-1 rounded" style={adminCardStyle}>
    <h4><PersonIcon className="pb-1" style={{ fontSize:28 }}/> Admin</h4>
    </div>;
  }
  else if(name=='ROLE_MODERATOR'){
    return <div className="d-inline-block pt-1 pl-2 pr-3 mt-1 mb-1 rounded" style={modCardStyle}>
    <h4><PersonIcon className="pb-1" style={{ fontSize:28 }}/> Moderator</h4>
    </div>;
  }
  else if(name=='ROLE_USER'){
    return <div className="d-inline-block pt-1 pl-2 pr-3 mt-1 mb-1 rounded" style={userCardStyle}>
    <h4><PersonIcon className="pb-1" style={{ fontSize:28 }}/> User</h4>
    </div>;
  }
}
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      projects: [],
      currentIndex: -1,
      content: ""
      //currentUserProfile: UserService.userProjects(currentUser.id)
    };
  }
  componentDidMount() {
    this.retrieveProjects(this.state.currentUser.id);
  }
  retrieveProjects(id) {
    UserService.userProjects(id)
      .then(response => {
        this.setState({
          projects: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { projects,currentIndex,currentUser } = this.state;
    return (
      <div className="container">
        <div className="row">
        <div className="col-12">
          <Card
              bg={'success'}
              text={'white'}
              //style={{ width: '14rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                <div className="row">
                <div className="col-10">
                <h3>Profile</h3>
                <h6>Username : {currentUser.username}</h6>
                <h6>Email : {currentUser.email}</h6>
                {/*  currentUser.roles.length-1 is to get last element  */} 
                <h6>Role  : {currentUser.roles[currentUser.roles.length-1]}</h6> 
                </div>
                <div className="col-2">
                <img
                    // src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    src={mainIcon}
                    alt="profile-img"
                    className="profile-img-card"
                    
                />
                </div>
                </div>
                </Card.Text>
              </Card.Body>
            </Card> 
        </div>
        </div>
        <div className="row">
          <div className="col-6">
          <h3>My Account</h3>
          <p>
            <strong>Token:</strong>{" "}
            {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          <div className="form-group">
              <label htmlFor="startDate"><h6>Username : </h6></label>
              <input
                type="text"
                className="form-control"
                id="startDate"
                //required
                value={this.state.currentUser.username}
                // onChange={this.onChangeLocation}
                name="startDate"
              />
          </div>
          <div className="form-group">
              <label htmlFor="startDate"><h6>Email : </h6></label>
              <input
                type="text"
                className="form-control"
                id="startDate"
                //required
                value={this.state.currentUser.email}
                // onChange={this.onChangeLocation}
                name="startDate"
              />
          </div>
          <a href="#" className="btn btn-primary">Update Profile</a>
            <hr></hr>
            
          </div>
          <div className="col-6">
          <h3>My Roles & Permission</h3>
            <div className="form-group">
              {makeButtonForRole(currentUser.roles[currentUser.roles.length-1])}
            </div>
            
          <h6>Permissions:</h6>
          <ul>
          <li className="list-group-item"><b>Project Management</b></li>
          <li className="list-group-item"><b>Finance Management</b></li>
          </ul>
          </div>
        </div>
       
      </div>
    );
  }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import UserService from "./../services/user.service";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import mainIcon from "././../assets/profile-gen.png";
import buildIcon from "././../assets/PM/ibulldozer.png";
import PersonIcon from '@material-ui/icons/Person';
import Card from 'react-bootstrap/Card';

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
              bg={'primary'}
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
                <h6>Role  : Admin</h6> 
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
        {/* Page content */}
        <div className="row">
          <div className="col-6">
          <h3>My Account</h3>
          <p>
            {/* <strong>Token:</strong>{" "}
            {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)} */}
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
          <a href="#" className="btn btn-dark">Update Profile</a>
            <hr></hr>
            
          </div>
          <div className="col-6">
          <h3>My Roles & Permission</h3>
          <h6>Authorities:</h6>
              <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => 
                  <li className="list-group-item" key={index}><b>{role}</b></li>
                  )
                }
              </ul>
          <h6>Permission:</h6>
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
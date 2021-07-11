import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import UserService from "./../services/user.service";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import mainIcon from "././../assets/profile-gen.png";
import buildIcon from "././../assets/PM/ibulldozer.png";

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
        <header className="jumbotron">
          <h3>
            <strong>Profile Page</strong>
            {/* <AccountCircleIcon fontSize="large" /> */}
          </h3>
          <h4>Username: {currentUser.username}</h4>
        </header>
        <div className="row">
          <div className="col-6">
          <h3>My Account</h3>
          <img
            // src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            src={mainIcon}
            alt="profile-img"
            className="profile-img-card"
            
          />
          <p>
            {/* <strong>Token:</strong>{" "}
            {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)} */}
          </p>
          <p>
            <strong>Username:</strong>{" "}
            {currentUser.username}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index}><b>{role}</b></li>)}
          </ul>
          <a href="#" className="btn btn-warning">Update Profile</a>
          </div>
          <div className="col-6">
              <h3>My Projects</h3>
              <img
                src={buildIcon}
                alt="profile-img"
                className="profile-img-card"
              />
              {projects &&
              projects.map((project, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  // onClick={() => this.setActiveProject(project, index)}
                  key={index}
                >
                  <h4>{project.firstname + " " + project.lastname}</h4>
                  <h5>{project.position}</h5>
                  <h6>{project.gender}</h6>
                  <p>Project Id : {project.projectuserId} Port City</p>
                <Link
                  to={"/projectmanagementhome/" + project.projectuserId}
                  className="btn btn-primary"
                >
                  Go To Project
                </Link>
                </li>
                
              ))}
          </div>
        </div>
       
      </div>
    );
  }
}
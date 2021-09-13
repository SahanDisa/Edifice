import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserService from "./../services/user.service";
import ProjectDataService from "./../services/project.service";
import AuthService from "./../services/auth.service";
import Logo from "./../assets/Edifice.png";

export default class Homereal extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);

    this.state = {
      projects: [],
      currentIndex: -1,
      content: "",
      currentUser: AuthService.getCurrentUser()
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
    this.retrieveProjects(this.state.currentUser.id);
  }
  retrieveProjects(id) {
    ProjectDataService.userProjects(id)
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
        {/* <header className="jumbotron"> */}
        <div className="form-row">
            <div className="form-group col-md-6">
                <div></div>
                <h1>Edifice</h1>
                <p>Manage your large-scale projects from start to end</p>
            </div>
            <div className="form-group col-md-6">
                <img src={Logo} alt="" />
            </div>    
        </div>
        
        {/* </header> */}
      </div>
    );
  }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserService from "../services/user.service";
import myIcon from "../assets/066-bulldozer.png";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
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
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3> <img src={myIcon} width="36" height="36" /> Home</h3>
          <h5>Projects that you are involved in</h5>
          {/* Display involved Project of a particular user */}

          <div class="card">
            <h5 class="card-header">Project XX2</h5>
            <div class="card-body">
              <h5 class="card-title">Port City: Apartment Section 01</h5>
              <p class="card-text">stat1</p>
              <p class="card-text">stat2</p>
              <p class="card-text">stat3</p>
              <a href={"/Project"} className="btn btn-primary"> Go to the project</a>
            </div>
          </div>
          <Link to={"/AddProject"}>
          <Fab color="primary" aria-label="add" >
            <AddIcon />
          </Fab>
          </Link>
        </header>
        
      </div>

      
    );
  }
}
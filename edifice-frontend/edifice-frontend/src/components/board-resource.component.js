import React, { Component } from "react";

import UserService from "./../services/user.service";




export default class BoardResource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
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
          <h3>Resource Management</h3>
        </header>
        <p>View timesheet</p>
        <a href="/timesheet" className="btn btn-outline-primary">TimeSheet</a>
        <p>View crew</p>
        <a href="/crew" className="btn btn-outline-primary">Crew</a>
        <p>View Schedule</p>
        <a href="#" className="btn btn-outline-primary">Schedule</a>
        <p>View Equipment</p>
        <a href="#" className="btn btn-outline-primary">Equipment</a>
      </div>
    );
  }
}
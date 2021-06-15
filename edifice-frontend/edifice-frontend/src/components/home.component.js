import React, { Component } from "react";

import UserService from "../services/user.service";

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
          <h3>Home</h3>
          <h5>Projects that you involved in</h5>
          {/* Display involved Project of a particular user */}
          <div class="card">
            <h5 class="card-header">Project XXX</h5>
            <div class="card-body">
              <h5 class="card-title">Port City: Apartment Section 01</h5>
              <p class="card-text">Random description.</p>
              {/* Table of people involved in project */}
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Role</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Office</th>
                    <th scope="col">Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{/* Role here */}</td>
                    <td>{/* Name here */}</td>
                    <td>{/* Email here */}</td>
                    <td>{/* Office here */}</td>
                    <td>{/* Mobile here */}</td>
                  </tr>
                </tbody>
              </table>

              <a href="/projext" className="btn btn-primary"> Go to the project</a>
            </div>
          </div>
          <a href="/addproject" className="btn btn-outline-success">Add Project</a>
        </header>
        
      </div>
    );
  }
}
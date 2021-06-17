import React, { Component } from "react";
import Dates from './core_tools/admin/dates.component'
import Defaults from './core_tools/admin/defaults.component'
import Roles from './core_tools/admin/roles.component'

import Users from './core_tools/edifice-directory/employees.component'

import UserService from "../services/user.service";

export default class BoardUser extends Component {
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
          {/* <h3>{this.state.content}</h3> */}
          <h3>Core Tools</h3>
          <h5>Hello Admin, These are your core tools</h5>
        </header>
        {/* Content */}
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-admin" role="tab" aria-controls="home">Admin</a>
              <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
              <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-directory" role="tab" aria-controls="profile">Directory</a>
              <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-document" role="tab" aria-controls="messages">Document</a>
              <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-tasks" role="tab" aria-controls="settings">Task</a>
              <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-report" role="tab" aria-controls="settings">Reports</a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-admin" role="tabpanel" aria-labelledby="list-home-list"><Defaults /><Dates /><Roles /></div>
              <div className="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-profile-list">This is Home</div>
              <div className="tab-pane fade" id="list-directory" role="tabpanel" aria-labelledby="list-messages-list"><Users /></div>
              <div className="tab-pane fade" id="list-document" role="tabpanel" aria-labelledby="list-settings-list">
                <h5>This is document</h5>
                <a href="/document" className="btn btn-primary"> Go To a Document</a>
              </div>
              <div className="tab-pane fade" id="list-tasks" role="tabpanel" aria-labelledby="list-settings-list">
                <h5>Tasks</h5><hr/>
                <a href="/tasksconfiguration" className="btn btn-outline-primary"> Task Tool Configuration</a>
                <a href="/managetasks" className="btn btn-outline-primary"> Manage Tasks</a>
              </div>
              <div className="tab-pane fade" id="list-report" role="tabpanel" aria-labelledby="list-settings-list">This is report</div>
            </div>
          </div>
          
        </div>
       
      </div>
    );
  }
}
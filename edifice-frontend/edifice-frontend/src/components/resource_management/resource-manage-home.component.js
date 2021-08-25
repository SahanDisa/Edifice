import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UserService from "./../../services/user.service";
import ProjectDataService from "./../../services/project.service";

import Card from 'react-bootstrap/Card';
import ResourceCard from "./resource-manage-cards";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      content: "",
      id: this.props.match.params.id
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
    this.retrieveProjects(this.state.id);
  }
  retrieveProjects(id) {
    ProjectDataService.get(id)
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
    const {id,projects} = this.state;
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
                <Card.Title><h4>{projects.title}</h4></Card.Title>
                <Card.Text>
                <h6>Description : {projects.description}</h6>
                <h6>Location: {projects.location}</h6> 
                </Card.Text>
              </Card.Body>
            </Card> </div></div>
            <ResourceCard id= {id}/>
      </div>
    );
  }
}
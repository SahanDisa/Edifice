import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UserService from "./../../services/user.service";
import ProjectDataService from "./../../services/project.service";


import budgetIcon from "././../../assets/FM/budget.png";
import primecontractsIcon from "././../../assets/FM/primecontract.png";
import costIcon from "././../../assets/FM/cost.png";
import invoiceIcon from "././../../assets/FM/invoice.png";
import commitmentsIcon from "././../../assets/FM/commitments.png";


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
        <header className="jumbotron">

          <h3>Financial Management Tools</h3>
          <p>Port City: Apartment Section 01</p>
          <p>Location: Colombo 01</p>
          <p>Project Id : {id}</p>
          <div className="row">
            <div className="col-6">
            <h3>Financial Management Tools</h3>
            </div>
            <div className="col-6">
              <h5>Title : {projects.title}</h5>
              <p>Description : {projects.description}</p>
              <p>Location: {projects.location}</p>  
            </div>
            </div>

        </header>

        <div className="row">
        <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="d-block nav-heading text-center mt-2 mb-2 card card-hover shadow-sm">
              <Link
                to={"/budget/" + id}
              
              >
                <img src={budgetIcon} alt="" width="50"/><br />
                <h3 className="h5 nav-heading-title mb-0">Budget</h3>
                <span className="fs-sm fw-normal text-muted">Set up and manage a comprehensive budget throughout the lifecycle of a project.</span>
              </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/prime-contracts">
                <img src={primecontractsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Prime Contracts</h3>
                <span className="fs-sm fw-normal text-muted">Easily create and manage contracts with the clients.</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/direct-costs">
                <img src={costIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Direct Costs</h3>
                <span className="fs-sm fw-normal text-muted">Track all direct costs that are not associated with commitments.</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" data-toggle="modal" data-target="#meetingModal" href="/commitments">
              <img src={commitmentsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Commitments</h3>                
                <span className="fs-sm fw-normal text-muted">Allows seeing the status and current value of all contracts and purchase orders.</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <Link className="d-block nav-heading text-center mt-2 mb-2" to={"/invoicing/" + id}>
                <img src={invoiceIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Invoicing</h3>
                <span className="fs-sm fw-normal text-muted">Streamline the invoice collection, review, and approval process on all of the projects</span>
              </Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
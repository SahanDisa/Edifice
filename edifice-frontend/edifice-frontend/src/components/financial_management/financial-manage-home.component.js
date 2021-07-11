import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UserService from "./../../services/user.service";
import ProjectDataService from "./../../services/project.service";

import portfolioIcon from "././../../assets/portfolio.png";
import rfiIcon from "././../../assets/rfi.png";
import dailylogIcon from "././../../assets/dailylog.png";
import meetingIcon from "././../../assets/meeting.png";
import biddingIcon from "././../../assets/bidding.png";
import actionplanIcon from "././../../assets/actionplan.png";
import drawingsIcon from "././../../assets/drawings.png";
import photosIcon from "././../../assets/photos.png";
import punchlistIcon from "././../../assets/punchlist.png";
import documentIcon from "././../../assets/documents.png";

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
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/budget">
                <img src={portfolioIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Budget</h3>
                <span className="fs-sm fw-normal text-muted">View the high-level overview and details of the project</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/prime-contracts">
                <img src={rfiIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Prime Contracts</h3>
                <span className="fs-sm fw-normal text-muted">Help to run the project smoothly and on schedule</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/direct-costs">
                <img src={dailylogIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Direct Costs</h3>
                <span className="fs-sm fw-normal text-muted">Keep track of every detail at job site each and everyday</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" data-toggle="modal" data-target="#meetingModal" href="/commitments">
                <img src={meetingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Commitments</h3>                
                <span className="fs-sm fw-normal text-muted">Manage all aspects of your project meetings from agenda distribution</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="d-block nav-heading text-center card card-hover shadow-sm">
              <Link
                to={"/invoicing/" + id}
              
              >
                <img src={biddingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Invoicing</h3>
                <span className="fs-sm fw-normal text-muted">Manage all the bid packages and bidding proceses</span>
                
              </Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
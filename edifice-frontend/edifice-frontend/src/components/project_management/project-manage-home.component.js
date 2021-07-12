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
import Card from 'react-bootstrap/Card';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      projects: [],
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
              bg={'primary'}
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
            </Card> 
        </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/portfolio" style={{ 'text-decoration': 'none' }}>
                <img src={portfolioIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Portfolio</h3>

                <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span>


                <span className="fs-sm fw-normal text-muted">Contains the abstract project detail specification</span>

              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/rfi" style={{ 'text-decoration': 'none' }}>
                <img src={rfiIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">RFI</h3>
                <span className="fs-sm fw-normal text-muted">Help to run the project smoothly and on schedule</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/dailylog" style={{ 'text-decoration': 'none' }}>
                <img src={dailylogIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Daily Log</h3>
                <span className="fs-sm fw-normal text-muted">Keep track of every detail at job site each and everyday</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" data-toggle="modal" data-target="#meetingModal" href="#" style={{ 'text-decoration': 'none' }}>
                <img src={meetingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Meetings</h3>                
                <span className="fs-sm fw-normal text-muted">Manage all aspects of your project meetings from agenda distribution</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">

              <div className="d-block nav-heading text-center mt-2 mb-2 card card-hover shadow-sm">
              <Link style={{ 'text-decoration': 'none' }}
                to={"/bidding/" + id}
              >
                <img src={biddingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Biddings</h3>
                <span className="fs-sm fw-normal text-muted">Manage all the bid packages and bidding proceses</span>
                
              </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/actionplan" style={{ 'text-decoration': 'none' }}>
                <img src={actionplanIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Action Plan</h3>
                <span className="fs-sm fw-normal text-muted">Clearly defined, centralized, and organized the project-specific requirements</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <Link className="d-block nav-heading text-center mt-2 mb-2" to={"/drawing/" + id}>
                <img src={drawingsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Drawings</h3>
                <span className="fs-sm fw-normal text-muted">Manage your project drawings in one place</span>
              </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/photos" style={{ 'text-decoration': 'none' }}>
                <img src={photosIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Photos</h3>
                <span className="fs-sm fw-normal text-muted">Manage and capture all the images</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/punchlist" style={{ 'text-decoration': 'none' }}>
                <img src={punchlistIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Punch List</h3>
                <span className="fs-sm fw-normal text-muted">Manage punch items</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/document" style={{ 'text-decoration': 'none' }}>
                <img src={documentIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Documents</h3>
                <span className="fs-sm fw-normal text-muted">Manage documents</span>
              </a>
              </div>
            </div>
          </div>

          {/* Metting Model Starts */}
          <div className="modal fade" id="meetingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Choose what you want to do?</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <a href="/meetingsconfiguration" className="btn btn-primary ml-5 mr-3"> Meeting Configuration</a>
                  <a href="/managemeetings" className="btn btn-primary mr-6"> Manage Meetings</a>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* Metting Model Ends */}

      </div>
    );
  }
}
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserService from "./../../services/user.service";

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
          <h3>Project Management Tools</h3>
          <p>Port City: Apartment Section 01</p>
          <p>Location: Colombo 01</p>
        </header>
        <div className="row">
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="#">
                <img src={portfolioIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Portfolio</h3>
                <span className="fs-sm fw-normal text-muted">View the high-level overview and details of the project</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/rfi">
                <img src={rfiIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">RFI</h3>
                <span className="fs-sm fw-normal text-muted">Help to run the project smoothly and on schedule</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/dailylog">
                <img src={dailylogIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Daily Log</h3>
                <span className="fs-sm fw-normal text-muted">Keep track of every detail at job site each and everyday</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" data-toggle="modal" data-target="#meetingModal" href="#">
                <img src={meetingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Meetings</h3>                
                <span className="fs-sm fw-normal text-muted">Manage all aspects of your project meetings from agenda distribution</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/bidding">
                <img src={biddingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Biddings</h3>
                <span className="fs-sm fw-normal text-muted">Manage all the bid packages realted to a project</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/actionplan">
                <img src={actionplanIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Action Plan</h3>
                <span className="fs-sm fw-normal text-muted">Clearly defined, centralized, and organized the project-specific requirements</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/drawing">
                <img src={drawingsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Drawings</h3>
                <span className="fs-sm fw-normal text-muted">Manage your project drawings in one place</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/photos">
                <img src={photosIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Photos</h3>
                <span className="fs-sm fw-normal text-muted">Manage and capture all the images</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/punchlist">
                <img src={punchlistIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Punch List</h3>
                <span className="fs-sm fw-normal text-muted">Manage punch items</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/document">
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
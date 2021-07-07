import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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

import MeetingsConfig from "./meetings/configuration.component";
import ManageMeetings from "./meetings/manage.component";
import DrawingHome from "./drawings/drawings.component";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    const {id} = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Project Management Tools</h3>
          <p>Port City: Apartment Section 01</p>
          <p>Location: Colombo 01</p>
          <p>Id : {id}</p>
        </header>

        <div className="row">
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="#">
                <img src={portfolioIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Portfolio</h3>
                <span className="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="#">
                <img src={rfiIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">RFI</h3>
                <span className="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="#">
                <img src={dailylogIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Daily Log</h3>
                <span className="fs-sm fw-normal text-muted">Small Detail</span>
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
              <div className="d-block nav-heading text-center card card-hover shadow-sm">
              <Link
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
              <a className="d-block nav-heading text-center mt-2 mb-2" href="#">
                <img src={actionplanIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Action Plan</h3>
                <span className="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="d-block nav-heading text-center mt-2 mb-2 card card-hover shadow-sm">
              <Link
                to={"/drawing/" + id}
              
              >
                <img src={drawingsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Drawings</h3>
                <span className="fs-sm fw-normal text-muted">Manage your project drawings in one place</span>
              </Link>
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
              <a className="d-block nav-heading text-center mt-2 mb-2" href="#">
                <img src={punchlistIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Punch List</h3>
                <span className="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm">
              <a className="d-block nav-heading text-center mt-2 mb-2" href="/document">
                <img src={documentIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Documents</h3>
                <span className="fs-sm fw-normal text-muted">Manage Docs</span>
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

          <div>
            <Switch>
              <Route path="/meetingsconfiguration" component={MeetingsConfig} />
              <Route path="/managemeetings" component={ManageMeetings} />
              <Route path="/drawing" component={DrawingHome} />
            </Switch>
          </div>
      </div>
    );
  }
}
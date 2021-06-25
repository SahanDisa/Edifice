import React, { Component } from "react";
import portfolioIcon from "././../assets/portfolio.png";
import rfiIcon from "././../assets/rfi.png";
import dailylogIcon from "././../assets/dailylog.png";
import meetingIcon from "././../assets/meeting.png";
import biddingIcon from "././../assets/bidding.png";
import actionplanIcon from "././../assets/actionplan.png";
import drawingsIcon from "././../assets/drawings.png";
import photosIcon from "././../assets/photos.png";
import punchlistIcon from "././../assets/punchlist.png";
import UserService from "./../services/user.service";

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
          <h3>Project Management</h3>
        </header>
        <div class="row">
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{portfolioIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Portfolio</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{rfiIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">RFI</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{dailylogIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Daily Log</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{meetingIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Meetings</h3>                
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{biddingIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Biddings</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{actionplanIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Action Plan</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{drawingsIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Drawings</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{photosIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Photos</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
              <a class="d-block nav-heading text-center" href="#">
                <div class="card card-hover border-0 shadow-lg mb-4">
                  <img className="card-img" src="{punchlistIcon}" alt="" width="50" height="50"/>
                </div>
                <h3 class="h5 nav-heading-title mb-0">Punch List</h3>
                <span class="fs-sm fw-normal text-muted">Small Detail</span>
              </a>
            </div>
          </div>
      </div>
    );
  }
}
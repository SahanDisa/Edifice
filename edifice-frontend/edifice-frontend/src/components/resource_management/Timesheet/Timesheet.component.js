import React, { Component } from 'react';

import Create from "./create.component";
import Approve from "./approve.component";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import TimesheetDataService from "./../../../services/timesheet.service";

class Timesheet extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.retrieveTimesheet = this.retrieveTimesheet.bind(this);

    this.state = {
      name: "",
      timesheets: [],
      searchTitle: "",
      users: [],
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.retrieveTimesheet(this.props.match.params.id);
  }

  retrieveTimesheet(id) {
    TimesheetDataService.getAll(id)
      .then(response => {
        this.setState({
          timesheets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  searchTitle() {
    TimesheetDataService.findByDate(this.state.searchTitle)
      .then(response => {
        this.setState({
          timesheets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { id, timesheets, searchTitle } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col" >
            <h2>TIMESHEET</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">
                Home
              </Link>
              <Link color="inherit" to={"/projectmanagementhome/" + id}>
                App Dashboard
              </Link>
              <Link color="textPrimary" to={"/timesheet/" + id} aria-current="page">
                Timesheet
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <hr />
        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.searchTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-right">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#createNew">
                Create New
              </button>
            </div>
          </div>
        </div>
        <br />

        {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}
        <div className="modal fade" id="createNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <Create projectId={id} />
        </div>
        {/*-------------------------------------Add Emp Ends----------------------------------------------------------------------*/}
        <hr />

        {timesheets && timesheets.map((timesheet, index) => (

          <div className="card" key={timesheet.id}>
            <div className="card-header">

              <div className=" container">
                <div className="row">
                  <div class="col-6">
                    <p>Id: {timesheet.id}</p>
                    <h5 >Date: {timesheet.date}</h5>

                    {timesheet.status == "Pending" ?
                      <p>🔴 Not Approved</p> : <p>🟢 Approved by {timesheet.username}</p>}
                  </div>
                  <div className="col-6 text-right">
                    <Link
                      className="btn btn-primary mt-5"
                      to={"/viewTimesheet/" + id + "/" + timesheet.id}>
                      Manage
                    </Link>
                  </div>

                </div>
              </div>

            </div>
            {/*------------------------------------ approve timesheet Starts------------------------------------------------------------------ */}
            <div className="modal fade" id="approve" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <Approve />
            </div>
            {/*-------------------------------------approve timesheet  Ends----------------------------------------------------------------------*/}
            {/*------------------------------------ Add worker Starts------------------------------------------------------------------ */}
            <div className="modal fade" id="selectCrew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

            </div>
            {/*-------------------------------------Add worker Ends----------------------------------------------------------------------*/}
          </div>
        ))}

      </div>

    );
  }
}

export default Timesheet;
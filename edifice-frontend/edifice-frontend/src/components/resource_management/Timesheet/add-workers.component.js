import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";

import CrewDataService from "../../../services/crew.service";
import WorkersDataService from "../../../services/worker.service";
import WorkedHoursDataService from "./../../../services/worked-hours.service";

class Workers extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.retrieveCrew = this.retrieveCrew.bind(this);
    this.retrieveWorkers = this.retrieveWorkers.bind(this);
    this.setActiveWorker = this.setActiveWorker.bind(this);
    this.addWorker = this.addWorker.bind(this);
    this.state = {
      crews: [],
      workers: [],
      currentWorker: "",
      currentIndex: -1,
      content: "",
      searchTitle: "",
      isOpen: false,
      id: this.props.match.params.id,
      code: this.props.match.params.code
    };

  }

  componentDidMount() {
    this.retrieveCrew(this.props.match.params.id);
    this.retrieveWorkers(this.props.match.params.id);
  }

  retrieveCrew(id) {
    CrewDataService.getAll(id)
      .then(response => {
        this.setState({
          crews: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveWorkers(id) {
    WorkersDataService.getAll(id)
      .then(response => {
        this.setState({
          workers: response.data
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
    CrewDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          crews: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActiveWorker(worker, index) {
    this.setState({
      currentWorker: worker,
      currentIndex: index
    });
    this.addWorker()
  }

  addWorker(wId) {
    var data = {
      workerId: wId,
      timesheetId: this.state.code,
    };
    console.log(data)
    console.log("heloooooooooooooooooooo")


    WorkedHoursDataService.create(data)
      .then(response => {
        this.setState({
          workerId: response.data.workerId,
          timesheetId: response.data.timesheetId,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { crews, id, workers, searchTitle, code, currentWorker, currentIndex } = this.state;

    return (
      <div>
        <h2>Add workers to the timesheet</h2>
        <hr />
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search crew"
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
        </div>
        <br />

        <div>
          <h5 className="m-3">Select crew</h5>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">

              <div class="accordion" id="accordionExample">

                {crews && crews.map((crew, index) => (
                  <div class="card" key={crew.id}>
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">

                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">{crew.name}</button>

                      </h2>
                    </div>
                    <div id={`collapse${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="">

                          <Table responsive>
                            <thead>
                              <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {workers &&
                                workers.map((worker) => (
                                  worker.crewId === crew.id ?
                                    <tr
                                      key={worker.crewId}
                                    >
                                      <td>{worker.wId}</td>
                                      <td>{worker.firstName} {worker.lastName}</td>
                                      <td>

                                        <button
                                          className="btn btn-primary"
                                          onClick={() => this.addWorker(worker.wId)}
                                        >
                                          + Add
                                        </button>
                                      </td>
                                    </tr> : ""
                                ))}
                            </tbody>
                            {/*Ends */}
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <Link
              className="btn btn-primary mt-3"
              to={"/viewTimesheet/" + id + "/" + code}>
              Back
            </Link>
          </div>

        </div>
      </div>

    );
  }
}

export default Workers;






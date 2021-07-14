import React, { Component } from 'react';

class Timesheet extends Component {
    render() {
        return (
          
          <div>
            <div className="jumbotron">
              <h2>Schedule</h2>
              <a href="/customize" className="btn btn-primary mr-3"> Add New task</a>
            </div>

            <div>
              <h2>Today</h2>


            </div>
            <div className="row">
                    <div className="col-2">
                      <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-Gantt Chart-list" data-toggle="list" href="#list-Gantt Chart" role="tab" aria-controls="Gantt Chart">Gantt Chart</a>
                        <a className="list-group-item list-group-item-action" id="list-Month-list" data-toggle="list" href="#list-Month" role="tab" aria-controls="Month">Month</a>
                        <a className="list-group-item list-group-item-action" id="list-Week-list" data-toggle="list" href="#list-Week" role="tab" aria-controls="Week">Week</a>
                      </div>
                    </div>

                    {/* Equipment content */}
                    <div className="col-10">
                      <div className="tab-content" id="nav-tabContent">

                        {/*Gantt Chart */}
                        <div className="tab-pane fade" id="list-Gantt Chart" role="tabpanel" aria-labelledby="list-Gantt Chart-list">
                            <h5>Gantt Chart</h5>
                        </div>

                        {/* Month */}
                        <div className="tab-pane fade" id="list-Month" role="tabpanel" aria-labelledby="list-Month-list">
                          <h5>Months</h5>
                        </div>

                        {/*Week */}
                        <div className="tab-pane fade" id="list-Week" role="tabpanel" aria-labelledby="list-Week-list">
                        <h5>Week</h5>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
          
        );
      }
    }

export default Timesheet;
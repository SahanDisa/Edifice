import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import AddWorker from './add-worker.component';
import EditWorker from './edit-worker.component';
import ViewWorker from './view-worker.component';
import newCrew from './new-crew.component';

const data = [
  {edit: <a href="#" className="btn btn-outline-primary" data-toggle="modal" data-target="#editWorker">edit</a>,view:<a href="#" className="btn btn-outline-primary" data-toggle="modal" data-target="#viewWorker">View</a>}
];

const columns = [
   {
    dataField: 'overview',
    text: 'Meeting Overview',
    headerStyle: (column, colIndex) => {
    return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'date',
    text: 'Meeting Date',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'time',
    text: 'Time',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'location',
    text: 'location',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'status',
    text: 'Status',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'items',
    text: 'Number of Items',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'extra',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },{
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'view',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  },
];

class Crew extends Component {

    render() {
      return (
        <div>
            <h2>Crew</h2><hr/>
            <div>
            
                <div class="tab-content" id="myTabContent">
              
                    <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">
                        
                        <form>
                            <div className="form-row mt-3">
                                <div class="col-md-12 text-right">
                                    <a href="#" className="btn btn-outline-primary"  data-toggle="modal" data-target="#newCrew">+ New Crew</a>
                                </div>
                                <div className="form-group col-md-4">
                                    <input className="form-control" type="text" placeholder="Search" />
                                </div>
                                <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
                            </div>
                        </form>

                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Concrete Crew</button>
                                        <span class="badge bg-primary rounded-pill">14</span>
                                    </h2>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
                                            <div class="col-md-12 text-right mb-2">
                                                <a href="#" className="btn btn-outline-primary" data-toggle="modal" data-target="#addWorker">+ Add Worker</a>
                                            </div>
                                            <BootstrapTable 
                                                hover
                                                keyField='location'
                                                data={ data }
                                                columns={ columns } 
                                                cellEdit={ false }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Welder</button>
                                        <span class="badge bg-primary rounded-pill">5</span>
                                    </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className="">
                                            <div class="col-md-12 text-right mb-2">
                                            <a href="#" className="btn btn-outline-primary" data-toggle="modal" data-target="#addWorker">+ Add Worker</a>
                                            </div>
                                            <BootstrapTable 
                                                hover
                                                keyField='location'
                                                data={ data }
                                                columns={ columns } 
                                                cellEdit={ false }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    
                </div>

            </div>

            {/* Add Worker Starts */}
            <div className="modal fade" id="addWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <AddWorker/>        
            </div>
          {/* Add Worker Ends */}

          {/* Edit Worker Starts */}
          <div className="modal fade" id="editWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <EditWorker/>        
          </div>
          {/* Edit Worker Ends */}

          {/* View Worker Starts */}
          <div className="modal fade" id="viewWorker" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <ViewWorker/>        
          </div>
          {/* View Worker Ends */}

          {/* New Crew Starts */}
            <div className="modal fade" id="newCrew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <AddWorker/>        
          </div>
          {/* New Crew Ends */}

        </div>

      );
    }
    
  }

export default Crew;
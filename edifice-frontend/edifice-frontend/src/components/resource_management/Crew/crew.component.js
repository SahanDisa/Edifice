import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
  {edit: <a href="/managesmeetings/update" className="btn btn-outline-success">Edit</a>,view:<a href="/managesmeetings/view" className="btn btn-outline-primary">View</a>}
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
                                    <a href="#" className="btn btn-outline-primary">+ New Crew</a>
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
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add New Worker</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                    <div>

                        <label htmlFor="">First Name</label>
                        <input className="form-control" type="text" required/>
                        <br/>

                        <label htmlFor="">Last Name</label>
                        <input className="form-control" type="text" required/>
                        <br/>

                        <label htmlFor="">Id</label>
                        <input className="form-control" type="text" required/>
                        <br/>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-success">Add</button>
                </div>
              </div>
            </div>
          </div>
          {/* Add Worker Ends */}

        </div>

      );
    }
    
  }

export default Crew;
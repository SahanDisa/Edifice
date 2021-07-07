import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
  {edit: <a href="/managesmeetings/update" className="btn btn-outline-success">Edit</a>, view:<a href="/managesmeetings/view" className="btn btn-outline-primary">View</a>}
];
const columns = [
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'view',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
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
  }];

class ManageMeetings extends Component {

    render() {
      return (
        <div className="">
          <h2>Manage Meetings</h2><hr/>
          <div>
            
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" id="allmeetings" data-toggle="tab" href="#status" aria-controls="status" aria-selected="true">All Meetings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="recyclebin" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">Recycle Bin</a>
              </li>
            </ul>
            
            <div class="tab-content" id="myTabContent">
              
              <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">
                
                <form>
                  <div className="form-row mt-3">
                    <div class="col-md-12 text-right">
                      <a href="#" className="btn btn-outline-primary">+ Create Meeting</a>
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
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Weekly OAC Metting</button>
                      </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="">
                          <div class="col-md-12 text-right mb-2">
                            <a href="#" className="btn btn-outline-primary">+ Follow-up Meeting</a>
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
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">2nd category</button>
                      </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="">
                          <div class="col-md-12 text-right mb-2">
                            <a href="#" className="btn btn-outline-primary">+ Follow-up Meeting</a>
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
                <div>
                  <div class="col-md-12 text-left mt-3 mb-3">
                    <a href="/meetingsconfiguration" className="btn btn-outline-success">+ Add Category</a>
                  </div>
                </div>
              </div>
              
              <div class="tab-pane fade" id="comment" role="tabpanel" aria-labelledby="recyclebin">
                
              </div>

            </div>

          </div>
        </div>
      );
    }
    
  }

export default ManageMeetings;
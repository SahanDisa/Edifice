import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {view:<a href="#" className="btn btn-success">View</a>, No: 1, name: 'Action plan #1', time:'2 weeks', delete:<a href="#" className="btn btn-danger">Delete</a>},
    {view:<a href="#" className="btn btn-success">View</a>, No: 2, name: 'Action plan #2', time:'1 month',  delete:<a href="#" className="btn btn-danger">Delete</a>}
  ];
  const columns = [
  {
    dataField: 'view',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },{
    dataField: 'No',
    text: 'No',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }, {
    dataField: 'description',
    text: 'Description',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'time',
    text: 'Time Duration',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'delete',
    text: 'Delete',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

class ActionPlan extends Component {

  render() {
    return (
      <div className="">
        <h2>Action Plan</h2><hr/>
        <h5>Add new Action Plan</h5>
        <form action="">
          <div className="form-row">
              <div className="form-group col-md-2">
                  <label htmlFor="">Name</label>
                  <input className="form-control" type="text" required/>
              </div>
              <div className="form-group col-md-4">
                  <label htmlFor="">Description</label>
                  <input className="form-control" type="text" required/>
              </div>
              <div className="form-group col-md-4">
                  <label htmlFor="">Time duration</label>
                  <input className="form-control" type="text" required/>
              </div>
              <div className="form-group col-md-2">
              <label htmlFor="">.</label>
              <a href="#" className="btn btn-success mr-3">Create</a>
              <a href="#" className="mt-1">Clear</a>
              </div>
          </div>
        </form>
        <hr />
        <h5>Action Plans</h5>
        {/* <div className="form-row mt-3">
          <div className="form-group col-md-4">
            <input className="form-control" type="text" />
          </div>
          <a href="#" className="btn btn-dark mb-3 mr-3">Search</a>
          <a href="#" className="mt-1">Clear</a>
        </div> */}
        <div>
          <BootstrapTable 
            hover
            keyField='No'
            data={ data }
            columns={ columns } 
            cellEdit={ false }
          />
        </div>
      </div>
    );
  }
  
}

export default ActionPlan;
import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {edit:<a href="#" className="btn btn-success">Edit</a>, No: 1, name: 'Weekly OAC Meeting', description:'bla bla bla bla bla bla bla bla bla', delete:<a href="#" className="btn btn-outline-danger">Delete</a>},
    {edit:<a href="#" className="btn btn-success">Edit</a>, No: 2, name: '2nd Category', description:'bla bla bla bla bla bla bla bla bla', delete:<a href="#" className="btn btn-outline-danger">Delete</a>}
  ];
  const columns = [
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
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
    dataField: 'delete',
    text: 'Delete',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

class MeetingConfiguration extends Component {

  render() {
    return (
      <div className="">
        <h2>Meeting Configuration</h2><hr/>
        <h5>Add a new Meeting Category</h5>
        <form action="">
          <div className="form-row">
              <div className="form-group col-md-3">
                  <label htmlFor="">Category Name</label>
                  <input className="form-control" type="text" required/>
              </div>
              <div className="form-group col-md-6">
                  <label htmlFor="">Description</label>
                  <input className="form-control" type="text" required/>
              </div>
              <div className="form-group col-md-3">
              <label htmlFor="">.</label>
              <a href="#" className="btn btn-success mr-3">Create</a>
              <a href="#" className="mt-1">Clear</a>
              </div>
          </div>
        </form>
        <hr />
        <h5>Meeting Categories</h5>
        <div className="form-row mt-3">
          <div className="form-group col-md-4">
            <input className="form-control" type="text" />
          </div>
          <a href="#" className="btn btn-dark mb-3 mr-3">Search</a>
          <a href="#" className="mt-1">Clear</a>
        </div>
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

export default MeetingConfiguration;
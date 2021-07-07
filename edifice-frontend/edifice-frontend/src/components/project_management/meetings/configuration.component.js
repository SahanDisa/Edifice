import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {edit:<a href="#" className="btn btn-outline-success">Edit</a>, No: 1, name: 'Weekly OAC Meeting', description:'bla bla bla bla bla bla bla bla bla', delete:<a href="#" className="btn btn-outline-danger">Delete</a>},
    {edit:<a href="#" className="btn btn-outline-success">Edit</a>, No: 2, name: '2nd Category', description:'bla bla bla bla bla bla bla bla bla', delete:<a href="#" className="btn btn-outline-danger">Delete</a>}
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
        <h5>Meeting Categories</h5>
        <form className="row g-3">
          <div className="col-auto">
            <input className="form-control" type="text" placeholder="Enter meeting category"/>  
          </div>
          <div className="col-auto">
            <a href="" className="btn btn-success">Create</a>
          </div>
        </form>
        <hr />
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
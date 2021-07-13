import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {edit:<a href="/addCategory" className="btn btn-success">Edit</a>, view:<a href="/viewCategory" className="btn btn-primary">View</a>, No: 1, name: 'Bidding', active:<input type="checkbox"></input>, delete:<a href="/deleteCategory" className="btn btn-danger">Delete</a>},
    {edit:<a href="/addCategory" className="btn btn-success">Edit</a>, view:<a href="/viewCategory" className="btn btn-primary">View</a>, No: 2, name: 'ABC Company', active:<input type="checkbox"></input>, delete:<a href="/deleteCategory" className="btn btn-danger">Delete</a>},
    {edit:<a href="/addCategory" className="btn btn-success">Edit</a>, view:<a href="/viewCategory" className="btn btn-primary">View</a>, No: 3, name: 'Contracts', active:<input type="checkbox"></input>, delete:<a href="/deleteCategory" className="btn btn-danger">Delete</a>}
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
    dataField: 'No',
    text: 'No',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'active',
    text: 'Active',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: 'Delete',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

class TaskConfiguration extends Component {

  render() {
    return (
      <div className="">
        <h2>Task Tool Configuration</h2><hr/>
        <h5>Task Categories</h5>
        <form className="row g-3">
          <div className="col-auto">
            <input className="form-control" type="text" placeholder="Enter new task category"/>  
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

export default TaskConfiguration;
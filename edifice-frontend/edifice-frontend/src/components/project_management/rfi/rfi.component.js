import React, { Component, Route, Switch } from "react";
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
  {edit:<a href="/managerfi/edit" className="btn btn-outline-success">Edit</a>, view:<a href="/managerfi/view" className="btn btn-outline-primary">View</a>}
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
    dataField: 'no',
    text: 'No',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'subject',
    text: 'Subject',
    headerStyle: (column, colIndex) => {
    return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'status',
    text: 'Status',
    headerStyle: (column, colIndex) => {
    return { width: '5%', textAlign: 'center' };}
  },{
    dataField: 'rc',
    text: 'Responsible Contractor',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'rf',
    text: 'Recieved From',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'date',
    text: 'Initialized Date',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
    dataField: 'manager',
    text: 'RFI manager',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

  class rfiHome extends Component {

  render() {
    return (
      <div className="">
        <h2>RFI</h2><hr/>
        <form>
          <div className="form-row mt-3">
            <div class="col-md-12 text-right">
              <a href="/managerfi/create" className="btn btn-outline-primary">+ Create RFI</a>
            </div>
            <div className="form-group col-md-4">
              <input className="form-control" type="text" placeholder="Search" />
            </div>
            <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
          </div>
        </form>
        <div className="">
          <BootstrapTable 
            hover
            keyField='rc'
            data={ data }
            columns={ columns } 
            cellEdit={ false }
          />
        </div>
      </div>
    );
  }
  
}

export default rfiHome;
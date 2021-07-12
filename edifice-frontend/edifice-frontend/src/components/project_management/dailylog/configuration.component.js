import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import CreateCategory from './createcat.component';

const data = [
    {edit: <a href="/dailylogsconfiguration/update" className="btn btn-success">Edit</a>, view:<a href="/dailylogsconfiguration/view" className="btn btn-primary">View</a>, delete: <a href="/dailylogsconfiguration/delete" className="btn btn-outline-danger">Delete</a>}
  ];
const columns = [
    {
      dataField: 'edit',
      text: '',
      headerStyle: (column, colIndex) => {
          return { width: '5%', textAlign: 'center' };}
    }, {
      dataField: 'category',
      text: 'Category',
      headerStyle: (column, colIndex) => {
      return { width: '20%', textAlign: 'center' };}
    }, {
      dataField: 'description',
      text: 'Description',
      headerStyle: (column, colIndex) => {
          return { width: '25%', textAlign: 'center' };}
    }, {
      dataField: 'titles',
      text: 'Titles',
      headerStyle: (column, colIndex) => {
      return { width: '45%', textAlign: 'center' };}
    }, {
      dataField: 'delete',
      text: '',
      headerStyle: (column, colIndex) => {
      return { width: '5%', textAlign: 'center' };}
    }
];

class DlConfiguration extends Component {

  render() {
    return (
      <div className="">
        <h2>Daily Log Configuration</h2><hr/>
        <form>
          <div className="form-row mb-3">
            <div class="col-md-12 text-right">
              <a data-toggle="modal" data-target="#CreateCategory" href="#" className="btn btn-primary">+ Create a Category</a>
            </div>
          </div>
        </form>
        <div>
          <BootstrapTable 
            hover
            keyField='temp'
            data={ data }
            columns={ columns } 
            cellEdit={ false }
          />
        </div>
        
        {/* Create Category Starts */}
        <div className="modal fade" id="CreateCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <CreateCategory/>        
        </div>
        {/* Create Category Ends */}

      </div>
    );
  }
  
}

export default DlConfiguration;
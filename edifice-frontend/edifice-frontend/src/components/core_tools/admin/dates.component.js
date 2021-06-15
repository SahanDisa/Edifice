import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {id: 1, name: 'Bid Day', check:'' ,delete:''},
    {id: 2, name: 'Breaking Ground', check: '',delete:''},
    {id: 3, name: 'Contract Awarded', check: '',delete:''}
  ];
  const columns = [{
    dataField: 'id',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '70%', textAlign: 'center' };}
  }, {
    dataField: 'check',
    text: 'Add to Project Dashboard',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: 'Remove',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }];


class Dates extends Component {
    render() {
        return (
          <div className="Dates">
            <p className="Table-header">Dates</p>
             
            <BootstrapTable 
        striped
        hover
        keyField='id'
        keyField='id'
        data={ data }
        columns={ columns } 
        />
          </div>
        );
      }
    }

export default Dates;
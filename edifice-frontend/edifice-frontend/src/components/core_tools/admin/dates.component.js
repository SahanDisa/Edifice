import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

const options = {
    page: 1,
    sizePerPage: 5,
    nextPageText: '>',
    prePageText: '<',
    showTotal: true
  };

const data = [
    {id: 1, name: 'Bid Day', check:<input type='checkbox' /> ,delete:''},
    {id: 2, name: 'Breaking Ground', check: <input type='checkbox' />,delete:''},
    {id: 3, name: 'Contract Awarded', check: <input type='checkbox' />,delete:''}
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
            <h2 className="Table-header">Dates</h2>
            <hr />
             
            <BootstrapTable 
                hover
                keyField='id'
                data={ data }
                columns={ columns } 
                pagination={ paginationFactory(options) }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
 
            />
          </div>
        );
      }
    }

export default Dates;
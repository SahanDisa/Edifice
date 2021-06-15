import React, { Component } from 'react'
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
    {name: 'Bidding', bid:'' ,project:'',delete:''},
    {name: 'Course of Construction', bid:'' ,project:'',delete:''},
    {name: 'Post Construction', bid:'' ,project:'',delete:''}
  ];
  const columns = [{
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '60%', textAlign: 'center' };}
  }, {
    dataField: 'bid',
    text: 'Bidding Stage?',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'center' };}
  }, {
    dataField: 'project',
    text: 'Projects',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }];


class Defaults extends Component {
    render() {
        return (
          <div className="Defaults">
            <h2 className="Table-header">Defaults</h2>
            <hr />
            <p><b>Default Project Settings</b></p>
            <hr />
            <p>Include store number and designated market area</p>
            <hr />
            <p>Prevent overbilling on all projects</p>
            <hr />
            <p></p>
            <hr />
            {/*<Form>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Include store number and designated market area" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Prevent overbilling on all projects" />
                </Form.Group>
            </Form>*/}

            <p><b>Project Stages</b></p>
           
             
            <BootstrapTable 
                hover
                keyField='id'
                data={ data }
                columns={ columns } 
                pagination={ paginationFactory(options) }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
 
            />

            <p><b>Project Types</b></p>
            <p>Civil</p>
            <hr />
            <p>Commercial</p>
            <hr />
            <p>Education</p>
            <hr />
            <p>Healthcare</p>
            <hr />


          </div>
        );
      }
    }

export default Defaults;
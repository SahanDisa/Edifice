import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const data = [
    {id: 1, name: 'randie pathirage',role:'', edit:<a href="/addUser" className="btn btn-primary"> edit</a>},
    {id: 2, name: 'abc liyanage', role:'',  edit:<a href="/addUser" className="btn btn-primary"> edit</a>},
    {id: 3, name: 'abc liyanage', role:'',  edit:<a href="/addUser" className="btn btn-primary">edit</a>},
    {id: 4, name: 'abc liyanage', role:'',  edit:<a href="/addUser" className="btn btn-primary"> edit</a>},
    {id: 5, name: 'abc liyanage', role:'',  edit:<a href="/addUser" className="btn btn-primary"> edit</a>},
    {id: 6, name: 'jhk kumara',role:'',  edit:<a href="/addUser" className="btn btn-primary"> edit</a>}
  ];
  const columns = [{
    dataField: 'id',
    text: 'Id',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '70%', textAlign: 'center' };}
  }, {
    dataField: 'role',
    text: 'Role',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: '',
    text: 'Email',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: 'Mobile',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }];


class Users extends Component {
    render() {
        return (
          <div>


          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
          </ul>








            <h2>Employees</h2>
            <a href="/addUser" className="btn btn-primary"> +add employee</a>
            <hr />
             
            <BootstrapTable 
                hover
                keyField='id'
                data={ data }
                columns={ columns } 
                cellEdit={ false }
 
            />
          </div>
        );
      }
    }

export default Users;
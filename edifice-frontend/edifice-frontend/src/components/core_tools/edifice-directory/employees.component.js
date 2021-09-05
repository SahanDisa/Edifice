import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const data = [
    {id: 1, name: 'randie pathirage',role:'Engineer',email:'cat@gmail.com',mobile:'0215448990', edit:<a href="/editUser" className="btn btn-primary"> edit</a>, delete:<a href="/deleteUser" className="btn btn-danger"> Delete</a>},
    {id: 2, name: 'Osumali Liyanage', role:'Project Manager',email:'cat@gmail.com',mobile:'0215448990',  edit:<a href="/editUser" className="btn btn-primary"> edit</a>, delete:<a href="/deleteUser" className="btn btn-danger"> Delete</a>},
    {id: 3, name: 'Shanuka Fernando', role:'Project Manager',email:'cat@gmail.com',mobile:'0215448990',  edit:<a href="/editUser" className="btn btn-primary">edit</a>, delete:<a href="/deleteUser" className="btn btn-danger"> Delete</a>},
    {id: 4, name: 'Sahan Dissanayaka', role:'Quanttity Surveyor',email:'cat@gmail.com',mobile:'0215448990',  edit:<a href="/editUser" className="btn btn-primary"> edit</a>, delete:<a href="/deleteUser" className="btn btn-danger"> Delete</a>},
    {id: 5, name: 'Buddhika Ranasinghe', role:'Engineer',email:'cat@gmail.com',mobile:'0215448990',  edit:<a href="/editUser" className="btn btn-primary"> edit</a>, delete:<a href="/deleteUser" className="btn btn-danger"> Delete</a>},
    {id: 6, name: 'Malithya Fernando',role:'Administrator',email:'cat@gmail.com',mobile:'0215448990',  edit:<a href="/editUser" className="btn btn-primary"> edit</a>, delete:<a href="/deleteUser" className="btn btn-danger"> Delete</a>}
  ];
  const columns = [{
    dataField: 'id',
    text: 'Id',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '22%', textAlign: 'center' };}
  }, {
    dataField: 'role',
    text: 'Role',
    headerStyle: (column, colIndex) => {
        return { width: '18%', textAlign: 'center' };}
  },
  {
    dataField: 'email',
    text: 'Email',
    headerStyle: (column, colIndex) => {
        return { width: '18%', textAlign: 'center' };}
  },
  {
    dataField: 'mobile',
    text: 'Mobile',
    headerStyle: (column, colIndex) => {
        return { width: '13%', textAlign: 'center' };}
  },
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }  
];


class Emp extends Component {
    render() {
        return (
          <div>
          
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Employees</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/vendor">Vendors</a>
              </li>
            </ul>

            <h2>Employees</h2>

            <form className="row g-3">
              <div className="col-auto">
                <input className="form-control" type="text" placeholder="Search employee"/>  
              </div>

              <div className="col-auto">
                <a href="" className="btn btn-success">search</a>
              </div>

              <p>Group By:</p>

              <div className="col-auto">
                <select className="form-control" name="" id="">
                  <option value="role1">civil engineer</option>
                  <option value="role2">Project manager</option>
                  <option value="role3">Site supervisor</option>
                </select><br />
              </div>

              <div>
                <a href="/addUser" className="btn btn-primary"> +add employee</a>
              </div>
            </form>

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

export default Emp;
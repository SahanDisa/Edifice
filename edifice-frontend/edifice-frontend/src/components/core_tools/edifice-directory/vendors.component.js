import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const data = [
    {id: 1, companyName: 'pathirage',type:'', edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
    {id: 2, companyName: 'liyanage', type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
    {id: 3, companyName: 'abliyanage', type:'',  edit:<a href="/editVendor" className="btn btn-primary">edit</a>},
    {id: 4, companyName: 'ldgrefiyanage', type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
    {id: 5, companyName: 'rte', type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
    {id: 6, companyName: 'conctr',type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
    {id: 7, companyName: 'conctr',type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>}
  ];
  const columns = [{
    dataField: 'id',
    text: 'Id',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'companyName',
    text: 'Company Name',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }, {
    dataField: 'type',
    text: 'Type',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: '',
    text: 'Contact No',
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
    dataField: '',
    text: 'contact person name',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  },
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }];


class Vendors extends Component {
    render() {
        return (
          <div>
          
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" href="/employees">Employees</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Vendors</a>
              </li>
            </ul>

            <h2>Vendors</h2>

            <form className="row g-3">
              <div className="col-auto">
                <input className="form-control" type="text" placeholder="Search vendor"/>  
              </div>

              <div className="col-auto">
                <a href="" className="btn btn-success">search</a>
              </div>

              <p>Group By:</p>

              <div className="col-auto">
                <select className="form-control" name="" id="">
                  <option value="role1">date</option>
                  <option value="role2">Projects</option>
                  <option value="role3">contact</option>
                </select><br />
              </div>

              <div>
                <a href="/addVendor" className="btn btn-primary"> +add vendor</a>
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

export default Vendors;
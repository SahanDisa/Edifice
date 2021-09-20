import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from "react-router-dom";
import cellEditFactory from 'react-bootstrap-table2-editor';
import EmployeeDataService from "./../../../services/employee.service";

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
        return { width: '8%', textAlign: 'center' };}
  },
  {
    dataField: 'create',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'center' };}
  }  
];


class Employee extends Component {

  constructor(props) {
    super(props);
    this.getEmployees = this.getEmployees.bind(this);
    console.log(this.getEmployee);
    this.state = {
      currentEmployee: {
        employees: [],
        currentEmployee: null,
        currentId: -1,
        searchName: ""
        
      },
      message: "",
      temp: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.getEmployees(this.props.match.params.id);
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  refreshList() {
    this.getEmployees();
    this.setState({
      currentEmployeet: null,
      currentIndex: -1,
      searchName: ""
    });
  }

  getEmployees() {
    EmployeeDataService.getAll()
      .then(response => {
        this.setState({
          employees: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    //console.log("meka hadala daamu")
  }

  render() {

    const {employees, currentEmployee, currentIndex } = this.state;

    //assigning table values
    var data1=[];
    var temp={};
    {employees &&
      employees.map((employee, index) => (
        temp={},
        temp.id=employee.id,
        temp.name= employee.name,
        temp.role=employee.role,
        temp.email=employee.email,
        temp.mobile=employee.mobile,
        temp.edit=<Link to={"/editUser/"+temp.id}> <a className="btn btn-primary">edit</a></Link>,
        employee.hasAccount? temp.create=<p></p> : temp.create=<Link to={"/register/"+temp.id} ><a className="btn btn-secondary"> Create Acc.</a></Link>,
        data1.push(temp)
      )
      )}

    //console.log(employees);
      return (
        <div>
        
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Employees</a>
            </li>
            <li class="nav-item">
              <Link to={"/vendor"}><a class="nav-link">Vendors</a></Link>
            </li>
            <li class="nav-item">
              <Link to={"/subcontractor"}><a class="nav-link">Sub-Contractors</a></Link>
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
                <option value="role1">Civil engineer</option>
                <option value="role2">Project manager</option>
                <option value="role3">Site supervisor</option>
              </select><br />
            </div>

            <div>
              <Link to={"/addUser"}><a className="btn btn-primary"> +add employee</a></Link>
            </div>
          </form>

          <hr />
            
          <BootstrapTable 
                hover
                keyField='id'
                data={ data1 }
                columns={ columns } 
                cellEdit={ false }

          />
        </div>
      );
    }
  }

export default Employee;
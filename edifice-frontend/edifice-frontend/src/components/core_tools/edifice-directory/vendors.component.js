import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import VendorDataService from "./../../../services/vendor.service";

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
        return { width: '30%', textAlign: 'center' };}
  },
  {
    dataField: '',
    text: 'Contact No',
    headerStyle: (column, colIndex) => {
        return { width: '40%', textAlign: 'center' };}
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
  
  constructor(props) {
    super(props);
    this.getVendors = this.getVendors.bind(this);
    console.log(this.getVendor);
    this.state = {
      currentVendor: {
        vendors: [],
        currentVendor: null,
        currentId: -1,
        
      },
      message: "",
      temp: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.getVendors(this.props.match.params.id);
  }

  refreshList() {
    this.getVendors();
    this.setState({
      currentProject: null,
      currentIndex: -1
    });
  }

  getVendors() {
    VendorDataService.getAll()
      .then(response => {
        this.setState({
          vendors: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveVendors(id){
    VendorDataService.getAll(id)
    .then(response => {
        this.setState({
          vendors: response.data
        });
        console.log(response.data.length);
      })
      .catch(e => {
        console.log(e);
      });
}
  render() {

    const {vendors, currentVendor, currentIndex } = this.state;

    //assigning table values
    var data1=[];
    var temp={};
    {vendors &&
      vendors.map((vendor, index) => (
        //data1=vendor,
        temp.id=vendor.id,
        temp.companyName= vendor.companyName,
        temp.type=vendor.type,
        temp.contactNo=vendor.contactNo,
        temp.email=vendor.email,
        temp.contactPersonName=vendor.contactPersonName,
        data1.push(temp)
      )
      )}
    console.log(vendors);
    
    const data = [
      {id: 1, companyName: 'pathirage',type:'', edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
      {id: 2, companyName: 'liyanage', type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
      {id: 3, companyName: 'abliyanage', type:'',  edit:<a href="/editVendor" className="btn btn-primary">edit</a>},
      {id: 4, companyName: 'ldgrefiyanage', type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
      {id: 5, companyName: 'rte', type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
      {id: 6, companyName: 'conctr',type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>},
      {id: 7, companyName: 'conctr',type:'',  edit:<a href="/editVendor" className="btn btn-primary"> edit</a>}
    ];

    return (
      <div>
        
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" href="/employees">Employees</a>
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
        <table>
          <th>

          </th>
        </table>  
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

export default Vendors;
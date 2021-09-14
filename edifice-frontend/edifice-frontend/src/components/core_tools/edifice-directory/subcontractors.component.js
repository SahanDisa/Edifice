import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
//import VendorDataService from "./../../../services/vendor.service";

  const columns = [{
    dataField: 'id',
    text: 'Id',
    headerStyle: (column, colIndex) => {
        return { width: '5%', textAlign: 'center' };}
  }, {
    dataField: 'companyName',
    text: 'Company Name',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'left' };}
  }, {
    dataField: 'type',
    text: 'Type',
    headerStyle: (column, colIndex) => {
        return { width: '12%', textAlign: 'center' };}
  },
  {
    dataField: 'contactNo',
    text: 'Contact No',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'center' };}
  },
  {
  dataField: 'email',
  text: 'Email',
  headerStyle: (column, colIndex) => {
      return { width: '20%', textAlign: 'center',  };}
  },
  {
    dataField: 'contactPersonName',
    text: 'contact person name',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }];


class Subcontractors extends Component {
  
  constructor(props) {
    super(props);
    this.getSubs = this.getSubs.bind(this);
    //console.log(this.getsub);
    this.state = {
      currentSub: {
        subs: [],
        currentSub: null,
        currentId: -1,
        searchName: ""
        
      },
      message: "",
      temp: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.getSubs(this.props.match.params.id);
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  refreshList() {
    this.getSubs();
    this.setState({
      currentSub: null,
      currentIndex: -1,
      searchName: ""
    });
  }

  getgetSubs() {
    console.log("thaama hadana gaman");
  }

  searchName() {
    console.log("thaama hadana gaman");
  }
  render() {

    const {subs, currentSub, currentIndex } = this.state;

    //assigning table values
    // var data1=[];
    // var temp={};
    // {subs &&
    //   vendors.map((vendor, index) => (
    //     temp={},
    //     temp.id=vendor.id,
    //     temp.companyName= vendor.companyName,
    //     temp.type=vendor.type,
    //     temp.contactNo=vendor.contactNo,
    //     temp.email=vendor.email,
    //     temp.contactPersonName=vendor.contactPersonName,
    //     temp.edit=<a href={'/editVendor/'+vendor.id} className="btn btn-primary"> edit</a>,
    //     data1.push(temp)
    //   )
    //   )}
    //console.log(vendors);
    
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
            <a class="nav-link" aria-current="page" href="/vendor">Vendors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/#">Sub-Contractors</a>
          </li>
        </ul>

        <h2>Sub-contractors</h2>

        <form className="row g-3">
          <div className="col-auto">
            <input className="form-control" type="text" placeholder="Search Sub-contractor"/>  
          </div>

          <div className="col-auto">
            <a href="" className="btn btn-success">Search</a>
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
            <a href="/addVendor" className="btn btn-primary"> +add Sub-contractor</a>
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
              data={ data }
              columns={ columns } 
              cellEdit={ false }

        />
      </div>
    );
  }
}

export default Subcontractors;
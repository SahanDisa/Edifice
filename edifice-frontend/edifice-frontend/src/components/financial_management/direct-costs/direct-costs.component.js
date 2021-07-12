//import Sidebar from "../sidebar";
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {edit:<a href="/direct-costs/edit" className="btn btn-outline-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-outline-primary">View</a>, date: "05/04/17", vendor:"Pacific Gas", type:"Expense", invoice:"C001",status:"Approved",ammount:"$1,250.00",receivedDate:"",paidDate:"",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-outline-success">Delete</a>},
    {edit:<a href="/direct-costs/edit" className="btn btn-outline-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-outline-primary">View</a>, date: "05/04/17", vendor:"Pacific Gas", type:"Expense", invoice:"C001",status:"Approved",ammount:"$1,250.00",receivedDate:"",paidDate:"",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-outline-success">Delete</a>},
    {edit:<a href="/direct-costs/edit" className="btn btn-outline-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-outline-primary">View</a>, date: "05/04/17", vendor:"Pacific Gas", type:"Expense", invoice:"C001",status:"Approved",ammount:"$1,250.00",receivedDate:"",paidDate:"",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-outline-success">Delete</a>},
    {edit:<a href="/direct-costs/edit" className="btn btn-outline-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-outline-primary">View</a>, date: "05/04/17", vendor:"Pacific Gas", type:"Expense", invoice:"C001",status:"Approved",ammount:"$1,250.00",receivedDate:"",paidDate:"",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-outline-success">Delete</a>}
  ];
  const columns = [
    {
      dataField: 'edit',
      text: '',
      headerStyle: (column, colIndex) => {
          return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'view',
      text: '',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'date',
      text: 'Date',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'vendor',
      text: 'Vendor',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'type',
      text: 'Type',
      headerStyle: (column, colIndex) => {
      return { width: '50%', textAlign: 'center' };}
    },{
      dataField: 'invoice',
      text: 'Invoice #',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'status',
      text: 'Status',
      headerStyle: (column, colIndex) => {
          return { width: '50%', textAlign: 'center' };}
    }, {
      dataField: 'ammount',
      text: 'Ammount',
      headerStyle: (column, colIndex) => {
          return { width: '7%', textAlign: 'center' };}
    },
    {
      dataField: 'receivedDate',
      text: 'Received Date',
      headerStyle: (column, colIndex) => {
          return { width: '7%', textAlign: 'center' };}
    },
    {
        dataField: 'paidDate',
        text: 'Paid Date',
        headerStyle: (column, colIndex) => {
            return { width: '7%', textAlign: 'center' };}
      },
      {
        dataField: 'blank',
        text: '',
        headerStyle: (column, colIndex) => {
            return { width: '7%', textAlign: 'center' };}
      },
      {
        dataField: 'delete',
        text: '',
        headerStyle: (column, colIndex) => {
            return { width: '7%', textAlign: 'center' };}
      }
];
  


const DirectCosts = () => {

    return (
        <div>
       <h3> DIRECT COSTS </h3><hr/>
        <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Summary</a>
            </li>
          </ul><br />
         
          <a href="/create-direct-costs" className="btn btn-outline-primary"> New Direct Cost</a><br /><br />
          <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Export
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">.xsl</a></li>
    <li><a href="#">csv</a></li>
    <li><a href="#">html</a></li>
  </ul>
</div><br />
          <div className="">
          <BootstrapTable 
            hover
            keyField='assignee'
            data={ data }
            columns={ columns } 
            cellEdit={ false }
          />
        </div>

        </div>
    );


}

export default DirectCosts;
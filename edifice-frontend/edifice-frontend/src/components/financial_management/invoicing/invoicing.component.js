import BootstrapTable from 'react-bootstrap-table-next';
import SettingsIcon from '@material-ui/icons/Settings';

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

const Invoicing = () => {

    return (
        <div>
          <div className="">
            <ul class="nav nav-tabs">
           <a href="/invoiceSettings"> <SettingsIcon /></a><h3 style={{paddingLeft: 10, paddingRight: 50}}> INVOICING</h3>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/invoicing">Owner</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/subcontractor">Sub Contractor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/billing-periods">Billing Periods</a>
            </li>
          </ul> <br /></div>
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

export default Invoicing;
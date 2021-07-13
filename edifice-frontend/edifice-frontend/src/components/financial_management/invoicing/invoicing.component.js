import BootstrapTable from 'react-bootstrap-table-next';
import SettingsIcon from '@material-ui/icons/Settings';

const data = [
  {edit:<a href="/direct-costs/edit" className="btn btn-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-primary">View</a>, date: "05/04/21", vendor:"Vertex Properties", type:"Expense", invoice:"C001",status:"Approved",ammount:"$1,250.00",receivedDate:"05/04/21",paidDate:"08/04/21",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-danger">Delete</a>},
  {edit:<a href="/direct-costs/edit" className="btn btn-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-primary">View</a>, date: "05/05/21", vendor:"Tesen Cement", type:"Expense", invoice:"C012",status:"Draft",ammount:"$1,250.00",receivedDate:"21/05/21",paidDate:"25/05/21",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-danger">Delete</a>},
  {edit:<a href="/direct-costs/edit" className="btn btn-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-primary">View</a>, date: "18/05/21", vendor:"Fusion", type:"Expense", invoice:"C020",status:"Approved",ammount:"$1,250.00",receivedDate:"18/05/21",paidDate:"20/05/21",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-danger">Delete</a>},
  {edit:<a href="/direct-costs/edit" className="btn btn-success">Edit</a>, view:<a href="/direct-costs/view" className="btn btn-primary">View</a>, date: "20/06/21", vendor:"Xavie", type:"Expense", invoice:"C002",status:"Approved",ammount:"$1,250.00",receivedDate:"20/06/21",paidDate:"24/06/21",blank:"",delete:<a href="/direct-costs/edit" className="btn btn-danger">Delete</a>}
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
           <a href="/invoiceSettings"></a><h3 style={{paddingLeft: 10, paddingRight: 50}}> INVOICING</h3>
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
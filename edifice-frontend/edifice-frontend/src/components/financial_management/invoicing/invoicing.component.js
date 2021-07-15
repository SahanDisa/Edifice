import { Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import SettingsIcon from '@material-ui/icons/Settings';

const data = [
  {checkbox: <input type="checkbox" />, commitment:<a href="#">SC-01-001</a>,  contractCompany:"Vertex Properties", billingPeriod: "15/07/2021-15/08/2021",invoiceStatus:<a href="#">Draft</a>, invoiceDates:"15/07/2021-15/08/2021",contractValue:"20,000",complete:"0.00%",currentPaymentDue:"0.00",paymentStatus:"Unpaid"},
  {checkbox: <input type="checkbox" />, commitment:<a href="#">SC-01-001</a>, contractCompany:"Vertex Properties",billingPeriod: "15/07/2021-15/08/2021", invoiceStatus:<a href="#">Under Review</a>, invoiceDates:"15/07/2021-15/08/2021",contractValue:"32,500",complete:"11.00%",currentPaymentDue:"0.00",paymentStatus:"Unpaid"},
  {checkbox: <input type="checkbox" />,  commitment:<a href="#">SC-01-001</a>,contractCompany:"Vertex Properties",billingPeriod: "15/07/2021-15/08/2021", invoiceStatus:<a href="#">Draft</a>, invoiceDates:"15/07/2021-15/08/2021",contractValue:"15,380",complete:"0.00%",currentPaymentDue:"0.00",paymentStatus:"Unpaid"},
  {checkbox: <input type="checkbox" />, commitment:<a href="#">SC-01-001</a>,contractCompany:"Vertex Properties",billingPeriod: "15/07/2021-15/08/2021", invoiceStatus:<a href="#">Under Review</a>, invoiceDates:"15/07/2021-15/08/2021",contractValue:"11,000",complete:"23.00%",currentPaymentDue:"0.00",paymentStatus:"Unpaid"},
  {checkbox: "", commitment:"Grand Total: ",contractCompany:"",billingPeriod: "", invoiceStatus:"", invoiceDates:"",contractValue:"",complete:"",currentPaymentDue:"",paymentStatus:"234,567"}
];
const columns = [
  {
    dataField: 'checkbox',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'commitment',
    text: 'Commitment',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'contractCompany',
    text: 'Contract Company',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'billingPeriod',
    text: 'Billing Period',
    headerStyle: (column, colIndex) => {
    return { width: '20%', textAlign: 'center' };}
  }, {
    dataField: 'invoiceStatus',
    text: 'Invoice Status',
    headerStyle: (column, colIndex) => {
    return { width: '30%', textAlign: 'center' };}
  },{
    dataField: 'invoiceDates',
    text: 'Invoice Dates',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'contractValue',
    text: 'Contract Value',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'complete',
    text: '% Complete',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
    dataField: 'currentPaymentDue',
    text: 'Current Payment Due',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
      dataField: 'paymentStatus',
      text: 'Payment Status',
      headerStyle: (column, colIndex) => {
          return { width: '7%', textAlign: 'center' };}
    }
];

const Invoicing = () => {

    return (
        <div>
          <div className="">
            <ul class="nav nav-tabs">
          <h3 style={{paddingLeft: 10, paddingRight: 50}}> INVOICING</h3>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/invoicing">Sub Contractor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/billing-periods">Billing Periods</a>
            </li>
          </ul> <br /></div>
          <div className="form-row mt-3">
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"/adddirectcost/"}>
                Export
                </Link>
                </div>
            <div className="form-group col-md-4">
                      <input className="form-control" type="text" placeholder="Search" />
                    </div>
                    <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
                    </div>
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
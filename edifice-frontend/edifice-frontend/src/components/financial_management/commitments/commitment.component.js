import React, { Component } from "react";
import { Link } from "react-router-dom";
//import CommitmentDataService from "./../../../services/commitment.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import BootstrapTable from 'react-bootstrap-table-next';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


//styles classes
const data = [
    {edit: <a href="/managesmeetings/update" className="btn btn-success">Edit</a>, view:<a href="/managesmeetings/view" className="btn btn-primary">View</a>}
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
      dataField: '#',
      text: '#',
      headerStyle: (column, colIndex) => {
      return { width: '50%', textAlign: 'center' };}
    }, {
      dataField: 'contractCompany',
      text: 'Contract Company',
      headerStyle: (column, colIndex) => {
          return { width: '10%', textAlign: 'center' };}
    }, {
      dataField: 'status',
      text: 'Status',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'executed',
      text: 'Executed',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'originalContractValue',
      text: 'Original Contract VAlue',
      headerStyle: (column, colIndex) => {
          return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'approvedCCO',
      text: 'Approved CCO',
      headerStyle: (column, colIndex) => {
      return { width: '7%', textAlign: 'center' };}
    }, {
      dataField: 'totalContractAmmount',
      text: 'Total Contract Ammount',
      headerStyle: (column, colIndex) => {
          return { width: '7%', textAlign: 'center' };}
    },{
    dataField: 'invoices',
    text: 'Invoices',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },{
    dataField: 'pendingCCOs',
    text: 'Pending CCOs',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },{
    dataField: 'draftCCOs',
    text: 'Draft CCOs',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
    dataField: 'totalPayments',
    text: 'Total Payments',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },  {
    dataField: 'totalRemaining',
    text: 'Total Remaining',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
    dataField: 'paid',
    text: 'Paid',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'signRequired',
    text: 'Sign Required',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },{
    dataField: 'pdf',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }
];


export default class Budget extends Component {
    /* will be useful when connnecting with backend
    constructor(props) {
      super(props);
      this.retrieveDirectCost = this.retrieveDirectCost.bind(this);
      this.state = {
        directcosts: [],
        columns: [{
            dataField: 'date',
            text: 'Date'
          },
          {
            dataField: 'vendor',
            text: 'Vendor'
          }, {
            dataField: 'type',
            text: 'Type',
          },
          {
            dataField: 'invoice',
            text: 'Invoice',
          },
          {
            dataField: 'status',
            text: 'Status',
          },
          {
            dataField: 'ammount',
            text: 'Ammount',
          },
          {
            dataField: 'receivedDate',
            text: 'Received Date',
          },
          {
            dataField: 'paidDate',
            text: 'Paid Date',
          }
        ],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
      };
    }

    // makeStyles((theme) => ({
    //     button: {
    //       margin: theme.spacing(1),
    //     },
    //   }));
  
    componentDidMount() {
      this.retrieveDirectCost(this.props.match.params.id);
    }
    retrieveDirectCost(id) {
      CommitmentDataService.getAll(id)
        .then(response => {
          this.setState({
            directcosts: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }*/
    
    render() {
        //const { directcosts ,currentIndex,id } = this.state;
        // const classes = useStyles();
        return (
            <div>
               <h3> COMMITMENTS</h3>
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"#"}>
                Export 
                </Link>
                <Link className="btn btn-primary mr-2" to={"/adddirectcost/"}>
                + Create PO
                </Link>
                <Link className="btn btn-primary mr-2" to={"/adddirectcost/"}>
                + Create Contract
                </Link>
            </div>
            <hr/>
            <div className="form-row mt-3">
            <div className="form-group col-md-4">
                      <input className="form-control" type="text" placeholder="Search" />
                    </div>
                    <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
                    </div>
                  <hr/>
            <div className="container">
                <h5>COMMITED - SUMMARY</h5>
                <BootstrapTable 
                            hover
                            keyField='location'
                            data={ data }
                            columns={ columns } 
                            cellEdit={ false }
                          />
            {/* Drawing List */}
           {/* <ul className="list-group">*/}
          {/*} <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.directcosts } 
        columns={ this.state.columns } />*/}
            </div> 
            </div>
        );
    }
}
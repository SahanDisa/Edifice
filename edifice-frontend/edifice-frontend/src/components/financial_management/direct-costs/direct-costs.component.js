import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectCostDataService from "./../../../services/directcost.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import BootstrapTable from 'react-bootstrap-table-next';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

//styles classes

export default class Budget extends Component {
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
      DirectCostDataService.getAll(id)
        .then(response => {
          this.setState({
            directcosts: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { directcosts ,currentIndex,id } = this.state;
        // const classes = useStyles();
        return (
            <div>
            <div className="jumbotron">
                <h2>Budget {id}</h2>
                <p>Set up and manage Direct Costs throughout the lifecycle of a project.</p>
            </div>
            <div className="container">
                <h4>Add Budget Line Item</h4>
                <Link to={"/adddirectcost/"+id}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                </Link>
            </div>
            <div className="container">
                <h4>Direct Cost List</h4>
            {/* Drawing List */}
           {/* <ul className="list-group">*/}
           <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.directcosts } 
        columns={ this.state.columns } />
            </div> 
            </div>
        );
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BudgetDataService from "./../../../services/budget.service";
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
      this.retrieveBudget = this.retrieveBudget.bind(this);
      this.state = {
        budgets: [],
        columns: [{
            dataField: 'costCode',
            text: 'Cost Code',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'category',
            text: 'Category',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
           {
            dataField: 'originalBudget',
            text: 'Original Budget Amount',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
            
          },{
            dataField: 'budgetModifications',
            text: 'Budget Modifications',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'revisedBudget',
            text: 'Revised Budget',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },{
            dataField: 'projectedBudget',
            text: 'Projected Budget',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'commitedcosts',
            text: 'Commited Costs',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'directCosts',
            text: 'Direct Costs',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'projectedCosts',
            text: 'Projected Costs',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'forecastToComplete',
            text: 'Forecast To Complete',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          },
          {
            dataField: 'forecastToComplete',
            text: 'Forecast To Complete',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          }, {
            dataField: 'estimatedCostAtCompletion',
            text: 'Estimated Cost At Completion',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
          }, {
            dataField: 'projectedOverUnder',
            text: 'Projected Over Under',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
            },
          {
            dataField: 'delete',
            text: 'Remove',
            headerStyle: (column, colIndex) => {
              return { width: '6%', textAlign: 'center' };}
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
      this.retrieveBudget(this.props.match.params.id);
    }
    retrieveBudget(id) {
      BudgetDataService.getAll(id)
        .then(response => {
          this.setState({
            budgets: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { budgets ,currentIndex,id } = this.state;
        // const classes = useStyles();
        return (
            <div>
           
                <h3>BUDGET</h3>
                <p>Set up and manage a comprehensive budget throughout the lifecycle of a project.</p><hr />
                <div className="col-md-12 text-left">
                <Link className="btn btn-primary mr-2" to={"#"}>
                Export
                </Link>
                <Link className="btn btn-primary mr-2" to={"#"}>
                Import
                </Link>
                </div>
           <hr/>
           
          
            <div className="form-row mt-3">
            <div className="col-md-12 text-right">
                <Link className="btn btn-primary mr-2" to={"/addbudget/"+id}>
                + Create
                </Link>
                <Link className="btn btn-primary mr-2" to={"#"}>
                Snapshot
                </Link>
                <Link className="btn btn-primary mr-2" to={"/addbudget/"+id}>
                Lock
                </Link>
            </div>
            <div className="form-group col-md-4">
                      <input className="form-control" type="text" placeholder="Search" />
                    </div>
                    <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
                    </div>
                  <hr/>
            <div className="container">
                
           
           {/* <ul className="list-group">*/}
           <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.budgets } 
        columns={ this.state.columns } />
            </div> 
            </div>
        );
    }
}
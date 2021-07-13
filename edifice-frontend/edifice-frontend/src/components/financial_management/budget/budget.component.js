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
            text: 'Cost Code'
          },
          {
            dataField: 'category',
            text: 'Category'
          }, {
            dataField: 'originalBudget',
            text: 'Original Budget Amount',
          }],
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
            <div className="jumbotron">
                <h2>Budget {id}</h2>
                <p>Set up and manage a comprehensive budget throughout the lifecycle of a project.</p>
            </div>
            <div className="container">
                <h4>Add Budget Line Item</h4>
                <Link to={"/addbudget/"+id}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                </Link>
            </div>
            <div className="container">
                <h4>Budget List</h4>
            {/* Drawing List */}
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
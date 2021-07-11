import React, { Component } from "react";
import { Link } from "react-router-dom";
import BudgetDataService from "./../../../services/budget.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

//styles classes

export default class Budget extends Component {
    constructor(props) {
      super(props);
      this.retrieveBudget = this.retrieveBudget.bind(this);
      this.state = {
        budgets: [],
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
            <ul className="list-group">
            {budgets &&
                budgets.map((budget, index) => (
                <li
                    className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                    }
                    // onClick={() => this.setActiveProject(project, index)}
                    key={index}
                >
                    {budget.costCode}
                    <h6>{budget.category}</h6>
                    <p>{budget.originalBudget}</p>
                    {/* Button Group */}
                    <div>
                    <Link to={"/viewbudget/"+budget.id}>
                    <Button
                        variant="contained"
                        color="primary"
                        //className={classes.button}
                        endIcon={<VisibilityIcon/>}
                    >
                        View
                    </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="default"
                        //className={classes.button}
                        startIcon={<UpdateIcon />}
                    >
                        Update
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        //className={classes.button}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                    {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                    </div>
                </li>
                ))}
            </ul>
            </div> 
            </div>
        );
    }
}
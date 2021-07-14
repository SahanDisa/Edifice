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
            dataField: 'costCode',
            text: 'Cost Code'
          },
          {
            dataField: 'category',
            text: 'Category'
          }, {
            dataField: 'date',
            text: 'Date',
          },
          {
            dataField: 'ammount',
            text: 'Ammount',
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
               <h3> DIRECT COSTS</h3>
               <h6>Track all direct costs that are not associated with commitments.</h6>
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"#"+id}>
                Export 
                </Link>
                <Link className="btn btn-primary mr-2" to={"/adddirectcost/"+id}>
                + Create
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
                <h4>SUMMARY</h4>
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
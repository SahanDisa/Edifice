import React, { Component } from "react";
import { Link } from "react-router-dom";
import BiddingDataService from "./../../../services/bidding.service";

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';


export default class Bidding extends Component {
    constructor(props) {
      super(props);
      this.retrieveBidding = this.retrieveBidding.bind(this);
      this.state = {
        biddings: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
      };
    }
  
    componentDidMount() {
      this.retrieveBidding(this.props.match.params.id);
    }
    retrieveBidding(id) {
      BiddingDataService.getAll(id)
        .then(response => {
          this.setState({
            biddings: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { biddings ,currentIndex,id } = this.state;
        return (
            <div>
            <div className="jumbotron">
                <h2>Bidding {id}</h2>
                <p>Manage project related biddings here</p>
            </div>
            <div className="container">
                <h4>Add Packages</h4>
                <Link to={"/adddrawing/"+id}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                </Link>
            </div>
            <div className="container">
                <h4>Bid Package List</h4>
            {/* Drawing List */}
            <ul className="list-group">
            {biddings &&
                biddings.map((bidding, index) => (
                <li
                    className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                    }
                    // onClick={() => this.setActiveProject(project, index)}
                    key={index}
                >
                    {bidding.title}
                    <h6>{bidding.description}</h6>
                    <p>{bidding.status}</p>
                    <p>{bidding.dueDate}</p>
                    <p>{bidding.published}</p>
                    {/* Button group */}
                    <div>
                    <IconButton color="primary" aria-label="delete">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="delete">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    </div>
                </li>
                ))}
            </ul>
            </div> 
            </div>
        );
    }
}

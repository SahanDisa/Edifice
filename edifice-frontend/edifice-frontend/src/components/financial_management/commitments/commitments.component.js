import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import BootstrapTable from 'react-bootstrap-table-next';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


export default class Commitments extends Component {
    
    constructor(props) {
      super(props);
     
      this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
      this.retrieveCommitment = this.retrieveCommitment.bind(this);
      this.refreshList = this.refreshList.bind(this);
      this.setActiveCommitment = this.setActiveCommitment.bind(this);
      this.searchTitle = this.searchTitle.bind(this);
      this.deleteCommitment = this.deleteCommitment.bind(this);
    
      this.state = {
        commitments: [],
        currentCommitment: null,
        currentIndex: -1,
        content: "",
        searchTitle: "",

        id: this.props.match.params.id
      };
    }

    // makeStyles((theme) => ({
    //     button: {
    //       margin: theme.spacing(1),
    //     },
    //   }));
  
    componentDidMount() {
      this.retrieveCommitment(this.props.match.params.id);
    }

    onChangeSearchTitle(e) {
      const searchTitle = e.target.value;
  
      this.setState({
        searchTitle: searchTitle
      });
    }

    retrieveCommitment(id) {
      CommitmentDataService.getAll(id)
        .then(response => {
          this.setState({
            commitments: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    refreshList() {
      this.retrieveCommitment();
      this.setState({
        currentCommitment: null,
        currentIndex: -1
      });
    }

    setActiveCommitment(commitment, index) {
      this.setState({
        currentCommitment: commitment,
        currentIndex: index
      });
    }

    searchTitle() {
      CommitmentDataService.findByTitle(this.state.searchTitle)
        .then(response => {
          this.setState({
            commitments: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    deleteCommitment() { 
      //this.getCommitment();
     
      CommitmentDataService.delete(this.state.id)
        .then(response => {
          console.log(response.data);
          //this.props.history.push('/commitment/'+this.state.projectId)
        })
        .catch(e => {
          console.log(e);
        });
    }

    getCommitment(id) {
      CommitmentDataService.get(id)
        .then(response => {
          this.setState({
            currentCommitment: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    
    render() {
        const { searchTitle, commitments ,currentCommitment, currentIndex,id } = this.state;
        // const classes = useStyles();
        return (
            <div>
               <div className="container row">
                <div className="col-12">
                <h2>COMMITMENTS</h2>
                <h6>See the Status and Value of all the Contracts.</h6>
                <hr />
                </div>
            </div>

            <div className="col-12 text-right">
                <Link className="btn btn-primary mr-2" to={"/addcommitment/"+id}>
                + Create New Commitment
                </Link>
            </div>

            <div className="col-12 text-left">
            <h5>Commited Contract Totals</h5><br></br>
            <h6>Total Contracts : Rs. 44,446,000.00<br /></h6>
            <h6>Payments Made : Rs. 44,446,000.00</h6><br />
            </div>

            <div className="container">
            <div className="form-row mt-3">
            <div className="form-group col-md-8 text-left">
                <h4>Commitments List</h4></div>
                <div className="form-group col-md-3 text-right">
                <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
                      
                      </div>
                    </div>
            {/* Drawing List */}
            <ul className="list-group">
            {commitments &&
                commitments.map((commitment, index) => (
                <div
                    className={
                    "list-group-item row" +
                    (index === currentIndex ? "active" : "")
                    }
                    //onClick={() => this.setActiveCommmitment(commitment, index)}
                    key={index}
                >
                <div className="row">
                <div className="col-10">
                <h6> {commitment.hash} - {commitment.title}</h6>
                    <h6>Contract Company : {commitment.contractCompany}</h6> 
                    <h6>Status :  {commitment.status}</h6>
                    {/* Button Group */}
                    <Link to={"/viewcommitment/"+commitment.id}>
                    <button className="btn btn-primary">View <VisibilityIcon/> </button>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        className="btn btn-primary"
                        endIcon={<VisibilityIcon/>}
                    >
                        View 
                    </Button>*/}
                    </Link>
                    <Link to={"/viewcommitment/"+commitment.id}>
                    <button className="btn btn-success m-2">Edit <UpdateIcon/> </button>
                    </Link>
                   
                    <button className="btn btn-danger" onClick={this.deleteCommitment}>Delete <DeleteIcon/> </button>
                    
                    
                </div>
                {/* <div className="col-2">
                <img src={drawingIcon} alt="" width="50"/>
                </div>     */}
                </div>    
                </div>
                ))}
            </ul>
            </div> 
            </div>
        );
    }
}
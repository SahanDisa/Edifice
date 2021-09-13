import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";
import SovDataService from "./../../../services/sov.service";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

export default class Commitments extends Component {
    
    constructor(props) {
      super(props);
     
      this.onChangeSearchContractCompany = this.onChangeSearchContractCompany.bind(this);
      this.retrieveCommitment = this.retrieveCommitment.bind(this);
      this.refreshList = this.refreshList.bind(this);
      this.setActiveCommitment = this.setActiveCommitment.bind(this);
      this.searchContractCompany  = this.searchContractCompany.bind(this);
      this.getOngoingCount=this.getOngoingCount.bind(this);
      this.getCompletedCount=this.getCompletedCount.bind(this);
      this.deleteCommitment = this.deleteCommitment.bind(this);
      this.calculateTotalSovs=this.calculateTotalSovs.bind(this);   
      this.state = {
        commitments: [],
        currentCommitment: null,
        currentIndex: -1,
        content: "",
        searchContractCompany : "",
        sovTotal:"",
        ongoingCount: 0,
        completedCount: 0,
        //ongoingStatus:"Ongoing 🔴",

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
      this.calculateTotalSovs(this.props.match.params.id);
      this.getOngoingCount();
      this.getCompletedCount();
    }

    onChangeSearchContractCompany (e) {
      const searchContractCompany  = e.target.value;
  
      this.setState({
        searchContractCompany : searchContractCompany 
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

    calculateTotalSovs(id){
 
      SovDataService.getTotalSovs(id)
      .then((response) => {
        this.setState({
         sovTotal: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
    }

    refreshList() {
      this.retrieveCommitment();
      //this.calculateTotalSovs();
      this.setState({
        currentCommitment: null,
        currentIndex: -1,
        //totalSov:"",
      });
    }

    setActiveCommitment(commitment, index) {
      this.setState({
        currentCommitment: commitment,
        currentIndex: index
      });
    }

    searchContractCompany () {
     
      CommitmentDataService.findByContractCompany (this.state.id, this.state.searchContractCompany )
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

    getOngoingCount() {
      const ongoingStatus ="Ongoing 🔴";
      CommitmentDataService.findByStatusOngoing(this.state.id,ongoingStatus)
        .then(response => {
          this.setState({
            ongoingCount: response.data.length
          });
          console.log(response.data.length);
        })
        .catch(e => {
          console.log(e);
        });
    }

    getCompletedCount() {
      const completedStatus ="Completed 🟢";
      CommitmentDataService.findByStatusCompleted(this.state.id,completedStatus)
        .then(response => {
          this.setState({
            completedCount: response.data.length
          });
          console.log(response.data.length);
        })
        .catch(e => {
          console.log(e);
        });
    }


    //not working:/
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
        const { searchContractCompany , commitments ,currentCommitment, currentIndex,id,sovTotal, ongoingCount,completedCount} = this.state;
        // const classes = useStyles();
        return (
            <div>
               <div className="container row">
                <div className="col-12">
                <h2>COMMITMENTS</h2>
                <h6>See the Status and Value of all the Sub-Contracts.</h6>
                <hr />
                </div>
            </div>

            <div className="col-12 text-right">
                <Link className="btn btn-primary mr-2" to={"/addcommitment/"+id}>
                + New Subcontract
                </Link>
            </div>
            <br />

            <div className="container row">
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Total Commited Cost</h3>
                <span className="fs-sm fw-normal text-muted">Rs. {sovTotal}</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Ongoing Subcontracts</h3>
                <span className="fs-sm fw-normal text-muted">{ongoingCount}</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Completed Subcontracts</h3>
                <span className="fs-sm fw-normal text-muted">{completedCount}</span>
              </div>
            </div>
            </div>

            <div className="container">
            <div className="form-row mt-3">
            <div className="form-group col-md-8 text-left">
                <h4>Subcontracts List</h4></div>
                <div className="col-md-4">
                <div className="input-group mb-3">
                <select
              id="contractCompany"
              className="form-control"
              placeholder="Search by Contract Company"
              value={searchContractCompany}
              onChange={this.onChangeSearchContractCompany}
            >
              <option  selected value="">All</option>
                <option>Chance Electric Company (Pvt) Ltd</option>
                <option>XYZ Company (Pvt) Ltd</option>
              </select>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchContractCompany}
              >
                Search
              </button>
            </div>
                      
                      </div></div>
                    </div>
            {/* Commitments List */}
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
                <h6> #{commitment.id} - {commitment.title}</h6>
                    <h6>Contract Company : {commitment.contractCompany}</h6> 
                    <h6>Status :  {commitment.status}</h6>
                    {/* Button Group 
                    <Link to={"/viewcommitment/"+commitment.id}>*/}
                     <Link to={"/editcommitment/"+commitment.id}>
                   View <VisibilityIcon/> 
                    </Link>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        className="btn btn-primary"
                        endIcon={<VisibilityIcon/>}
                    >
                        View 
                    </Button>
                    </Link>
                    <Link to={"/editcommitment/"+commitment.id}>
                    <button className="btn btn-success m-2">Edit <UpdateIcon/> </button>
                    </Link>
                   
                    <button className="btn btn-danger" onClick={this.deleteCommitment}>Delete <DeleteIcon/> </button>*/}
                    
                    
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
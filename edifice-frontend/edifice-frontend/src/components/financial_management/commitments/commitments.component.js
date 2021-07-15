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
      this.retrieveCommitment = this.retrieveCommitment.bind(this);
      this.state = {
        commitments: [],
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
      this.retrieveCommitment(this.props.match.params.id);
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
    
    render() {
        const { commitments ,currentIndex,id } = this.state;
        // const classes = useStyles();
        return (
            <div>
               <div className="container row">
            <div className="col-12">
            <h2>COMMITMENTS</h2>
            <h6>See the status and current value of contracts and purchase orders.</h6>
            <hr />
            </div>
           
            </div>
            <div className="col-12 text-right">
                
                <Link className="btn btn-primary mr-2" to={"/addcommitment/"+id}>
                Add New Commitment
                </Link>
            </div>


            <div className="container">
                <h4>Commitments List</h4>
            {/* Drawing List */}
            <ul className="list-group">
            {commitments &&
                commitments.map((commitment, index) => (
                <div
                    className={
                    "list-group-item row" +
                    (index === currentIndex ? "active" : "")
                    }
                    // onClick={() => this.setActiveProject(project, index)}
                    key={index}
                >
                <div className="row">
                <div className="col-10">
                <h6>Title : {commitment.title}</h6>
                    <h6>Contract Company :{commitment.contractCompany}</h6> 
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
                    <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                    </Link>
                    <Link to={"/viewcommitment/"+commitment.id}>
                    <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                    </Link>
                    
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
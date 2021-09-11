import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import PunchListTypesDataService from "../../../services/project_management/punchlisttypes.service.js";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

class PLTView extends Component {
    constructor(props) {
        super(props);
        this.retrievePLT = this.retrievePLT.bind(this);
        this.state = {
            id: this.props.match.params.pltid,
            projectId: this.props.match.params.id,
            punchlist: [],
            title: "",
            description: ""
        };
    }
  
    componentDidMount() {
        this.retrievePLT(this.props.match.params.pltid);
        this.retriveTypeInfo(this.props.match.params.pltid);
    }

    retriveTypeInfo(pltid){
        PunchListTypesDataService.getOne(pltid)
        .then(response => {
            this.setState({
                pltype: response.data
            });
        });
    }

    retrievePLT(pltid) {
        PunchlistDataService.getType(pltid)
        .then(response => {
            console.log("Category eke eewa gaththa");
            this.setState({
                plitems: response.data
            });
        });
    }

    render() {
        const { projectId, pltype, plitems } = this.state;
        return (
            <div>
              <h2>Punch List Type - {pltype.title}</h2>
              <p>{pltype.description}</p>
              <hr />
              <h6>Initiated - 🟡</h6>
              <h6>Work in Progress - 🟠</h6>
              <h6>Ready for Review - 🔵</h6>
              <h6>Work not accepted - 🔴</h6>
              <h6>Ready to close - 🟢</h6>
              <h3>Punch List Items</h3>
              {/* punchlist List */}
              <Table striped bordered hover variant="secondary" responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Assignee</th>
                  </tr>
                </thead>
                {/* Functional for table data */}
                <tbody>
                {plitems && plitems.map((pli, index) => (
                    <tr
                        // className={
                        // "list-group-item row" +
                        // (index === currentIndex ? "active" : "")
                        // }
                        // onClick={() => this.setActiveProject(project, index)}
                        key={index}
                    >
                    <td>{pli.no}</td>
                    <td>{pli.title}</td>
                    <td>{pli.description}</td>
                    <td>{pli.location}</td>
                    <td>{pli.duedate}</td>
                    <td>{
                        pli.status == "Initiated" ? "🟡":
                        pli.status == "WIP" ? "🟠":
                        pli.status == "RFR" ? "🔵":
                        pli.status == "WNA" ? "🔴": "🟢"
                    }</td>
                    <td>{pli.assignee}</td>
                    <td>
                        <Link to={"/viewpl/"+pli.no}>
                            <button className="btn btn-primary">View <VisibilityIcon/> </button>
                        </Link>
                        <Link to={"/updatepl/" + projectId + "/" + pli.no}>
                            <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                        </Link>
                        <Link to={"/deletepl/" + projectId + "/" + pli.no}>
                            <button className="btn btn-danger m-2">Delete <DeleteIcon/> </button>
                        </Link>
                    </td>    
                    </tr>
                    ))}
                </tbody>
                {/*Ends */}
              </Table>
             
            </div>
        );
    }
}

export default PLTView;
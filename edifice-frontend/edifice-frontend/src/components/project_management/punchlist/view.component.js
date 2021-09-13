import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import PunchListTypesDataService from "./../../../services/project_management/punchlisttypes.service.js";
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
            punchlist: [],
            title: "",
            description: "", 
            projectId: ""
        };
    }
  
    componentDidMount() {
        this.retrievePLT(this.props.match.params.pltid);
        this.retriveTypeInfo(this.props.match.params.pltid);
    }

    retriveTypeInfo(id){
        PunchListTypesDataService.getOne(id)
        .then(response => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                projectId: response.data.projectId,
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    retrievePLT(id) {
        PunchlistDataService.getType(id)
        .then(response => {
            console.log("Category eka gaththa");
            this.setState({
                punchlist: response.data
            });
            console.log(response.data);
            })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { id, title, description, punchlist } = this.state;
        return (
            <div>
              <h2>Punch List Type - {title}</h2>
              <p>{description}</p>
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
                {punchlist && punchlist.map((pli, index) => (
                    <tr
                        // className={
                        // "list-group-item row" +
                        // (index === currentIndex ? "active" : "")
                        // }
                        // onClick={() => this.setActiveProject(project, index)}
                        key={index}
                    >
                    <td>{pli.id}</td>
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
                        <Link to={"/viewpl/"+pli.id}>
                            <button className="btn btn-primary">View <VisibilityIcon/> </button>
                        </Link>
                        <Link to={"/updatepl/"+pli.id+"/"+id}>
                            <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                        </Link>
                        <Link to={"/deletepl/"+pli.id+"/"+id}>
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
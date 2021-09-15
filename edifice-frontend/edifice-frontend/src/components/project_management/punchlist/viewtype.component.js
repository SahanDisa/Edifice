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
            projectId: "",
            plitems: [],
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
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                projectId: response.data.projectId
            });
        });
    }

    retrievePLT(pltid) {
        PunchlistDataService.getType(pltid)
        .then(response => {
            this.setState({
                plitems: response.data
            });
        });
    }

    render() {
        const { projectId, id, title, description, plitems } = this.state;
        return (
            <div>
              <h2>Punch List Type - {title}</h2>
              <p>{description}</p>
              <hr />
              <h6>🟡 - Initiated</h6>
              <h6>🟠 - Work in Progress</h6>
              <h6>🔵 - Ready for Review</h6>
              <h6>🔴 - Work not accepted</h6>
              <h6>🟢 - Ready to close</h6>
              <hr/>
              <h3 className="mb-3">Punch List Items</h3>
              <Table striped bordered hover variant="" responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Due Date</th>
                    <th>Assignee</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
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
                        <td>{pli.assignee}</td>
                        <td>{
                            pli.status == "Initiated" ? "🟡":
                            pli.status == "WIP" ? "🟠":
                            pli.status == "RFR" ? "🔵":
                            pli.status == "WNA" ? "🔴": "🟢"
                        }</td>
                        <td>
                            <Link to={"/view/"+ pli.no}>
                                <button className="btn btn-success m-2">Update<UpdateIcon/></button>
                            </Link>
                            <Link to={"/deletepl/" + projectId + "/" + pli.no}>
                                <button className="btn btn-danger m-2">Delete<DeleteIcon/></button>
                            </Link>
                        </td>    
                    </tr>
                    ))}
                </tbody>
              </Table>
            </div>
        );
    }
}

export default PLTView;
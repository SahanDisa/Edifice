import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import PunchListTypesDataService from "../../../services/project_management/punchlisttypes.service.js";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

class PLIView extends Component {
    constructor(props) {
        super(props);
        this.retrivePLItemInfo = this.retrivePLItemInfo.bind(this);
        this.state = {
            no: this.props.match.params.pliid,
            title: "",
            description: "",
            location: "",
            status: "",
            duedate: "",
            type: "",
            projectId: ""
        };
    }
  
    componentDidMount() {
        this.retrivePLItemInfo(this.props.match.params.pltid);
    }

    retrivePLItemInfo(plid){
        PunchlistDataService.getOne(plid)
        .then(response => {
            this.setState({
                no: response.data.no,
                title: response.data.title,
                description: response.data.description,
                location: response.data.location,
                duedate: response.data.duedate,
                type: response.data.type,
                status: response.data.status,
                projectId: response.data.projectId,
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { no, title, description, location, type, status, duedate, projectId } = this.state;
        return (
            <div>
                <h2>Punch List Item - {title}</h2>
                <div className="container">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="">Title</label>
                            <input
                                className="form-control"
                                name="title"
                                value={title}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Status</label>
                            <input
                                className="form-control"
                                name="status"
                                type="text"
                                value={status}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="">Type</label>
                            <input
                                className="form-control"
                                name="type"
                                value={type}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Location</label>
                            <input
                                className="form-control"
                                name="location"
                                value={location}
                                type="text"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label htmlFor="">Description</label>
                            <input
                                className="form-control"
                                name="description"
                                value={description}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Due Date</label>
                            <input
                                className="form-control"
                                name="duedate"
                                value={duedate}
                                type="date"
                                min=""
                                readOnly
                            />
                        </div>
                    </div>
                    <hr />
                </div>            
            </div>
        );
    }
}

export default PLIView;
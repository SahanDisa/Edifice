import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

class PLIView extends Component {
    constructor(props) {
        super(props);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.retrivePLItemInfo = this.retrivePLItemInfo.bind(this);
        this.updatePunchList = this.updatePunchList.bind(this);
        this.deletePunchList = this.deletePunchList.bind(this);
        this.state = {
            plItem: {
                no: this.props.match.params.pliid,
                title: "",
                description: "",
                location: "",
                status: "",
                duedate: "",
                type: "",
                projectId: ""
            }
        };
    }
  
    componentDidMount() {
        this.retrivePLItemInfo(this.props.match.params.pliid);
    }

    retrivePLItemInfo(plid){
        PunchlistDataService.getOne(plid)
        .then(response => {
            this.setState({
                plItem: response.data
            });
        });
    }

    onChangeDuedate(e) {
        const duedate = e.target.value
        this.setState(function(prevState){
            return {
                plItem: {
                    ...prevState.plItem,
                    duedate: duedate
                }
            }
        });
    }

    onChangeLocation(e) {
        const location = e.target.value
        this.setState(function(prevState){
            return {
                plItem: {
                    ...prevState.plItem,
                    location: location
                }
            }
        });
    }

    onChangeDescription(e) {
        const description = e.target.value
        this.setState(function(prevState){
            return {
                plItem: {
                    ...prevState.plItem,
                    description: description
                }
            }
        });
    }

    updatePunchList(){
        var data = {
            description: this.state.plItem.description,
            duedate: this.state.plItem.duedate,
            location: this.state.plItem.location,
            projectId: this.state.plItem.projectId
        };

        PunchlistDataService.update(this.props.match.params.pliid, data)
        .then(response => {
            this.setState(prevState => ({
                plItem: {
                    ...prevState.plItem,
                }
            }));
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    deletePunchList(){
        PunchlistDataService.delete(this.props.match.params.code)
        .then(response => {
            console.log(response.data);
            //this.props.history.push('/equipments/1');
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { plItem, projectId } = this.state;
        return (
            <div>
                <h2>Punch List Item - {plItem.title}</h2>
                <div className="container">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="">Title</label>
                            <input
                                className="form-control"
                                name="title"
                                value={plItem.title}
                                onChange={this.onChangeTitle}
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
                                value={plItem.status}
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
                                value={plItem.type}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Location</label>
                            <input
                                className="form-control"
                                name="location"
                                value={plItem.location}
                                onChange={this.onChangeLocation}
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label htmlFor="">Description</label>
                            <input
                                className="form-control"
                                name="description"
                                value={plItem.description}
                                onChange={this.onChangeDescription}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Due Date</label>
                            <input
                                className="form-control"
                                name="duedate"
                                value={plItem.duedate}
                                onChange={this.onChangeDuedate}
                                type="date"
                                min=""
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <button
                        className="btn btn-primary mr-2"
                        onClick={this.updatePunchList}>Update</button>
                    <button
                        className="btn btn-danger mr-2"
                        onClick={this.deletePunchList}>Delete</button>
                    <a href="/punchlist" className="btn btn-success">Cancel</a>
                </div>            
            </div>
        );
    }
}

export default PLIView;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import cogoToast from 'cogo-toast';

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
                isDeleted: 0,
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
        this.props.history.push("/punchlist/"+ this.props.match.params.id);
        cogoToast.success("Punch List updated Successfully!", { position: 'top-right', heading: 'success' });
    }

    deletePunchList(){
        var data = {
            isDeleted: 1
        }
        PunchlistDataService.delete(this.props.match.params.pliid, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
        this.props.history.push("/punchlist/"+ this.props.match.params.id);
        cogoToast.success("Punch List Deleted Successfully!", { position: 'top-right', heading: 'success' });
    }
    
    render() {
        const { plItem } = this.state;
        return (
            <div>
                <h2>Punch List Item - {plItem.title}</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/" + plItem.projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/punchlist/" + plItem.projectId}>Punch List</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">View Punch List</Link>
                </Breadcrumbs>
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
                    <button className="btn btn-primary mr-2" id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
                    <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteModal" data-toggle="modal">Delete</button>
                    <Link to={"/punchlist/"+plItem.projectId} className="">Cancel</Link>
                </div>
                {/* Update modal Starts */}
                <div className="modal fade" id="promptModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to update</p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <a onClick={this.updatePunchList} className="btn btn-primary pr-3 ml-2 mr-3" data-dismiss="modal"> Yes, Update</a>
                            <a className="btn btn-secondary ml-6 mr-6 pl-3" data-dismiss="modal"> Cancel</a>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Update modal Ends */}

                {/* Delete modal Starts */}
                <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete?</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deletePunchList} data-dismiss="modal"> Yes, Delete</a>
                                <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delete modal Ends */}       
            </div>
        );
    }
}

export default PLIView;
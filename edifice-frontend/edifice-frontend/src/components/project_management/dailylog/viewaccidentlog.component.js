import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DLAccidentService from "../../../services/project_management/dlaccident.service";

class ViewDAL extends Component {
    constructor(props) {
        super(props);
        this.retrieveAccidentLog = this.retrieveAccidentLog.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeCrew = this.onChangeCrew.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updateAccidentLog = this.updateAccidentLog.bind(this);
        this.deleteAccidentLog = this.deleteAccidentLog.bind(this);

        this.state = {
            dlaccident: {
                id: this.props.match.params.dlid,
                date: "",
                time: "",
                crew: "",
                description: "",
                isDeleted: 0,
                projectId: this.props.match.params.id
            }
        };
    }

    componentDidMount() {
        this.retrieveAccidentLog(this.props.match.params.dlid);
    }

    retrieveAccidentLog(dlid){
        DLAccidentService.getOne(dlid)
        .then(response => {
            this.setState({
                dlaccident: response.data
            });
        });
    }

    onChangeDate(e) {
        const date= e.target.value
        this.setState(function(prevState){
            return {
                dlaccident: {
                    ...prevState.dlaccident,
                    date: date
                }
            }
        });
    }

    onChangeTime(e) {
        const time= e.target.value
        this.setState(function(prevState){
            return {
                dlaccident: {
                    ...prevState.dlaccident,
                    time: time
                }
            }
        });
    }

    onChangeCrew(e) {
        const crew= e.target.value
        this.setState(function(prevState){
            return {
                dlaccident: {
                    ...prevState.dlaccident,
                    crew: crew
                }
            }
        });
    }

    onChangeDescription(e) {
        const description= e.target.value
        this.setState(function(prevState){
            return {
                dlaccident: {
                    ...prevState.dlaccident,
                    description: description
                }
            }
        });
    }

    updateAccidentLog() {
        var data = {
            date: this.state.dlaccident.date,
            time: this.state.dlaccident.time,
            crew: this.state.dlaccident.crew,
            description: this.state.dlaccident.description,
            projectId: this.props.match.params.id
        };

        DLAccidentService.update(this.props.match.params.dlid, data)
        .then(response => {
            this.setState(prevState => ({
                dlaccident: {
                    ...prevState.dlaccident,
                }
            }));
        });
        window.location.reload();
    }

    deleteAccidentLog(){
        var data = {
            isDeleted: 1
        }
        DLAccidentService.update(this.props.match.params.dlid, data)
        .then(response => {
            console.log(response.data);
            this.props.history.push('/dailylogs/'+ this.props.match.params.id);
        })
    }
    
    render() {
        const {dlaccident} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>View Accident Log</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+dlaccident.projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/dailylogs/"+dlaccident.projectId}>Daily Log</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">View Accident Log</Link>
                </Breadcrumbs><hr/>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="">Date</label>
                            <input
                                className="form-control"
                                name="date"
                                value={dlaccident.date}
                                onChange={this.onChangeDate}
                                type="date"
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Time</label>
                            <input
                                className="form-control"
                                name="time"
                                type="time"
                                value={dlaccident.time}
                                onChange={this.onChangeTime}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Crew</label>
                            <input
                                className="form-control"
                                name="crew"
                                value={dlaccident.crew}
                                onChange={this.onChangeCrew}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="">Description</label>
                            <input
                                className="form-control"
                                name="description"
                                value={dlaccident.description}
                                onChange={this.onChangeDescription}
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary mr-2" id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
                    <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteModal" data-toggle="modal">Delete</button>
                    <Link to={"/dailylog/"+dlaccident.projectId} className="">Cancel</Link>
                </div>
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
                        <a onClick={this.updateAccidentLog} className="btn btn-primary pr-3 ml-2 mr-3" data-dismiss="modal"> Yes, Update</a>
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
                            <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteAccidentLog} data-dismiss="modal"> Yes, Delete</a>
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

export default ViewDAL;
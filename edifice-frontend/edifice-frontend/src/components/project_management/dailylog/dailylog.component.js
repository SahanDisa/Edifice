import React, { Component } from 'react';
import { Link } from "react-router-dom";

import DLAccidentService from "../../../services/project_management/dlaccident.service";
import DLCallService from "../../../services/project_management/dlcall.service";
import DLWeatherService from "../../../services/project_management/dlweather.service";
import DLGeneralService from "../../../services/project_management/dlgeneral.service";

import Table from 'react-bootstrap/Table';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

class DailyLogHome extends Component {
    constructor(props) {
        super(props);
        this.retrieveAccidentLog = this.retrieveAccidentLog.bind(this);
        this.retrieveCallLog = this.retrieveCallLog.bind(this);
        this.retrieveWeatherLog = this.retrieveWeatherLog.bind(this);
        this.retrieveGeneralLog = this.retrieveGeneralLog.bind(this);
        this.deleteAccidentLog = this.deleteAccidentLog.bind(this);
        this.deleteWeatherLog = this.deleteWeatherLog.bind(this);
        this.deleteCallLog = this.deleteCallLog.bind(this);
        this.state = {
            dlaccident: [],
            dlweather: [],
            dlcall: [],
            dlgeneral: [],
            isDeleted: 0,
            projectId: this.props.match.params.id
        };
    }
    componentDidMount() {
        this.retrieveAccidentLog(this.props.match.params.id);
        this.retrieveCallLog(this.props.match.params.id);
        this.retrieveWeatherLog(this.props.match.params.id);
        this.retrieveGeneralLog(this.props.match.params.id);
    }

    retrieveAccidentLog(id){
        DLAccidentService.getAll(id)
        .then(response => {
            this.setState({
                dlaccident: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    retrieveCallLog(id){
        DLCallService.getAll(id)
        .then(response => {
            this.setState({
                dlcall: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    retrieveWeatherLog(id){
        DLWeatherService.getAll(id)
        .then(response => {
            this.setState({
                dlweather: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    retrieveGeneralLog(id){
        DLGeneralService.getAll(id)
        .then(response => {
            this.setState({
                dlgeneral: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteAccidentLog(accidentid){
        var data = {
            isDeleted: 1
        }
        DLAccidentService.update(accidentid, data)
        .then(response => {
            // window.location.reload();
        })
    }

    deleteCallLog(callid){
        var data = {
            isDeleted: 1
        }
        DLCallService.update(callid, data)
        .then(response => {
            // window.location.reload();
        })
    }

    deleteWeatherLog(weatherid){
        var data = {
            isDeleted: 1
        }
        DLWeatherService.update(weatherid, data)
        .then(response => {
            // window.location.reload();
        })
    }
    
    render() {
        const { projectId, dlaccident, dlcall, dlgeneral, dlweather} = this.state;
        return (
            <div className="">
                <h2>Daily Logs</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">Daily Logs</Link>
                </Breadcrumbs><hr/>
                <div className="mb-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-8"></div>
                            <div className="form-group col-md-2 form-check">
                                <input type="checkbox" className="form-check-input mt-3" id="singledayCheck" required/>
                                <label htmlFor="singledayCheck" className="form-check-label">View Today</label>
                            </div>
                            <div className="form-group col-md-2 form-check">
                                <a className="btn btn-primary" href="">Export PDF</a>
                            </div>
                        </div>
                        <div className="form-row mt-3">
                            <div className="form-group col-md-4">
                                <input className="form-control" type="text" />
                            </div>
                            <a href="#" className="btn btn-dark mb-3 mr-3">Search</a>
                            <a href="#" className="mt-1">Clear</a>
                        </div>
                    </form>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#accidentlog" aria-controls="accidentlog">Accident</button>
                            </h2>
                            </div>
                            <div id="accidentlog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/createaccidentlog/"+projectId} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                    <Table striped bordered hover variant="" responsive>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Crew</th>
                                                <th>Description</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dlaccident && dlaccident.map((dla) => (
                                                <tr key={dla.id}>
                                                    <td>{dla.date}</td>
                                                    <td>{dla.time}</td>
                                                    <td>{dla.crew}</td>
                                                    <td>{dla.description}</td>
                                                    <td>
                                                        <Link to={"/viewaccidentlog/" + projectId + "/" + dla.id}>
                                                            <button className="btn btn-success mr-2">View <VisibilityIcon/></button>
                                                        </Link>
                                                        <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteaccidentModal" data-toggle="modal">Delete</button>
                                                    </td>    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#weatherlog" aria-controls="weatherlog">Weather</button>
                            </h2>
                            </div>
                            <div id="weatherlog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/createweatherlog/"+projectId} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                    <Table striped bordered hover variant="" responsive>
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Temperature</th>
                                            <th>Weather</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {dlweather && dlweather.map((dlw, index) => (
                                            <tr key={index}>
                                                <td>{dlw.date}</td>
                                                <td>{dlw.time}</td>
                                                <td>{dlw.temperature}</td>
                                                <td>{dlw.weather}</td>
                                                <td>
                                                    <Link to={"/viewweatherlog/" + projectId + "/" + dlw.id}>
                                                        <button className="btn btn-success mr-2">View <VisibilityIcon/></button>
                                                    </Link>
                                                    <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteweatherModal" data-toggle="modal">Delete</button>
                                                </td>    
                                            </tr>
                                            ))}
                                        </tbody>
                                    </Table>                                    
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#calllog" aria-controls="calllog">Call</button>
                            </h2>
                            </div>
                            <div id="calllog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/createcalllog/"+projectId} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                    <Table striped bordered hover variant="" responsive>
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Call From</th>
                                            <th>Call To</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            <th>Reason</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {dlcall && dlcall.map((dlc, index) => (
                                            <tr key={index}>
                                                <td>{dlc.date}</td>
                                                <td>{dlc.callfrom}</td>
                                                <td>{dlc.callto}</td>
                                                <td>{dlc.starttime}</td>
                                                <td>{dlc.endtime}</td>
                                                <td>{dlc.reason}</td>
                                                <td>
                                                    <Link to={"/viewcalllog/" + projectId + "/" + dlc.id}>
                                                        <button className="btn btn-success mr-2">View <VisibilityIcon/></button>
                                                    </Link>
                                                    <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deletecallModal" data-toggle="modal">Delete</button>
                                                </td>    
                                            </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#generallog" aria-controls="generallog">General</button>
                            </h2>
                            </div>
                            <div id="generallog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/creategenerallog/"+projectId} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                    <Table striped bordered hover variant="" responsive>
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Question</th>
                                            <th>Yes</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {dlgeneral && dlgeneral.map((dlg, index) => (
                                            <tr key={index}>
                                                <td>{dlg.date}</td>
                                                <td>{dlg.questions}</td>
                                                <td>{dlg.isHappened ? "Yes" : "No"}</td>
                                                <td>
                                                    <Link to={"/viewgenerallog/" + projectId + "/" + dlg.id}>
                                                        <button className="btn btn-success mr-2">View <VisibilityIcon/></button>
                                                    </Link>
                                                </td>    
                                            </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
                {/* Delete accident modal Starts */}
                <div className="modal fade" id="deleteaccidentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete?</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteAccidentLog(dlaccident.id)} data-dismiss="modal"> Yes, Delete</a>
                                <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delete accident modal Ends */}
                {/* Delete weather modal Starts */}
                <div className="modal fade" id="deleteweatherModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete?</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteWeatherLog(dlweather.id)} data-dismiss="modal"> Yes, Delete</a>
                                <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delete weather modal Ends */}
                {/* Delete call modal Starts */}
                <div className="modal fade" id="deletecallModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete?</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteCallLog(dlcall.id)} data-dismiss="modal"> Yes, Delete</a>
                                <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delete call modal Ends */}
            </div>
        );
    }

}

export default DailyLogHome;

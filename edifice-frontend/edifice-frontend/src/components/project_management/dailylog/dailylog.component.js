import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DLAccidentService from "../../../services/project_management/dlaccident.service";
import DLCallService from "../../../services/project_management/dlcall.service";
import DLWeatherService from "../../../services/project_management/dlweather.service";
import DLGeneralService from "../../../services/project_management/dlgeneral.service";

class DailyLogHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dlaccident: {
                date: "",
                time: "",
                partyinvolved: ""
            },
            dlweather: {
                date: "",
                time: "",
                tempterature: "",
                weather: ""
            },
            dlcall: {
                date: "",
                callfrom: "",
                callto: "",
                starttime: "",
                endtime: ""
            },
            dlgeneral: {
                date: "",
                questions: "",
                isHappened: "",
                description: ""
            },
            projectId: this.props.match.params.id,
        };
    }
    componentDidMount() {
        this.retriveDLaccident(this.props.match.params.id);
        this.retriveDLcall(this.props.match.params.id);
        this.retriveDLweather(this.props.match.params.id);
        this.retriveDLgeneral(this.props.match.params.id);
    }

    retriveDLaccident(id){
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

    retriveDLcall(id){
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

    retriveDLweather(id){
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

    retriveDLgeneral(id){
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
    
    render() {
        return (
            <div className="">
                {/* Breadcrumb starts */}
                <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">Home</Link>
                <Link color="inherit" to={"/projectmanagementhome/"}>App Dashboard</Link>
                <Link color="textPrimary" aria-current="page">Breadcrumb</Link>
                </Breadcrumbs>
                <br></br>
                {/* Breadcrumb ends */}
                <h2>Manage Daily Logs</h2><hr/>
                <div className="mb-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6"></div>
                            <div className="form-group col-md-2 form-check">
                                <input type="checkbox" className="form-check-input mt-3" id="singledayCheck" required/>
                                <label htmlFor="singledayCheck" className="form-check-label">View Single Day</label>
                            </div>
                            <div className="form-group col-md-2 form-check">
                                <input type="checkbox" className="form-check-input mt-3" id="multipledayCheck" required/>
                                <label htmlFor="multipledayCheck" className="form-check-label">View Multiple Days</label>
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
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#accidentlog" aria-controls="accidentlog">Accident log</button>
                            </h2>
                            </div>
                            <div id="accidentlog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/createaccidentlog"} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#weatherlog" aria-controls="weatherlog">Weather log</button>
                            </h2>
                            </div>
                            <div id="weatherlog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/createweatherlog"} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#calllog" aria-controls="calllog">Call log</button>
                            </h2>
                            </div>
                            <div id="calllog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/createcalllog"} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target="#generallog" aria-controls="generallog">General log</button>
                            </h2>
                            </div>
                            <div id="generallog" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <Link to={"/creategenerallog"} className="btn btn-primary">+ Create a Daily Log Item</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
                <a className="btn btn-success" href="/projectmanagementhome/1">Done</a>           
            </div>
        );
    }

}

export default DailyLogHome;
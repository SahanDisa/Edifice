import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DLWeatherService from "../../../services/project_management/dlweather.service.js";

class CreateDWL extends Component {
    constructor(props) {
        super(props);
        this.retrieveWeatherLog = this.retrieveWeatherLog.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeTemperature = this.onChangeTemperature.bind(this);
        this.onChangeWeather = this.onChangeWeather.bind(this);
        this.updateWeatherLog = this.updateWeatherLog.bind(this);
        this.deleteWeatherLog = this.deleteWeatherLog.bind(this);

        this.state = {
            dlweather: {
                id: this.props.match.params.dlid,
                date: "",
                time: "",
                temperature: "",
                weather: "",
                isDeleted: 0,
                projectId: this.props.match.params.id,
                submitted: false
            }
        };
    }

    componentDidMount() {
        this.retrieveWeatherLog(this.props.match.params.dlid);
    }

    retrieveWeatherLog(dlid){
        DLWeatherService.getOne(dlid)
        .then(response => {
            this.setState({
                dlweather: response.data
            });
        });
    }

    onChangeDate(e) {
        const date= e.target.value
        this.setState(function(prevState){
            return {
                dlweather: {
                    ...prevState.dlweather,
                    date: date
                }
            }
        });
    }

    onChangeTime(e) {
        const time= e.target.value
        this.setState(function(prevState){
            return {
                dlweather: {
                    ...prevState.dlweather,
                    time: time
                }
            }
        });
    }

    onChangeTemperature(e) {
        const temperature= e.target.value
        this.setState(function(prevState){
            return {
                dlweather: {
                    ...prevState.dlweather,
                    temperature: temperature
                }
            }
        });
    }

    onChangeWeather(e) {
        const weather= e.target.value
        this.setState(function(prevState){
            return {
                dlweather: {
                    ...prevState.dlweather,
                    weather: weather
                }
            }
        });
    }

    updateWeatherLog() {
        var data = {
            date: this.state.dlweather.date,
            time: this.state.dlweather.time,
            temperature: this.state.dlweather.temperature,
            weather: this.state.dlweather.weather,
            projectId: this.props.match.params.id
        };

        DLWeatherService.update(this.props.match.params.dlid, data)
        .then(response => {
            this.setState(prevState => ({
                dlweather: {
                    ...prevState.dlweather,
                }
            }));
            window.location.reload();
        })
    }

    deleteWeatherLog(){
        var data= {
            isDeleted: 1
        }
        DLWeatherService.update(this.props.match.params.dlid, data)
        .then(response => {
            console.log(response.data);
            // this.props.history.push('/punchlist/');
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    render() {
        const {dlweather} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>View Weather Log</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+dlweather.projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/dailylogs/"+dlweather.projectId}>Daily Log</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">View Weather Log</Link>
                </Breadcrumbs><hr/>
                <div className="">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="">Date</label>
                            <input
                                className="form-control"
                                name="title"
                                value={dlweather.date}
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
                                value={dlweather.time}
                                onChange={this.onChangeTime}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Temperature</label>
                            <input
                                className="form-control"
                                type="temperature"
                                value={dlweather.temperature}
                                onChange={this.onChangeTemperature}
                                type="number"
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Weather</label>
                            <input
                                className="form-control"
                                name="weather"
                                value={dlweather.weather}
                                onChange={this.onChangeWeather}
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary mr-2" id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
                    <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteModal" data-toggle="modal">Delete</button>
                    <Link to={"/dailylog/"+dlweather.projectId} className="">Cancel</Link>
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
                        <a onClick={this.updateWeatherLog} className="btn btn-primary pr-3 ml-2 mr-3" data-dismiss="modal"> Yes, Update</a>
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
                            <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteWeatherLog} data-dismiss="modal"> Yes, Delete</a>
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

export default CreateDWL;
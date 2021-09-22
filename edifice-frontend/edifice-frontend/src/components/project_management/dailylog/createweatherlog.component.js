import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DLWeatherService from "../../../services/project_management/dlweather.service.js";

class CreateDWL extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeTemperature = this.onChangeTemperature.bind(this);
        this.onChangeWeather = this.onChangeWeather.bind(this);
        this.saveWeatherLog = this.saveWeatherLog.bind(this);

        this.state = {
            id: null,
            date: "",
            time: "",
            temperature: "",
            weather: "",
            projectId: this.props.match.params.id,
            submitted: false
        };
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }

    onChangeTemperature(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    onChangeWeather(e) {
        this.setState({
            weather: e.target.value
        });
    }

    onChangeEndtime(e) {
        this.setState({
            endtime: e.target.value
        });
    }

    saveWeatherLog() {
        var data = {
            date: this.state.date,
            time: this.state.time,
            temperature: this.state.temperature,
            weather: this.state.weather,
            endtime: this.state.endtime,
            projectId: this.props.match.params.id
        };

        DLWeatherService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                date: response.data.date,
                time: response.data.time,
                temperature: response.data.temperature,
                weather: response.data.weather,
                endtime: response.data.endtime,
                projectId: response.data.projectId,

                submitted: true
            });
            console.log("save function service ekata enawa");
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    render() {
        const {projectId} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>Add New Weather Log</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/dailylogs/"+projectId}>Daily Log</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">Add New Weather Log</Link>
                </Breadcrumbs><hr/>
                <div className="">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="">Date</label>
                            <input
                                className="form-control"
                                name="title"
                                value={this.state.date}
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
                                value={this.state.time}
                                min="07:00"
                                max="22:00"
                                onChange={this.onChangeTime}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Temprature</label>
                            <input
                                className="form-control"
                                type="temperature"
                                e={this.state.temperature}
                                onChange={this.onChangeTemperature}
                                type="number"
                                min="0"
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Weather</label>
                            <input
                                className="form-control"
                                name="weather"
                                value={this.state.weather}
                                onChange={this.onChangeWeather}
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <button
                        type="button"
                        onClick={this.saveWeatherLog}
                        className="btn btn-primary mr-2"
                    >Save</button>
                    <Link to={"/dailylog/"+projectId} className="">Cancel</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateDWL;
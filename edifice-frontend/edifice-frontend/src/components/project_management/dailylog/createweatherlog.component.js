import React, { Component } from "react";
import { Link } from "react-router-dom";
import DLCallService from "../../../services/project_management/dlcall.service.js";

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
            tempterature: "",
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
            tempterature: e.target.value
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
            date: this.status.date,
            time: this.status.time,
            tempterature: this.status.temptempterature,
            weather: this.status.weather,
            endtime: this.status.endtime,
            projectId: this.props.match.params.id
        };

        DLCallService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                date: response.data.date,
                time: response.data.time,
                tempterature: response.data.temptempterature,
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
                <h2>Add New Weather Log</h2><hr/>
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
                                onChange={this.onChangeTime}
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Temprature</label>
                            <input
                                className="form-control"
                                type="tempterature"
                                e={this.state.temptempterature}
                                onChange={this.onChangeTemperature}
                                type="text"
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
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DLAccidentService from "../../../services/project_management/dlaccident.service.js";
import cogoToast from 'cogo-toast';

class CreateDAL extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeCrew = this.onChangeCrew.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveAccidentLog = this.saveAccidentLog.bind(this);

        this.state = {
            id: null,
            date: "",
            time: "",
            crew: "",
            description: "",
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

    onChangeCrew(e) {
        this.setState({
            crew: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveAccidentLog() {
        if (this.state.date != "" &&
        this.state.time != "" &&
        this.state.crew != "" &&
        this.state.description != "") {
        var data = {
            date: this.state.date,
            time: this.state.time,
            crew: this.state.crew,
            description: this.state.description,
            projectId: this.props.match.params.id
        };

        DLAccidentService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                date: response.data.date,
                time: response.data.time,
                crew: response.data.crew,
                description: response.data.description,
                projectId: response.data.projectId,

                submitted: true
            });
            this.props.history.push("/dailylogs/"+ this.props.match.params.id);
            window.location.reload();
            cogoToast.success("Accident Log Saved Successfully!");
        })
        } else {
            cogoToast.error("Field/s cannot be empty");
        }
    }
    
    render() {
        const {projectId} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>Add New Accident Log</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/dailylogs/"+projectId}>Daily Log</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">Add New Accident Log</Link>
                </Breadcrumbs><hr/>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="">Date</label>
                            <input
                                className="form-control"
                                name="date"
                                max="2021-09-23"
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
                        <div className="form-group col-md-6">
                            <label htmlFor="">Crew</label>
                            <input
                                className="form-control"
                                name="crew"
                                placeholder="Enter the Crew"
                                value={this.state.crew}
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
                                placeholder="Enter a description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <button
                        type="button"
                        onClick={this.saveAccidentLog}
                        className="btn btn-primary mr-2"
                    >Save</button>
                    <Link to={"/dailylog/"+projectId} className="card-text-edifice">Cancel</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateDAL;
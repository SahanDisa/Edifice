import React, { Component } from "react";
import { Link } from "react-router-dom";
import DLCallService from "../../../services/project_management/dlcall.service.js";

class CreateDCL extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCallfrom = this.onChangeCallfrom.bind(this);
        this.onChangeCallto = this.onChangeCallto.bind(this);
        this.onChangeStarttime = this.onChangeStarttime.bind(this);
        this.onChangeEndtime = this.onChangeEndtime.bind(this);
        this.saveCallLog = this.saveCallLog.bind(this);

        this.state = {
            id: null,
            date: "",
            callfrom: "",
            callto: "",
            starttime: "",
            endtime: "",
            projectId: this.props.match.params.id,
            submitted: false
        };
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeCallfrom(e) {
        this.setState({
            callfrom: e.target.value
        });
    }

    onChangeCallto(e) {
        this.setState({
            callto: e.target.value
        });
    }

    onChangeStarttime(e) {
        this.setState({
            starttime: e.target.value
        });
    }

    onChangeEndtime(e) {
        this.setState({
            endtime: e.target.value
        });
    }

    saveCallLog() {
        var data = {
            date: this.status.date,
            callfrom: this.status.callfrom,
            callto: this.status.callto,
            starttime: this.status.starttime,
            endtime: this.status.endtime,
            projectId: this.props.match.params.id
        };

        DLCallService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                date: response.data.date,
                callfrom: response.data.callfrom,
                callto: response.data.callto,
                starttime: response.data.starttime,
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
                <h2>Add New Call Log</h2><hr/>
                <div className="">
                    <div className="form-row">
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
                            <label htmlFor="">Start time</label>
                            <input
                                className="form-control"
                                name="starttime"
                                value={this.state.starttime}
                                onChange={this.onChangeStarttime}
                                type="time"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">End time</label>
                            <input
                                className="form-control"
                                name="endtime"
                                value={this.state.endtime}
                                onChange={this.onChangeEndtime}
                                type="time"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="">Call from</label>
                            <input
                                className="form-control"
                                name="callfrom"
                                type="text"
                                value={this.state.callfrom}
                                onChange={this.onChangeCallfrom}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Call to</label>
                            <input
                                className="form-control"
                                name="callto"
                                value={this.state.callto}
                                onChange={this.onChangeCallto}
                                type="text"
                                required
                            />
                        </div>                        
                    </div>
                    <hr />
                    <button
                        type="button"
                        onClick={this.saveCallLog}
                        className="btn btn-primary mr-2"
                    >Save</button>
                    <Link to={"/dailylog/"+projectId} className="">Cancel</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateDCL;
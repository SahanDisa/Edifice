import React, { Component } from "react";
import { Link } from "react-router-dom";
import DLCallService from "../../../services/project_management/dlcall.service.js";

class CreateDAL extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangePartyinvolved = this.onChangePartyinvolved.bind(this);
        this.saveAccidentLog = this.saveAccidentLog.bind(this);

        this.state = {
            id: null,
            date: "",
            time: "",
            partyinvolved: "",
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

    onChangePartyinvolved(e) {
        this.setState({
            partyinvolved: e.target.value
        });
    }

    saveAccidentLog() {
        var data = {
            date: this.status.date,
            time: this.status.time,
            partyinvolved: this.status.partyinvolved,
            projectId: this.props.match.params.id
        };

        DLCallService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                date: response.data.date,
                time: response.data.time,
                partyinvolved: response.data.partyinvolved,
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
                <h2>Add New Accident Log</h2><hr/>
                {/* <div className="row mb-3"> */}
                    <div>
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
                            <div className="form-group col-md-6">
                                <label htmlFor="">Party Involved</label>
                                <input
                                    className="form-control"
                                    name="partyinvolved"
                                    value={this.state.partyinvolved}
                                    onChange={this.onChangePartyinvolved}
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
                        <Link to={"/dailylog/"+projectId} className="">Cancel</Link>
                    </div>
                {/* </div> */}
            </div>
        </div>
        );
    }
}

export default CreateDAL;
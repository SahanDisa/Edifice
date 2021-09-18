import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import PunchListTypesDataService from "../../../services/project_management/punchlisttypes.service.js";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

class CreateMeeting extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.saveMeeting = this.saveMeeting.bind(this);

        this.state = {
            categories: [],
            no: null,
            title: "",
            category: "",
            status: "Scheduled",
            date: "",
            time: "",
            location: "",
            projectId: this.props.match.params.id,
            submitted: false
        };
    }

    componentDidMount() {
        this.retrieveCategories(this.props.match.params.id);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
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

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    saveMeeting() {
        var data = {
            title: this.state.title,
            category: this.state.category,
            status: this.state.status,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            projectId: this.props.match.params.id
        };

        PunchlistDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                category: response.data.category,
                status: response.data.status,
                date: response.data.date,
                time: response.data.time,
                location: response.data.location,
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

    retrieveCategories(id){
        PunchListTypesDataService.getAll(id)
        .then(response => {
            this.setState({
                categories: response.data
            });
        console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const {categories, projectId} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>Add New Punch List Item</h2><hr/>
                <div className="row mb-3">
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="">Meeting Name</label>
                                <input
                                    className="form-control"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="">Category</label>
                                <select
                                    className="form-control"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.onChangeCategory}
                                    type="text"
                                    required
                                >
                                {categories && categories.map((cat, index) => (
                                    <option
                                        value={cat.id}
                                        onChange={this.onChangeCategory}
                                        key={index}
                                    >
                                        {cat.title}
                                    </option>
                                ))}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="">Status</label>
                                <input
                                    className="form-control"
                                    name="status"
                                    type="text"
                                    value="Initiated"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="">Date</label>
                                <input
                                    className="form-control"
                                    name="date"
                                    value={this.state.date}
                                    onChange={this.onChangeDate}
                                    type="date"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Time</label>
                                <input
                                    className="form-control"
                                    name="time"
                                    value={this.state.time}
                                    onChange={this.onChangeTime}
                                    type="time"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Location</label>
                                <input
                                    className="form-control"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.onChangeLocation}
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <hr />
                        <button
                        type="button"
                        onClick={this.saveMeeting}
                        className="btn btn-primary mr-2"
                        >Save</button>
                        <Link to={"/meeting/"+projectId} className="">Cancel</Link>
                    </div>
                </div>
            </div>
        {/* )} */}
        </div>
        );
    }
}

export default CreateMeeting;
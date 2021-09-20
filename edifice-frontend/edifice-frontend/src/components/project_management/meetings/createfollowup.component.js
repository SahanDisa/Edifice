import React, { Component } from "react";
import { Link } from "react-router-dom";
import MeetingDataService from "../../../services/project_management/meeting.service.js";
import MeetingCategoryDataService from "../../../services/project_management/meetingcategory.service.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import cogoToast from 'cogo-toast';

class CreateFollowupMeetings extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.saveMeeting = this.saveMeeting.bind(this);

        this.state = {
            meetingcategory: {
                id: this.props.match.params.cid,
                overview: "",
                projectId: this.props.match.params.id,
            },
            meeting: {
                projectId: this.props.match.params.id,
                category: this.props.match.params.cid,
                no: null,
                name: "",
                status: "Scheduled",
                date: "",
                time: "",
                location: ""
            },
            submitted: false
        };
    }

    componentDidMount() {
        this.retrieveLastMeetinginCategory(this.props.match.params.cid);
        this.retrieveMeetingCategory(this.props.match.params.cid);
    }

    retrieveLastMeetinginCategory(cid) {
        MeetingDataService.getLastCatMeeting(cid)
        .then(response => {
            this.setState({
                meeting: response.data
            })
        })
    }

    retrieveMeetingCategory(cid) {
        MeetingCategoryDataService.get(cid)
        .then(response => {
            this.setState({
                meetingcategory: response.data
            })
        })
    }

    onChangeName(e) {
        const name= e.target.value
        this.setState(function(prevState){
            return {
                meeting: {
                    ...prevState.meeting,
                    name: name
                }
            }
            
        });
    }

    onChangeDate(e) {
        const date= e.target.value
        this.setState(function(prevState){
            return {
                meeting: {
                    ...prevState.meeting,
                    date: date
                }
            }
            
        });
    }

    onChangeTime(e) {
        const time= e.target.value
        this.setState(function(prevState){
            return {
                meeting: {
                    ...prevState.meeting,
                    time: time
                }
            }
            
        });
    }

    onChangeLocation(e) {
        const location= e.target.value
        this.setState(function(prevState){
            return {
                meeting: {
                    ...prevState.meeting,
                    location: location
                }
            }
            
        });
    }

    saveMeeting() {
        var data = {
            name: this.state.name,
            category: this.state.category,
            status: this.state.status,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            projectId: this.props.match.params.id
        };

        MeetingDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
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
        this.props.history.push("/meetings/"+ this.props.match.params.id);
        cogoToast.success("Meeting Saved Successfully!", { position: 'top-right', heading: 'success' });
    }

    render() {
        const {meeting, meetingcategory} = this.state;
        console.log(meeting.projectId);
        return (
        <div className="">
            <div className="">
                <h2>Add a Follow-up Meeting</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+meeting.projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/meetings/"+meeting.projectId}>Meetings</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">Add a Follow-up Meetings</Link>
                </Breadcrumbs><hr/>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label htmlFor="">Meeting Name</label>
                            <input
                                className="form-control"
                                name="name"
                                value={meeting.name}
                                onChange={this.onChangeName}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Category</label>
                            <input
                                className="form-control"
                                name="category"
                                value={meetingcategory.overview}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Status</label>
                            <input
                                className="form-control"
                                name="status"
                                type="text"
                                value="Scheduled"
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
                                value={meeting.date}
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
                                value={meeting.time}
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
                                value={meeting.location}
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
                    <Link to={"/meeting/"+meeting.projectId} className="">Cancel</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateFollowupMeetings;
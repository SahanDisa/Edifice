import React, { Component } from "react";
import { Link } from "react-router-dom";
import MeetingDataService from "../../../services/project_management/meeting.service.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { TextareaAutosize } from "@material-ui/core";

class ViewMeeting extends Component {
    constructor(props) {
        super(props);
        this.retrieveMeeting = this.retrieveMeeting.bind(this);
      
      this.state = {
        meetingcategory: [],
        meeting: {
            projectId: this.props.match.params.id,
            no: this.props.match.params.mtid,
            category: "",
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
      this.retrieveMeeting(this.props.match.params.mtid);
    }

    retrieveMeeting(mtid){
      MeetingDataService.get(mtid)
      .then(response => {
          this.setState({
            meeting: response.data
          });
          console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }

    render() {
        const {meeting} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>Add New Meeting</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+meeting.projectId}>App Dashboard</Link>
                    <Link color="inherit" to={"/meetings/"+ meeting.projectId}>Meetings</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">View Meeting</Link>
                </Breadcrumbs><hr/>
                {/* <div className="row mb-3"> */}
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="">Meeting Name</label>
                                <input
                                    className="form-control"
                                    name="name"
                                    value={meeting.name}
                                    type="text"
                                    readOnly
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Category</label>
                                <input
                                    className="form-control"
                                    name="category"
                                    value={meeting.category}
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
                                    type="date"
                                    readOnly
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Time</label>
                                <input
                                    className="form-control"
                                    name="time"
                                    value={meeting.time}
                                    type="time"
                                    readOnly
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Location</label>
                                <input
                                    className="form-control"
                                    name="location"
                                    value={meeting.location}
                                    type="text"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="">Description</label>
                                <TextareaAutosize
                                  className="form-control"
                                  name="text"
                                  value={meeting.description}
                                  type="text"
                                  readOnly
                                />
                            </div>
                        </div>
                        <hr />
                        <Link to={"/meetings/"+meeting.projectId} type="button" className="btn btn-primary mr-2" >Done</Link>
                        <Link to={"/meetings/"+meeting.projectId} className="">Cancel</Link>
                    </div>
                {/* </div> */}
            </div>
        {/* )} */}
        </div>
        );
    }
}

export default ViewMeeting;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MeetingDataService from "../../../services/project_management/meeting.service.js";
import MeetingCategoryDataService from "../../../services/project_management/meetingcategory.service.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import cogoToast from 'cogo-toast';

class ViewMeeting extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.retrieveMeeting = this.retrieveMeeting.bind(this);
        this.updateMeeting = this.updateMeeting.bind(this);
        this.deleteMeeting = this.deleteMeeting.bind(this);
      
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
      MeetingDataService.getAll(mtid)
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

    onChangeCategory(e) {
      const category= e.target.value
        this.setState(function(prevState){
          return {
            meeting: {
              ...prevState.meeting,
              category: category
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

    updateMeeting() {
        var data = {
            name: this.state.meeting.name,
            category: this.state.meeting.category,
            status: this.state.meeting.status,
            date: this.state.meeting.date,
            time: this.state.meeting.time,
            location: this.state.meeting.location,
            projectId: this.state.meeting.projectId
        };

        MeetingDataService.update(this.props.match.params.mtid, data)
        .then(response => {
            this.setState(prevState => ({
                meeting: {
                  ...prevState.meeting,
                }
            }));
            console.log("save function service ekata enawa");
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
        this.props.history.push("/meetings/"+ this.props.match.params.id);
        cogoToast.success("Meeting Updated Successfully!", { position: 'top-right', heading: 'success' });
    }

    deleteMeeting(){
      var data = {
          isDeleted: 1
      }
      MeetingDataService.delete(this.props.match.params.pliid, data)
      .then(response => {
          console.log(response.data);
          this.props.history.push("/meetings/"+ this.state.meeting.projectId);
          cogoToast.success("Meeting Deleted Successfully!", { position: 'top-right', heading: 'success' });
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
                                    value={this.state.name}
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
                                    value={meeting.category}
                                    onChange={this.onChangeCategory}
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
                        <button className="btn btn-primary mr-2" id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
                        <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteModal" data-toggle="modal">Delete</button>
                        <Link to={"/meeting/"+meeting.projectId} className="">Cancel</Link>
                    </div>
                {/* </div> */}
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
                            <a onClick={this.updateMeeting} className="btn btn-primary pr-3 ml-2 mr-3" data-dismiss="modal"> Yes, Update</a>
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
                          <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteMeeting} data-dismiss="modal"> Yes, Delete</a>
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

export default ViewMeeting;
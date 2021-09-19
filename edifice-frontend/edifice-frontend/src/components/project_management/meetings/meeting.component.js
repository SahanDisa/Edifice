import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MeetingCategoryDataService from "../../../services/project_management/meetingcategory.service";
import MeetingDataService from "../../../services/project_management/meeting.service";

import Table from 'react-bootstrap/Table';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

class MeetingsHome extends Component {
  constructor(props) {
      super(props);
      this.onChangeOverview = this.onChangeOverview.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.saveMeetingCategory = this.saveMeetingCategory.bind(this);
      this.retrieveMeetingCategory = this.retrieveMeetingCategory.bind(this);
      this.retrieveMeeting = this.retrieveMeeting.bind(this);
      // this.setActiveViewMeeting = this.setActiveViewMeeting.bind(this);
      
      this.state = {
        categories: [],
        meeting: [],
        id: null,
        category: "",
        description: "",
        projectId: this.props.match.params.id,
        content: "",
        currentViewMeeting:"",
        currentViewIndex:-1,

        submitted: false
      };
    }

    componentDidMount() {
      this.retrieveMeetingCategory(this.props.match.params.id);
      this.retrieveMeeting(this.props.match.params.id);
    }

    retrieveMeetingCategory(projectId){
      MeetingCategoryDataService.getAll(projectId)
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

    retrieveMeeting(projectId){
      MeetingDataService.getAll(projectId)
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

    onChangeOverview(e) {
      this.setState({
        overview: e.target.value
      });
    }

    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });
    }

    saveMeetingCategory() { 
      var data = {
        overview : this.state.overview,
        description: this.state.description,
        projectId: this.props.match.params.id
      };

      MeetingCategoryDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          overview: response.data.overview,
          description: response.data.description,

          submitted: true
        });
        console.log("save una");
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      // window.location.reload();
    }

    render() {
      const {categories, meeting, projectId, currentViewMeeting} = this.state;
      console.log(projectId);
      return (
        <div className="">
          <h2>Meetings</h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">Home</Link>
            <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
            <Link color="inherit" aria-current="page" className="disabledLink">Meetings</Link>
          </Breadcrumbs><hr/>
          <div className="container">            
            <h4 className="mt-2">Meeting Types</h4>
            <div className="container">
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="">Name</label>
                  <input
                    className="form-control" 
                    type="text"
                    name="overview"
                    placeholder="Enter type name"
                    value={this.state.overview}
                    onChange={this.onChangeOverview}
                    required
                  />
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="">Description</label>
                  <input 
                    className="form-control" 
                    type="text"
                    name="description"
                    placeholder="Enter description about the type"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    required
                  />
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="">.</label>
                  <button
                      className="btn btn-primary"
                      onClick={this.saveMeetingCategory}
                  >Add</button>
                </div>
              </div>
            </div><hr/>
            <h4 className="mb-3">Meetings</h4>
            <form>
              <div className="form-row mt-3">
                <div class="col-md-12 text-right">
                  <Link to={"/createmeetings/"+projectId} className="btn btn-primary">+ Create Meeting</Link>
                </div>
                <div className="form-group col-md-4">
                  <input className="form-control" type="text" placeholder="Search" />
                </div>
                <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
              </div>
            </form>
            <div class="accordion" id="accordionExample">
              {categories && categories.map((cat, index) => (
                <div class="card" key={cat.id}>
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-link card-text-edifice" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls="collapseOne">{cat.overview}</button>
                    </h2>
                  </div>
                  <div id={`collapse${index}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                      <div className="">
                          <div class="col-md-12 text-right mb-2">
                            <Link to={"/createfollowup/" + projectId + "/" + cat.id} className="btn btn-primary">+ Follow-up Meeting</Link>
                          </div>
                        <Table striped bordered hover variant="" responsive>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Overview</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {meeting && meeting.map((mt) => ( meeting.category === categories.id ?
                                    <tr key={mt.id}>
                                        <td>{mt.date}</td>
                                        <td>{mt.name}</td>
                                        <td>{mt.time}</td>
                                        <td>{mt.location}</td>
                                        <td>
                                          {mt.status == "Scheduled"
                                            ? "🟢 - Scheduled"
                                            : "🔴 - Ended"}
                                        </td>
                                        <td>
                                            <Link
                                              to={"/viewmeeting/" + projectId + "/" + mt.id}>
                                                <button className="btn btn-success mr-2">View <VisibilityIcon/></button>
                                            </Link>
                                            <Link to="">
                                                <button className="btn btn-danger">Delete <DeleteIcon/></button>
                                            </Link>
                                        </td>    
                                    </tr> : ""
                                ))}
                            </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
  }

export default MeetingsHome;
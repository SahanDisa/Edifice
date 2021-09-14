import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanDataService from "./../../../services/project_management/actionplan.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default class AddActionPlan extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeActionType = this.onChangeActionType.bind(this);
    this.onChangePlanManager = this.onChangePlanManager.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.saveDrawing = this.saveDrawing.bind(this);
    this.newDrawing = this.newDrawing.bind(this);

    this.state = {
      id: null,
      title: "",
      planmanager: "",
      actiontype: "",
      location: "",
      description: "",
      approved: false,
      projectId: this.props.match.params.id, 
      
      actionplantypes: [],
      currentIndex: -1,
      submitted: false,

    };
  }
  componentDidMount() {
    this.getActionPlanTypes(this.props.match.params.id);
  }
  onChangeName(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeActionType(e) {
    this.setState({
      actiontype: e.target.value
    });
  }

  onChangePlanManager(e) {
    this.setState({
      planmanager: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  getActionPlanTypes(id){
    ActionPlanTypeDataService.getAll(id)
    .then(response => {
        this.setState({
          actionplantypes: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  saveDrawing() {  
    var data = {
      title: this.state.title,
      planmanager:this.state.planmanager,
      actiontype: this.state.actiontype,
      location: this.state.location,
      description: this.state.description,
      approved: this.state.approved,
      projectId: this.state.projectId
    };

    ActionPlanDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          actiontype: response.data.actiontype,
          location: response.data.location,
          description: response.data.description,
          approved: response.data.approved,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  newDrawing() {
    this.setState({
      id: null,
      title: "",
      description: "",
      actiontype: "",
      location: "",
      planmanager: "",
      projectId: this.props.match.params.id,
      
      submitted: true
    });
  }

  render() {
    const {projectId, currentIndex, actionplantypes} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
          <center>
            <h4>Action Plan details successfully submitted!</h4>
            <Link to={"/actionplan/"+projectId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Back Home
            </Link>
            <Link to={"/addactionplan/"+projectId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Add Action Plan
            </Link>
          </center>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Action Plan</h2>
            <div className="row">
            <div className="col-sm-8">
              <div className="form-row">
                <div className="form-group col-md-9">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.title}
                    onChange={this.onChangeName}
                    name="title"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="description">Approved</label>
                  <input
                    type="text"
                    className="form-control"
                    value="No🔴"
                    disabled
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="title">Plan Manager</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.planmanager}
                    onChange={this.onChangePlanManager}
                    name="title"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="category">Action Plan Type</label>
                  <select 
                    className="form-control"
                    id="datatype"
                    required
                    name="category"
                    value={this.state.actiontype}
                    onChange={this.onChangeActionType}
                  >
                    {actionplantypes &&
                    actionplantypes.map((actionplantype, index) => (
                    <option
                        value={actionplantype.title}
                        onChange={this.onChangeActionType}
                        key={index}
                    >
                    {/* unit data */}
                    {actionplantype.title}
                    </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="title">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    name="title"
                  />
                </div>
              </div>
              <div className="form row">
                <div className="form-group col-md-12">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Action Plan Settings</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Submit</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            <button onClick={this.saveDrawing} className="btn btn-success">
              Create Action Plan
            </button>
          </div>
        )}
      </div>
    );
  }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanDataService from "./../../../services/project_management/actionplan.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import ProjectUserDataService from "../../../services/projectuser.service.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Alert from "react-bootstrap/Alert";
import cogoToast from 'cogo-toast';

export default class AddActionPlan extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeActionType = this.onChangeActionType.bind(this);
    this.onChangePlanManager = this.onChangePlanManager.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.updatePunchList = this.updatePunchList.bind(this);
    this.deletePunchList = this.deletePunchList.bind(this);
    this.viewActionPlan = this.viewActionPlan.bind(this);

    this.state = {
        apitem: {
            id: null,
            name: "",
            planmanager: "",
            actiontype: "",
            location: "",
            description: "",
            approved: false,
            projectId: this.props.match.params.id,
        },
        actionplantypes: [],
        users: [],
        currentIndex: -1,
        submitted: false,
    };
  }
  componentDidMount() {
    this.retrieveActionPlanTypeInfo(this.props.match.params.id);
    this.retrieveUsers(this.props.match.params.id)
  }

  retrivePLItemInfo(plid){
    ActionPlanDataService.getOne(plid)
    .then(response => {
        this.setState({
            apitem: response.data
        });
    });
  }

  retrieveUsers(id){
    ProjectUserDataService.searchUserDetails(id, "Project Manager")
    .then(response => {
        this.setState({
            users: response.data
        });
    console.log(response.data);
    console.log("enineer gaththa");
    })
    .catch(e => {
        console.log(e);
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
    ActionPlanTypeDataService.findByTitle(e.target.value, this.props.match.params.id)
    .then((response) => {
      this.setState({
        isTitleValid: response.data.length,
      });
    })
    .catch((e) => {
      console.log(e);
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
  saveActionPlan() {  
    var data = {
      name: this.state.name,
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
          name: response.data.name,
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

  viewActionPlan(id){
    this.props.history.push("/actionplan/"+ id);
    cogoToast.success("Action Plan Saved Successfully!");
  }

  render() {
    const {projectId, currentIndex, actionplantypes, isTitleValid, viewActionPlan, users} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          viewActionPlan(projectId)
        ) : (
          <div class="container">
            <h2>Update Action Plan</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">Home</Link>
              <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
              <Link color="inherit" to={"/actionplan/"+projectId}>Action Plan</Link>
              <Link color="inherit" aria-current="page" className="disabledLink">Update Action Plan</Link>
            </Breadcrumbs><hr/>
            <div className="">
            <div className="form-row">
                <div className="form-group col-md-12">
                  {this.state.name == "" ? "" : isTitleValid > 0 ? 
                    <Alert variant="danger">Name is already taken</Alert> :
                    <Alert variant="success">Name is avaliable to use</Alert>
                  }
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-9">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Enter a action plan name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    name="name"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="approved">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Not Approved 🔴"
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="planmanager">Plan Manager</label>
                  <select
                    type="text"
                    className="form-control"
                    id="planmanager"
                    required
                    value={this.state.planmanager}
                    onChange={this.onChangePlanManager}
                    name="planmanager"
                  >
                    <option value="">Select an Assignee</option>
                      {users && users.map((u, index) => (
                          <option
                              value={u.username}
                              onChange={this.onChangePlanManager}
                              key={index}
                          >
                              {u.username} - {u.position}
                          </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="type">Action Plan Type</label>
                  <select 
                    className="form-control"
                    id="type"
                    required
                    name="type"
                    value={this.state.actiontype}
                    onChange={this.onChangeActionType}
                  >
                    {actionplantypes && actionplantypes.map((actionplantype, index) => (
                      <option
                        value={actionplantype.title}
                        onChange={this.onChangeActionType}
                        key={index}
                      >
                      {actionplantype.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Enter the location"
                    required
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    name="location"
                    list="suggest"
                  />
                  <datalist>
                    <option value="Floor 1">Floor 1</option>
                    <option value="Floor 2">Floor 2</option>
                    <option value="Floor 3">Floor 3</option>
                  </datalist>
                </div>
              </div>
              <div className="form row">
                <div className="form-group col-md-12">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter a description about the action plan"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>
              </div>
            </div>
            <button onClick={this.saveActionPlan} className="btn btn-success mr-2">Create Action Plan</button>
            <a href="/actionplan">Cancel</a>
          </div>
        )}
      </div>
    );
  }
}
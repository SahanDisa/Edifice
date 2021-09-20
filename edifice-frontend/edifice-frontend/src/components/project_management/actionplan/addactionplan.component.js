import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanDataService from "./../../../services/project_management/actionplan.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default class AddActionPlan extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeActionType = this.onChangeActionType.bind(this);
    this.onChangePlanManager = this.onChangePlanManager.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.saveActionPlan = this.saveActionPlan.bind(this);
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
  saveActionPlan() {  
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
          <div class="container">
            <h2>Add New Action Plan</h2>
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">Home</Link>
            <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
            <Link color="inherit" to={"/actionplan/"+projectId}>Action Plan</Link>
            <Link color="inherit" aria-current="page" className="disabledLink">Add New Action Plan</Link>
          </Breadcrumbs><hr/>
            <div className="">
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
                  <label htmlFor="approved">Approved</label>
                  <input
                    type="text"
                    className="form-control"
                    value="No🔴"
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="planmanager">Plan Manager</label>
                  <input
                    type="text"
                    className="form-control"
                    id="planmanager"
                    required
                    value={this.state.planmanager}
                    onChange={this.onChangePlanManager}
                    name="planmanager"
                  />
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
                    required
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    name="location"
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
            <button onClick={this.saveActionPlan} className="btn btn-success mr-2">Create Action Plan</button>
            <a href="/actionplan">Cancel</a>
          </div>
      </div>
    );
  }
}
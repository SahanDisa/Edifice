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

export default class AddAPItem extends Component {
  constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAssigner = this.onChangeAssigner.bind(this);
        this.onChangeisCompleted = this.onChangeisCompleted.bind(this);
        this.saveAPitem = this.saveAPitem.bind(this);

        this.state = {
        id: null,
        title: "",
        description: "",
        assigner: "",
        isCompleted: 0,
        actionplansectionId: this.props.match.params.id, 
        
        actionplantypes: [],
        currentIndex: -1,
        submitted: false,
        };
    }
    onChangeTitle(e) {
        this.setState({
        title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
        description: e.target.value
        });
    }

    onChangeAssigner(e) {
        this.setState({
        assigner: e.target.value
        });
    }

    onChangeisCompleted(e) {
        this.setState({
        planmanager: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
        location: e.target.value
        });
    }
    
    saveAPitem() {  
        var data = {
            title: this.state.title,
            description: this.state.description,
            assigner: this.state.assigner,
            isCompleted: this.state.isCompleted,
            actionplansectionId: this.state.actionplansectionId
        };

        ActionPlanDataService.create(data)
        .then(response => {
            this.setState({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            assigner: response.data.assigner,
            isCompleted: response.data.isCompleted,
            actionplansectionId: response.data.actionplansectionId,

            submitted: true
        });
            console.log(response.data);
        })
    }
  
    newDrawing() {
        this.setState({
            id: null,
            title: "",
            description: "",
            assigner: "",
            location: "",
            planmanager: "",
        //   actionplansectionId: this.props.match.params.id,
            actionplansectionId: 1,
            
            submitted: true
        });
    }

  render() {
    const {actionplansectionId, currentIndex, actionplantypes} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
          <center>
            <h4>Action Plan details successfully submitted!</h4>
            <Link to={"/actionplan/"+actionplansectionId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Back Home
            </Link>
            <Link to={"/addactionplan/"+actionplansectionId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Add Action Plan
            </Link>
          </center>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Action Plan Item</h2>
            <hr/>
            <div className="">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            name="title"
                        />
                    </div>
                    <div className="form-group col-md-3">
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
                    <div className="form-group col-md-3">
                        <label htmlFor="description">Completed</label>
                        <input
                            type="text"
                            className="form-control"
                            value="No 🔴"
                            readOnly
                        />
                    </div>
                </div>
                <div className="form-row">
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
                    <div className="form-group col-md-8">
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
            <button onClick={this.saveAPitem} className="btn btn-success mr-2">Create</button>
            <a href="/actionplan">Cancel</a>
          </div>
        )}
      </div>
    );
  }
}
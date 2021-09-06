import React, { Component } from "react";
import ActionPlanTypeDataService from "./../../../services/project_management/actionplantype.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default class AddActionPlanType extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveActionPlanCategory = this.saveActionPlanCategory.bind(this);
    this.newActionPlanCategory = this.newActionPlanCategory.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      projectId: this.props.match.params.id,  
      submitted: false
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

  saveActionPlanCategory() {
    console.log("click kala");  
    var data = {
      title : this.state.title,
      description: this.state.description,
    };

    ActionPlanTypeDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newActionPlanCategory() {
    this.setState({
      id: null,
      title: "",
      description: "",

      submitted: false
    });
  }

  render() {
    const {projectId} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <center>
            <h4>ActionPlan details successfully submitted!</h4>
            <button className="btn btn-success" onClick={this.newActionPlanCategory}>
            Add Another Action Plan Type
            </button>
            <a className="btn btn-primary" href={"/actionplan/"+projectId}>
            Home
            </a>
            </center>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Action Plan Type</h2>
            <h5>Project : {projectId}</h5>
            <div className="row">
            <div className="col-sm-8">
                <div className="form-group">
                <label htmlFor="name">Title</label>
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

                <div className="form-group">
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
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Action Plan Settings</h5> </TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            <button onClick={this.saveActionPlanCategory} className="btn btn-success">
              Create Action Plan Type
            </button>
          </div>
        )}
      </div>
    );
  }
}
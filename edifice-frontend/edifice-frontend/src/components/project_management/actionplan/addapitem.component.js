import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanDataService from "./../../../services/project_management/actionplan.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";

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
        actionplanId: this.props.actionplanId,
        
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
    const {actionplansectionId, currentIndex, actionplantypes,actionplanId} = this.state;
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
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add New Action Plan Item {actionplanId}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="title">Title</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    name="title"
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="title">Section</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="section"
                                    required
                                    value={this.state.section}
                                    name="section"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-4">
                            <label htmlFor="title">Location</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.location}
                                onChange={this.onChangeLocation}
                                name="title"
                            />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="title">Plan Manager</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={this.state.planmanager}
                                    onChange={this.onChangePlanManager}
                                    name="title"
                                />
                            </div>
                            <div className="form-group col-4">
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
                            <div className="form-group col-12">
                                <label htmlFor="description">Description</label>
                                <input
                                    required
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
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary"data-dismiss="modal" onClick={this.saveAPitem}>Create</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
import React, { Component } from "react";
import ActionPlanDataService from "../../../services/project_management/actionplan.service.js";

class ViewActionPlan extends Component {
    constructor(props) {
        super(props);
        this.onChangePlanManager = this.onChangePlanManager.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.retriveAPInfo = this.retriveAPInfo.bind(this);
        this.updateActionPlan = this.updateActionPlan.bind(this);
        this.deleteActionPlan = this.deleteActionPlan.bind(this);
        this.state = {
            actionplan: {
                no: this.props.match.params.id,
                title: "",
                description: "",
                location: "",
                status: "",
                type: "",
                projectId: ""
            }
        };
    }
  
    componentDidMount() {
        this.retriveAPInfo(this.props.match.params.id);
    }

    retriveAPInfo(id){
        ActionPlanDataService.getOne(id)
        .then(response => {
            this.setState({
                actionplan: response.data
            });
        });
    }

    onChangePlanManager(e) {
        const duedate = e.target.value
        this.setState(function(prevState){
            return {
                actionplan: {
                    ...prevState.actionplan,
                    duedate: duedate
                }
            }
        });
    }

    onChangeLocation(e) {
        const location = e.target.value
        this.setState(function(prevState){
            return {
                actionplan: {
                    ...prevState.actionplan,
                    location: location
                }
            }
        });
    }

    onChangeDescription(e) {
        const description = e.target.value
        this.setState(function(prevState){
            return {
                actionplan: {
                    ...prevState.actionplan,
                    description: description
                }
            }
        });
    }

    updateActionPlan(){
        var data = {
            description: this.state.actionplan.description,
            duedate: this.state.actionplan.duedate,
            location: this.state.actionplan.location,
            projectId: this.state.actionplan.projectId
        };

        ActionPlanDataService.update(this.props.match.params.id, data)
        .then(response => {
            this.setState(prevState => ({
                actionplan: {
                    ...prevState.actionplan,
                }
            }));
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
        window.location.reload();
    }

    deleteActionPlan(){
        ActionPlanDataService.delete(this.props.match.params.code)
        .then(response => {
            console.log(response.data);
            this.props.history.push('/actionplan/1');
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { actionplan, projectId } = this.state;
        return (
            <div>
                <h2>Action Plan - {actionplan.title}</h2>
                <div className="container">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="">Title</label>
                            <input
                                className="form-control"
                                name="title"
                                value={actionplan.title}
                                onChange={this.onChangeTitle}
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Status</label>
                            <input
                                className="form-control"
                                name="status"
                                type="text"
                                value={actionplan.status}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="">Location</label>
                            <input
                                className="form-control"
                                name="location"
                                value={actionplan.location}
                                onChange={this.onChangeLocation}
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label htmlFor="">Description</label>
                            <input
                                className="form-control"
                                name="description"
                                value={actionplan.description}
                                onChange={this.onChangeDescription}
                                type="text"
                                required
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="">Plan Manager</label>
                            <input
                                className="form-control"
                                name="duedate"
                                value={actionplan.duedate}
                                onChange={this.onChangePlanManager}
                                type="date"
                                min=""
                                required
                            />
                        </div>
                    </div>
                    <hr />
                    <button
                        className="btn btn-primary mr-2"
                        onClick={this.updateActionPlan}>Update</button>
                    <button
                        className="btn btn-danger mr-2"
                        onClick={this.deleteActionPlan}>Delete</button>
                    <a href="/actionplan/1" className="">Cancel</a>
                </div>            
            </div>
        );
    }
}

export default ViewActionPlan;
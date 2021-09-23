import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanItemDataService from "./../../../services/project_management/actionplanitem.service";
import ActionPlanSectionDataService from "./../../../services/project_management/actionplansection.service";
import ProjectUserDataService from "../../../services/projectuser.service.js";
import { Breadcrumbs } from "@material-ui/core";
import cogoToast from 'cogo-toast';

export default class AddAPItem extends Component {
  constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAssigner = this.onChangeAssigner.bind(this);
        this.onChangeActionplansectionId = this.onChangeActionplansectionId.bind(this);
        this.saveAPitem = this.saveAPitem.bind(this);

        this.state = {
            projectId: this.props.match.params.id,
            actionplanId: this.props.match.params.apid, 
            title: "",
            description: "",
            assigner: "",
            isCompleted: 0,
            actionplansectionId: "",
            
            actionplansections: [],
            users: [],
            currentIndex: -1,
            submitted: false,
        };
    }

    componentDidMount() {
        this.getActionPlanSections(this.props.match.params.apid);
        this.retrieveUsers(this.props.match.params.id);
    }
    
    getActionPlanSections(id){
        ActionPlanSectionDataService.getAll(id)
        .then(response => {
            this.setState({
                actionplansections: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    retrieveUsers(id){
        ProjectUserDataService.searchUserDetails(id, "Engineer")
        .then(response => {
            this.setState({
                users: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
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

    onChangeActionplansectionId(e) {
        this.setState({
            actionplansectionId: e.target.value
        });
    }
    
    saveAPitem() {  
        if (this.state.title != "" &&
        this.state.description != "" &&
        this.state.assigner != "") {
            var data = {
                title: this.state.title,
                description: this.state.description,
                assigner: this.state.assigner,
                actionplansectionId: this.state.actionplansectionId
            };

            ActionPlanItemDataService.create(data)
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
                cogoToast.success("Action Plan Item Saved Successfully!");
                this.props.history.push("/actionplansingle/" + this.props.match.params.id + "/" + this.props.match.params.apid);
            })
        } else {
            cogoToast.error("Field/s cannot be empty");
        }
    }

  render() {
    const {actionplansections, actionplanId, projectId, users} = this.state;
    return (
      <div className="container">
        <div class="container">
            <h3 className="modal-title" id="exampleModalCenterTitle">Add New Action Plan Item</h3>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">Home</Link>
                <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
                <Link color="inherit" to={"/actionplan/"+projectId}>Action Plan</Link>
                <Link color="inherit" to={"/actionplansingle/" + projectId + "/" + actionplanId}>Action Plan Single Page</Link>
                <Link color="inherit" aria-current="page" className="disabledLink">Add Action Plan Item</Link>
            </Breadcrumbs>
            <hr/>
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="title">Title</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter a title for action plan item"
                            required
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            name="title"
                        />
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-4">
                        <label htmlFor="title">Section</label>
                        <select
                            type="text"
                            className="form-control"
                            id="section"
                            value={this.state.actionplansectionId}
                            onChange={this.onChangeActionplansectionId}
                            name="section"
                            required
                        >
                            <option value="">Select a Section</option>
                            {actionplansections && actionplansections.map((aps, index) => (
                                <option
                                    value={aps.id}
                                    onChange={this.onChangeActionplansectionId}
                                    key={index}
                                >
                                    {aps.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="title">Assignee</label>
                        <select
                            required
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={this.state.assigner}
                            onChange={this.onChangeAssigner}
                            name="title"
                        >
                            <option value="">Select an Assignee</option>
                            {users && users.map((u, index) => (
                                <option
                                    value={u.username}
                                    onChange={this.onChangeAssigner}
                                    key={index}
                                >
                                    {u.username} - {u.position}
                                </option>
                            ))}
                        </select>
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
                            placeholder="Enter a description about the item"
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            name="description"
                        />
                    </div>
                </div><hr />
                    <button type="button" className="btn btn-primary mr-2" onClick={this.saveAPitem}>Create Action Plan Item</button>
                    <Link to={"/actionplansingle/" + projectId + "/" + actionplanId}>Cancel</Link>
                </div>
            </div>
        </div>
    );}
}
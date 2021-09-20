import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanDataService from "./../../../services/project_management/actionplan.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import { Breadcrumbs } from "@material-ui/core";

export default class AddAPItem extends Component {
  constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAssigner = this.onChangeAssigner.bind(this);
        this.onChangeisCompleted = this.onChangeisCompleted.bind(this);
        this.saveAPitem = this.saveAPitem.bind(this);

        this.state = {
        id: this.props.match.params.id,
        apid: this.props.match.params.apid, 
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
    const {actionplansectionId, currentIndex, actionplantypes,actionplanId, id , apid} = this.state;
    return (
      <div className="container">
        <div class="container">
        <h3 className="modal-title" id="exampleModalCenterTitle">Add New Action Plan Item {actionplanId}</h3>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">Home</Link>
            <Link color="inherit" to={"/projectmanagementhome/"+id}>App Dashboard</Link>
            <Link color="inherit" to={"/actionplan/"+id}>Action Plan</Link>
            <Link color="inherit" aria-current="page" className="disabledLink">Add Action Plan Item</Link>
        </Breadcrumbs>
        <hr/>
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
            {/*  */}
            <button type="button" className="btn btn-primary"data-dismiss="modal" onClick={this.saveAPitem}>Create</button>
            {/*  */}
            </div>  
        </div>
      </div>
    );
  }
}
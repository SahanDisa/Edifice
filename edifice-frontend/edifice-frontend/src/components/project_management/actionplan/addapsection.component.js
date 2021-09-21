import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanSectionDataService from "./../../../services/project_management/actionplansection.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import cogoToast from 'cogo-toast';

export default class AddAPSection extends Component {
  constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeReftype = this.onChangeReftype.bind(this);
        this.onChangeRefid = this.onChangeRefid.bind(this);
        this.onChangeAcceptance = this.onChangeAcceptance.bind(this);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.viewAPSection = this.viewAPSection.bind(this);
        this.saveAPsection = this.saveAPsection.bind(this);

        this.state = {
            id: null,
            title: "",
            reftype: "",
            refid: "",
            acceptance: "",
            duedate: "",
            actionplanId:"",
            projectId: "",
            
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

    onChangeAcceptance(e) {
        this.setState({
            acceptance: e.target.value
        });
    }

    onChangeDuedate(e) {
        this.setState({
            duedate: e.target.value
        });
    }

    onChangeRefid(e) {
        this.setState({
            refid: e.target.value
        });
    }

    onChangeReftype(e) {
        this.setState({
            reftype: e.target.value
        });
    }
    
    saveAPsection() {  
        var data = {
            reftype: this.state.reftype,
            refid: this.state.refid,
            acceptance: this.state.acceptance,
            duedate: this.state.duedate,
            actionplanId: this.state.actionplanId,
        };

        ActionPlanSectionDataService.create(data)
        .then(response => {
            this.setState({
            id: response.data.id,
            reftype: response.data.reftype,
            refid: response.data.refid,
            acceptance: response.data.acceptance,
            duedate: response.data.duedate,
            actionplanId: this.props.match.params.apid,

            submitted: true
        });
            console.log(response.data);
        })
    }

    viewAPSection(){
        cogoToast.success("Punch List - Basic Details Saved Successfully!");
    }

    render() {
        const {actionplanId, currentIndex, actionplantypes, projectId, viewAPSection} = this.state;
        return (
            <div className="container">
                {this.state.submitted ? (
                    viewAPSection()
                ):(
                <div class="container">
                    <h2>Add New Action Plan Section</h2>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to="/home">Home</Link>
                        <Link color="inherit" to={"/projectmanagementhome/"+projectId}>App Dashboard</Link>
                        <Link color="inherit" to={"/actionplan/" + projectId}>Action Plan</Link>
                        <Link color="inherit" to={"/actionplansinglepage/" + projectId + "/" + actionplanId}>Action Plan Single Page</Link>
                        <Link color="inherit" aria-current="page" className="disabledLink">Add Action Plan Section</Link>
                    </Breadcrumbs><hr/>
                    <div className="">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    placeholder="Enter a title to the section "
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    name="title"
                                />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="acceptance">Acceptance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="acceptance"
                                    required
                                    placeholder="Enter acceptance"
                                    value={this.state.acceptance}
                                    onChange={this.onChangeAcceptance}
                                    name="acceptance"
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="duedate">Due Date</label>
                                <input
                                    className="form-control"
                                    name="duedate"
                                    placeholder="Enter due date"
                                    value={this.state.duedate}
                                    onChange={this.onChangeDuedate}
                                    type="date"
                                    min=""
                                    required
                                />
                            </div>
                        </div>
                        {/* <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="reftype">Reference type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="reftype"
                                placeholder="Enter what type of files you will be refered to"
                                required
                                value={this.state.reftype}
                                onChange={this.onChangeReftype}
                                name="reftype"
                            />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="refid">Reference Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="refid"
                                    required
                                    value={this.state.refid}
                                    onChange={this.onChangeRefid}
                                    name="refid"
                                />
                            </div>
                        </div> */}
                    </div><hr />
                    <button onClick={this.saveActionPlan} className="btn btn-success mr-2">Create Action Plan</button>
                    <a href="/actionplan">Cancel</a>
                </div>
                )}
            </div>
        );
    }
}
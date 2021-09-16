import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanSectionDataService from "./../../../services/project_management/actionplansection.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default class AddAPSection extends Component {
  constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeReftype = this.onChangeReftype.bind(this);
        this.onChangeRefid = this.onChangeRefid.bind(this);
        this.onChangeAcceptance = this.onChangeAcceptance.bind(this);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.saveAPsection = this.saveAPsection.bind(this);

        this.state = {
        id: null,
        title: "",
        reftype: "",
        refid: "",
        acceptance: "",
        duedate: "",
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
            actionplanId: response.data.actionplanId,

            submitted: true
        });
            console.log(response.data);
        })
    }

    render() {
        const {actionplanId, currentIndex, actionplantypes} = this.state;
        return (
            <div className="container">
                {/* {this.state.submitted ? (
                <div>
                <center>
                    <h4>Action Plan details successfully submitted!</h4>
                    <Link to={"/actionplan/"+actionplanId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
                    Back Home
                    </Link>
                    <Link to={"/addactionplan/"+actionplanId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
                    Add Action Plan
                    </Link>
                </center>
                </div>
                ) : ( */}
                <div class="container">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Add New Action Plan Section</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <div className="">
                            <div className="form-row">
                                <div className="form-group col-md-4">
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
                                <div className="form-group col-md-5">
                                    <label htmlFor="acceptance">Acceptance</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="acceptance"
                                        required
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
                                        value={this.state.duedate}
                                        onChange={this.onChangeDuedate}
                                        type="date"
                                        min=""
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                <label htmlFor="reftype">Ref type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reftype"
                                    required
                                    value={this.state.reftype}
                                    onChange={this.onChangeReftype}
                                    name="reftype"
                                />
                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="refid">Ref Id</label>
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
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveAPitem}>Create</button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        );
    }
}
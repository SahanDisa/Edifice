import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

class CreatePL extends Component {
    constructor(props) {
        super(props);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        // this.onChangePunchmanager = this.onChangePunchmanager.bind(this);
        // this.onChangeAssignee = this.onChangeAssignee.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListItem = this.savePunchListItem.bind(this);
        this.newPunchListItem = this.newPunchListItem.bind(this);
        this.LinkingButton = this.LinkingButton.bind(this);

        this.state = {
            no: null,
            status: "Initiated",
            duedate: "",
            title: "",
            location: "",
            // punchmanager: "",
            // assignee: "",
            description: "",
            projectId: this.props.match.params.id,
            lastpl:[],
            submitted: false,
            linkButton: undefined,
        };
    }

    onChangeDuedate(e) {
        this.setState({
            duedate: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    savePunchListItem() {
        var data = {
            status: this.state.status,
            duedate: this.state.duedate,
            title: this.state.title,
            type: this.state.type,
            location: this.state.location,
            // punchmanager: this.state.punchmanager,
            // assignee: this.state.assignee,
            description: this.state.description,
            projectId: this.state.projectId
        };

        this.setState({
            linkButton: "wedehari"
        })

        PunchlistDataService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                status: response.data.status,
                duedate: response.data.duedate,
                title: response.data.title,
                type: response.data.type,
                location: response.data.location,
                // punchmanager: response.data.punchmanager,
                // assignee: response.data.assignee,
                description: response.data.description,
                projectId: response.data.projectId,

                submitted: true
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    newPunchListItem() {
        this.setState({
            no: null,
            duedate: "",
            title: "",
            location: "",
            // punchmanager: "",
            // assignee: "",
            description: "",
            projectId: this.props.match.params.id,

            submitted: false
        });
    }

    getLastPunchListID(){
        PunchlistDataService.findlastItem()
        .then(response => {
            this.setState({
                lastpl: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
      }
    LinkingButton(){
        console.log("Yes, Linking Button is succesful");
    }

    render() {
        const {lastpl,linkButton} = this.state;
        return (
        <div className="">
            {this.state.submitted ? (
                <div>
                    <div>
                        <h4>Category details successfully submitted!</h4>
                        <button className="btn btn-success" onClick={this.newPunchListItem}>Add Another punch list</button>
                    </div>
                    {/* <div className="modal fade" id="successfullyaddedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Choose what you want to do?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" onClick={this.newPunchListItem}>Add Another punch list</button>
                                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div> */}  
                    <div className="container row">
                        {lastpl && lastpl.map((puchlist, index) => (
                            <div className="container col-3" key={index}>
                                <Link to={"/addphotos/" + puchlist.id} className="btn btn-warning"  style={{ 'text-decoration': 'none' }}>Add Departments</Link>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
            <div className="">
                <h2>Add New Punch List Item</h2><hr/>
                <div className="row mb-3">
                    <div className="col-sm-8">
                    <h5>Step 1: Basic Details</h5>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Title</label>
                                    <input
                                        className="form-control"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Status</label>
                                    <input
                                        className="form-control"
                                        name="status"
                                        type="text"
                                        value="Initiated"
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Type</label>
                                    <input
                                        className="form-control"
                                        name="type"
                                        value={this.state.type}
                                        onChange={this.onChangeType}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Location</label>
                                    <input
                                        className="form-control"
                                        name="location"
                                        value={this.state.location}
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
                                        value={this.state.description}
                                        onChange={this.onChangeDescription}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="">Due Date</label>
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
                            <hr />
                            {!linkButton &&
                            <button
                                type="button"
                                // data-toggle="modal"
                                // data-target="#successfullyaddedModal"
                                onClick={this.savePunchListItem}
                                className="btn btn-primary mr-2">Save Punch Item</button>
                            }
                            {linkButton &&
                                <button className="btn btn-primary" onClick={this.LinkingButton}>Link Photos</button>
                            }
                            <a className="btn btn-success m-2" href="/punchlist" >Cancel</a>
                        </form>
                    </div>
                    <div className="col-sm-4">
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                                <TimelineContent><h5><strong>Step 1</strong><br/>Basic Details</h5></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                                <TimelineContent><h6><strong>Step 2</strong><br/>Link Photos</h6></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator><TimelineDot /></TimelineSeparator>
                                <TimelineContent><h6><strong>Step 2</strong><br/>Add Assignees</h6></TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        )}
        </div>
        );
    }
}

export default CreatePL;
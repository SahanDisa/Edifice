import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import PunchListTypesDataService from "../../../services/project_management/punchlisttypes.service.js";
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
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        // this.onChangePunchmanager = this.onChangePunchmanager.bind(this);
        // this.onChangeAssignee = this.onChangeAssignee.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListItem = this.savePunchListItem.bind(this);
        this.newPunchListItem = this.newPunchListItem.bind(this);

        this.state = {
            no: null,
            status: "Initiated",
            duedate: "",
            name: "",
            location: "",
            // punchmanager: "",
            // assignee: "",
            description: "",
            projectId: this.props.match.params.id,
            lastpl:[],
            submitted: false
        };
    }

    componentDidMount() {
        this.retrievePLT(this.props.match.params.id);
    }

    onChangeDuedate(e) {
        this.setState({
            duedate: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
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
            name: this.state.name,
            type: this.state.type,
            location: this.state.location,
            // punchmanager: this.state.punchmanager,
            // assignee: this.state.assignee,
            description: this.state.description,
            projectId: this.state.projectId
        };

        PunchlistDataService.create(data)
        .then(response => {
            this.setState({
                no: response.data.no,
                status: response.data.status,
                duedate: response.data.duedate,
                name: response.data.name,
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
            name: "",
            location: "",
            // punchmanager: "",
            // assignee: "",
            description: "",
            projectId: this.props.match.params.id,

            submitted: false
        });
    }

    retrievePLT(id){
        PunchListTypesDataService.getAll(id)
        .then(response => {
            this.setState({
                pltypes: response.data
            });
        console.log(response.data);
        })
        .catch(e => {
            console.log(e);
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

    render() {
        const {lastpl, pltypes} = this.state;
        return (
        <div className="">
            {this.state.submitted ? (
                <div>
                    <div>
                        {/* <h4>Category details successfully submitted!</h4>
                        <button className="btn btn-success" onClick={this.newPunchListItem}>Add Another punch list</button> */}
                    {/* </div>
                    <div className="container row"> */}
                        {lastpl && lastpl.map((puchlist, index) => (
                            <div className="container col-3" key={index}>
                                <Link to={"/addphotos/" + puchlist.id} className="btn btn-warning"  style={{ 'text-decoration': 'none' }}>Add Photos</Link>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
            <div className="">
                <h2>Add New Punch List Item</h2><hr/>
                <div className="row mb-3">
                    <div className="col-sm-8">
                    <h5>Step 1: Add Photos</h5>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Name</label>
                                    <input
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        type="text"
                                        required
                                    />
                                </div>
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
                            </div>
                            <hr />
                            <button
                                type="button"
                                onClick={this.savePunchListItem}
                                className="btn btn-primary mr-2"
                            >Next: Add Assignees</button>
                            <a href="/punchlist" className="">Cancel</a>
                        </form>
                    </div>
                    <div className="col-sm-4">
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                                <TimelineContent><h6><strong>Step 1</strong><br/>Basic Details</h6></TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                                <TimelineContent><h5><strong>Step 2</strong><br/>Link Photos</h5></TimelineContent>
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
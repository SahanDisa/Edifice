import React, { Component } from "react";
import { Link } from "react-router-dom";
import PunchlistDataService from "../../../services/project_management/punchlist.service.js";
import PLPhotosDataService from "../../../services/project_management/punchlistphotos.service.js";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

class CreatePhotos extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePhotos = this.savePhotos.bind(this);
        this.buttonChange = this.buttonChange.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            punchlistNo: "",
            lastpl: [],

            submitted: false
        };
    }

    componentDidMount() {
        this.getLastPunchListID();
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    savePhotos() {
        var data = {
            name: this.state.name,
            description: this.state.description,
            punchlistNo: this.state.punchlistNo
        };

        PunchlistDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                punchlistNo: response.data.punchlistNo,

                submitted: true
            });
            console.log(response.data);
        })
    }

    getLastPunchListID(){
        PunchlistDataService.findlastItem()
        .then(response => {
            this.setState({
                lastpl: response.data,
                punchlistNo: response.data[0].no
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    savePhotos() {
        var data = {
            name: this.state.name,
            description: this.state.description,
            punchlistNo: this.state.punchlistNo
        };

        this.setState({
            buttonChanger: "True"
        })

        PLPhotosDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                punchlistNo: response.data.punchlistNo,

                submitted: true
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    buttonChange(){
        console.log("Yes, Linking Button is succesful");
    }

    render() {
        const {punchlistNo, id, buttonChanger} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>Add New Punch List Item</h2><hr/>
                <div className="row mb-3">
                    <div className="col-sm-8">
                    <h5>Step 2: Add Photos</h5>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
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
                                <div className="form-group col-md-8">
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
                            {!buttonChanger &&
                                <button
                                type="button"
                                onClick={this.savePhotos}
                                className="btn btn-primary mr-2"
                                >Save</button>
                            }{buttonChanger &&
                                <Link
                                to={"/managepunchlist/createaddassignee/" + punchlistNo}
                                type="button"
                                onClick={this.buttonChange}
                                className="btn btn-primary mr-2"
                                >Next: Add Assignees</Link>
                            }
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
        </div>
        );
    }
}

export default CreatePhotos;
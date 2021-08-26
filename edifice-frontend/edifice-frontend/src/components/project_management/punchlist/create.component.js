import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import PunchlistDataService from "./../../../services/project_management/punchlist.service.js";

class ViewAP extends Component {
    constructor(props) {
        super(props);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        // this.onChangePunchmanager = this.onChangePunchmanager.bind(this);
        // this.onChangeAssignee = this.onChangeAssignee.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListItem = this.savePunchListItem.bind(this);
        this.newPunchListItem = this.newPunchListItem.bind(this);

        this.state = {
            no: null,
            status: "",
            duedate: "",
            title: "",
            location: "",
            // punchmanager: "",
            // assignee: "",
            description: "",
            projectId: this.props.match.params.id,  
            submitted: false
        };
    }

    onChangeDuedate(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    savePunchListItem() {
        console.log("click kala");  
        var data = {
            no: this.state.no,
            status: this.state.status,
            duedate: this.state.duedate,
            title: this.state.title,
            location: this.body.location,
            // punchmanager: this.state.punchmanager,
            // assignee: this.state.assignee,
            description: this.state.description,
            projectId: this.state.projectId
        };

        PunchlistDataService.create(data).then(response => {
            this.setState({
                no: response.data.no,
                status: response.data.status,
                duedate: response.data.duedate,
                title: response.data.title,
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
            status: "",
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

    render() {
        return (
        <div className="">
            {this.state.submitted ? (
                <div>
                    <h4>Category details successfully submitted!</h4>
                </div>
            ) : (
            <div className="">
                <h2>Add New Punch List Item</h2><hr/>
                <div className="mb-3">
                    <div>
                        <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" id="detailsT" data-toggle="tab" href="#det" aria-controls="det" aria-selected="true">Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="assigneesT" data-toggle="tab" href="#assign" aria-controls="assign" aria-selected="true">Assignees</a>
                        </li>
                        </ul>
                        
                        <div class="tab-content" id="myTabContent">
                        
                            <div class="tab-pane fade show active" id="det" role="tabpanel" aria-labelledby="Details">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label htmlFor="">Status</label>
                                            <input
                                                className="form-control"
                                                name="status"
                                                type="text"
                                                value="Initiated"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="">Location</label>
                                            <input
                                                className="form-control"
                                                name="location"
                                                value={this.state.location}
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-3">
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
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
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

                                    <div class="accordion mt-2" id="accordionExample">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Link Drawings</button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <a href="#" className="btn btn-success mt-2 mr-2">Add Drawings</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Link Photos</button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <a href="#" className="btn btn-success mt-2 mr-2">Add photos</a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <a href="#" className="btn btn-primary mt-2 mr-2">Next: Add Assignees</a>
                                    <a href="/punchlist" className="">Cancel</a>
                                </form>
                            </div>          
                            
                            <div class="tab-pane fade" id="assign" role="tabpanel" aria-labelledby="Assignees">
                                <div className="row">
                                    <div className="col-sm-3 mr-2">
                                        <Card style={{ width: '18rem' }} className="mt-2">
                                            <Card.Body>
                                                <a href="#" className="btn btn-success">Add Assignees</a>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <a href="/punchlist" className="btn btn-primary mt-2 mr-2">Save</a>
                                <a href="/punchlist" className="">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
        );
    }
}

export default ViewAP;
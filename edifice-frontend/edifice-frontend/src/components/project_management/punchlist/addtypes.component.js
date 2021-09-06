import React, { Component } from "react";
import PunchListTypesDataService from "./../../../services/project_management/punchlisttypes.service.js";

class CreatePLTT extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListType = this.savePunchListType.bind(this);
        this.newPunchListType = this.newPunchListType.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            projectId: this.props.match.params.id,
            submitted: false
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

    savePunchListType() {
        console.log("11111");
        var data = {
            title : this.state.title,
            description: this.state.description,
            projectId: this.state.projectId
        };

        PunchListTypesDataService.create(data)
        .then(response => {
            this.setState({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            projectId: response.data.projectId,
            submitted: true
            });
        })
    }

    newPunchListType() {
        this.setState({
            no: null,
            title: "",
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
                    <div>
                        <h4>Punch List Type added successfully!</h4>
                        <button className="btn btn-success" onClick={this.newPunchListType}>Add Another punch list type</button>
                    </div>
                </div>
            ) : (
            <div className="">
                <h2>Add New Punch List Type</h2><hr/>
                <div className="container">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="">Title</label>
                            <input 
                                className="form-control" 
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                required
                            />
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Description</label>
                            <input 
                                className="form-control" 
                                type="text"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                required
                            />
                        </div>
                        <div className="form-group col-md-1">
                            <label htmlFor="">.</label>
                            <button
                                className="btn btn-primary"
                                onClick={this.savePunchListType}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
        );
    }
}

export default CreatePLTT;
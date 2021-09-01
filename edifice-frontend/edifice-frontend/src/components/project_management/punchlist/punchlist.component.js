import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PunchlistDataService from "./../../../services/project_management/punchlist.service.js";
import PunchListTypesDataService from "./../../../services/project_management/punchlisttypes.service.js";

class PunchList extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListTypes = this.savePunchListTypes.bind(this);
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

    savePunchListTypes() {
        console.log("save wuna");
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
                <div>
                <h2>Punch Lists</h2><hr/>
                <div className="container row">
                    <div className="container col-3 mb-2">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem'}} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>1</h1></Card.Title>
                                <Card.Text>Initiated</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="container col-3">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem'}} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>1</h1></Card.Title>
                                <Card.Text>Work Required</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="container col-3">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem'}} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>2</h1></Card.Title>
                                <Card.Text>Ready for review</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="container col-3">
                        <Card bg={'success'} text={'white'} style={{ width: '14rem'}} className="mb-2">
                            <Card.Body>
                                <Card.Title><h1>0</h1></Card.Title>
                                <Card.Text>Ready to Close</Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                <h4>Punch List Types</h4><hr/>
                <form action="">
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
                            <button className="btn btn-primary" onClick={this.savePunchListTypes}>Add</button>
                        </div>
                    </div>
                    <a href="/managepunchlist/createtype" className="btn btn-primary mt-2">+ Add Another Punch List Type</a>
                </form>
                <h4>Punch Lists Items</h4><hr/>
                <ul className="list-group">
                    <li className="list-group-item ">
                        <a href="/managepunchlist/view" style={{ 'text-decoration': 'none'}}>1 - Replace the Broken Switch Plate</a>
                    </li>
                    <li className="list-group-item ">
                        <a href="#" style={{ 'text-decoration': 'none'}}>2 - Paint Touch up</a>
                    </li>
                    <li className="list-group-item ">
                        <a href="#" style={{ 'text-decoration': 'none'}}>3 - Missing Bolts</a>
                    </li>
                    <li className="list-group-item ">
                        <a href="#" style={{ 'text-decoration': 'none'}}>4 - Door Frame Damage</a>
                    </li>
                </ul>
                <a href="/managepunchlist/create" className="btn btn-primary mt-2">+ Add Another Punch List Item</a>
                </div>
                )}
            </div>
        );
    }
}

export default PunchList;
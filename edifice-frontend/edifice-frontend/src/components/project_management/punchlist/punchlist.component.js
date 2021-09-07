import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import PunchListTypesDataService  from "./../../../services/project_management/punchlisttypes.service.js";

class PunchList extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListType = this.savePunchListType.bind(this);
        this.newPunchListType = this.newPunchListType.bind(this);
        this.retrievePLT = this.retrievePLT.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            projectId: this.props.match.params.id,
            pltypes: [],
            currentIndex: -1,
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
        console.log("save wuna");
        var data = {
            title : this.state.title,
            description: this.state.description,
            projectId: this.props.match.params.id
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
        console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        window.location.reload();
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

    componentDidMount() {
        this.retrievePLT(this.props.match.params.id);
    }

    retrievePLT(projectId){
        console.log("retrievePLT ekata aawa");
        PunchListTypesDataService.getAll(projectId)
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

    render() {
        const {projectId, pltypes, currentIndex} = this.state;
        console.log(projectId);
        return (
            <div className="">
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
                    <div className="container row">
                        {pltypes && pltypes.map((plt, index) => (
                            <div className={"container col-3" + (index === currentIndex ? "active" : "")} key={index}>
                                <Link to={"/punchlist/viewtype/" + plt.id}>
                                    <Card
                                        bg={'light'}
                                        text={'dark'}
                                        style={{ width: '17rem' }}
                                        className="bg-light mb-2"
                                        variant="outline"
                                    >
                                        <Card.Body>
                                            <Card.Title><h4>{plt.title}</h4></Card.Title>
                                            <Card.Text>{plt.description == "" ? "No Description" : plt.description}</Card.Text>
                                            <Card.Link variant="primary">Click to view</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <h4>Punch Lists Items</h4><hr/>
                <ul className="list-group">
                    <li className="list-group-item ">
                        <Link to={"/managepunchlist/view/" + projectId} style={{ 'text-decoration': 'none'}}>1 - Replace the Broken Switch Plate</Link>
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
                <Link to={"/managepunchlist/create/" + projectId} className="btn btn-primary mt-2">+ Add Another Punch List Item</Link>
                </div>
            </div>
        );
    }
}

export default PunchList;
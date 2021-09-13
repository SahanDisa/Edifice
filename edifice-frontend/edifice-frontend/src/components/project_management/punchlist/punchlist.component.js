import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import PunchListTypesDataService  from "./../../../services/project_management/punchlisttypes.service.js";
import PunchlistDataService  from "./../../../services/project_management/punchlist.service.js";

class PunchList extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.savePunchListType = this.savePunchListType.bind(this);
        this.newPunchListType = this.newPunchListType.bind(this);
        this.retrievePLT = this.retrievePLT.bind(this);
        this.retrievePL = this.retrievePL.bind(this);

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

    componentDidMount() {
        this.retrievePLT(this.props.match.params.id);
        this.retrievePL(this.props.match.params.id);
    }

    retrievePLT(projectId){
        console.log("retrievePLT ekata aawa");
        PunchListTypesDataService.getAll(projectId)
        .then(response => {
            this.setState({
                pltypes: response.data
            });
        });
    }

    retrievePL(projectId){
        console.log("retrievePL ekata aawa");
        PunchlistDataService.getAll(projectId)
        .then(response => {
            this.setState({
                plis: response.data
            });
        });
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

    render() {
        const {projectId, pltypes, plis, currentIndex} = this.state;
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
                <h4 className="mt-2">Punch List Types</h4><hr/>
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
                            <div className={"container col-3"} key={index}>
                                <Link 
                                to={"/viewtype/"+plt.id}
                                // to={"/punchlist/viewtype/" + plt.id} 
                                style={{'text-decoration': 'none'}}>
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
                <h4 className="mt-3">Punch Lists Items</h4><hr/>
                {/* <div className="container md-6"> */}
                    <ul className="list-group">
                        {plis && plis.map((plti, index) => (
                            <li className={"list-group-item" + (index === currentIndex ? "active" : "")} key={index}>
                                <div className="container row">
                                    <div className="col-9">
                                        <Link to={"/view/" + plti.no} style={{ 'text-decoration': 'none'}} >
                                            {plti.no + " - " + plti.title}
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <h6>{
                                            plti.status == "Initiated" ? "Initiated 🟡":
                                            plti.status == "WIP" ? "Work in Progress 🟠":
                                            plti.status == "RFR" ? "Ready to Review 🔵":
                                            plti.status == "WNA" ? "Work not Accepted 🔴": "All work Completed 🟢"    
                                        }</h6>
                                    </div>                               
                                </div>
                            </li>
                        ))}
                    </ul>
                {/* </div> */}
                <Link to={"/managepunchlist/create/" + projectId} className="btn btn-primary mt-2">+ Add Another Punch List Item</Link>
                </div>
            </div>
        );
    }
}

export default PunchList;
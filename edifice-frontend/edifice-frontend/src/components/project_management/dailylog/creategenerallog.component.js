import React, { Component } from "react";
import { Link } from "react-router-dom";
import DLCallService from "../../../services/project_management/dlcall.service.js";
import DLQuestionsService from "../../../services/project_management/dlquestions.service.js";
import Table from 'react-bootstrap/Table';

class CreateDGL extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeQuestions = this.onChangeQuestions.bind(this);
        this.onChangeisHappened = this.onChangeisHappened.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveGeneralLog = this.saveGeneralLog.bind(this);
        this.retrieveQuestions = this.retrieveQuestions.bind(this);
        this.state = {
            questions: [],
            id: null,
            date: "",
            questions: "",
            isHappened: "",
            description: "",
            projectId: this.props.match.params.id,
            submitted: false
        };
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeQuestions(e) {
        this.setState({
            questions: e.target.value
        });
    }

    onChangeisHappened(e) {
        this.setState({
            isHappened: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveGeneralLog() {
        var data = {
            date: this.status.date,
            questions: this.status.questions,
            isHappened: this.status.isHappened,
            description: this.status.description,
            projectId: this.props.match.params.id
        };

        DLCallService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                date: response.data.date,
                questions: response.data.questions,
                isHappened: response.data.isHappened,
                description: response.data.description,
                projectId: response.data.projectId,

                submitted: true
            });
            console.log("save function service ekata enawa");
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    componentDidMount() {
        this.retrieveQuestions(this.props.match.params.id);
    }

    retrieveQuestions(id){
        DLQuestionsService.getAll(id)
        .then(response => {
            this.setState({
                questions: response.data
            });
            console.log("questions tika ganna aawa");
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    render() {
        const {projectId, questions} = this.state;
        return (
        <div className="">
            <div className="">
                <h2>Add New General Log</h2><hr/>
                <div className="">
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label htmlFor="">Date</label>
                            <input
                                className="form-control"
                                name="Date"
                                value={this.state.date}
                                onChange={this.onChangeDate}
                                type="date"
                                required
                            />
                        </div>
                    </div>
                    <Table striped bordered hover variant="" responsive>
                        <thead>
                            <tr>
                                <th>Questions</th>
                                <th>Yes</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions && questions.map((qu, index) => (
                                <tr key={index}>
                                    <td>{qu.questions}</td>
                                    <td>
                                        <input
                                            className="form-control"
                                            name="ishappened"
                                            type="checkbox"
                                            // value={this.state.questions}
                                            onChange={this.onChangeisHappened}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            name="questions"
                                            type="text"
                                            value={this.state.questions}
                                            onChange={this.onChangeQuestions}
                                            required
                                        />                                     
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <hr />
                    <button
                        type="button"
                        onClick={this.saveGeneralLog}
                        className="btn btn-primary mr-2"
                    >Save</button>
                    <Link to={"/dailylog/"+projectId} className="">Cancel</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateDGL;
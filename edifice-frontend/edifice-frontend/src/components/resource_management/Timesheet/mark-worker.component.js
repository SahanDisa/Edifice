import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import WorkerDataService from "./../../../services/worker.service";

class EditWorker extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.updateWorker = this.updateWorker.bind(this);

        this.state = {
            //crews: [],
            //workers: [],
            //currentIndex: -1,
            //content: "",
            currentWorker: {
                wId: this.props.id,
                firstName: this.props.fName,
                lastName: this.props.lName,
                mobile: this.props.mobile
            }

        };
    }

    onChangeFirstName(e) {
        const firstName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    firstName: firstName
                }
            };
        });
    }

    onChangeMobile(e) {
        const mobile = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    mobile: mobile
                }
            };
        });
    }

    onChangeLastName(e) {
        const lastName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    lastName: lastName
                }
            };
        });
    }

    updateWorker() {
        var data = {
            firstName: this.state.currentWorker.firstName,
            lastName: this.state.currentWorker.lastName,
            mobile: this.state.currentWorker.mobile,
        };
        WorkerDataService.update(this.state.currentWorker.wId, data)
            .then(response => {
                this.setState(prevState => ({
                    currentWorker: {
                        ...prevState.currentWorker,
                    }
                }));
                console.log(response.data);
                window.location.reload();
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentWorker } = this.state;
        return (
            <div>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalCenterTitle">Mark Worker Attendance Details</h5>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor="">Location:</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={currentWorker.wId} />

                        <label htmlFor="">Start Time:</label>
                        <input
                            className="form-control"
                            type="time"
                            required
                            value={currentWorker.firstName}
                            onChange={this.onChangeFirstName} />

                        <label htmlFor="">Lunch Time:</label>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        value={currentWorker.lastName}
                                        onChange={this.onChangeLastName} />
                                </div>
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        value={currentWorker.lastName}
                                        onChange={this.onChangeLastName} />
                                </div>

                            </div>
                        </div>
                        <label htmlFor="">Tea Time:</label>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        value={currentWorker.lastName}
                                        onChange={this.onChangeLastName} />
                                </div>
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        placeholder="start time"
                                        value={currentWorker.lastName}
                                        onChange={this.onChangeLastName} />
                                </div>

                            </div>
                        </div>

                        <label htmlFor="">Leave Time:</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={currentWorker.mobile}
                            onChange={this.onChangeMobile} />
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="button"
                        className="btn btn-success"
                        data-dismiss="modal"
                        onClick={this.updateWorker}>
                        Save
                    </button>
                </Modal.Footer>
            </div>

        );
    }
}

export default EditWorker;

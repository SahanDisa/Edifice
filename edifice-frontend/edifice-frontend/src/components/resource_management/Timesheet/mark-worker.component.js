import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import WorkedHoursDataService from "./../../../services/worked-hours.service";

class EditWorker extends Component {
    constructor(props) {
        super(props);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeLunchStart = this.onChangeLunchStart.bind(this);
        this.onChangeLunchStop = this.onChangeLunchStop.bind(this);
        this.onChangeTeaStart = this.onChangeTeaStart.bind(this);
        this.onChangeTeaStop = this.onChangeTeaStop.bind(this);
        this.onChangeStop = this.onChangeStop.bind(this);
        this.updateWorker = this.updateWorker.bind(this);

        this.state = {
            //crews: [],
            //workers: [],
            //currentIndex: -1,
            //content: "",
            currentWorker: {
                id: this.props.id,
                location: this.props.location,
                start: this.props.start,
                lunch_start: this.props.lunch_start,
                lunch_stop: this.props.lunch_stop,
                tea_start: this.props.tea_start,
                tea_stop: this.props.tea_stop,
                stop: this.props.stop

            }

        };
    }

    onChangeLocation(e) {
        const location = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    location: location
                }
            };
        });
    }

    onChangeStart(e) {
        const start = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    start: start
                }
            };
        });
    }

    onChangeLunchStart(e) {
        const lunchStart = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    lunch_start: lunchStart
                }
            };
        });
    }

    onChangeLunchStop(e) {
        const lunchStop = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    lunch_stop: lunchStop
                }
            };
        });
    }

    onChangeTeaStart(e) {
        const teaStart = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    tea_start: teaStart
                }
            };
        });
    }

    onChangeTeaStop(e) {
        const teaStop = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    tea_stop: teaStop
                }
            };
        });
    }

    onChangeStop(e) {
        const stop = e.target.value;

        this.setState(function (prevState) {
            return {
                currentWorker: {
                    ...prevState.currentWorker,
                    stop: stop
                }
            };
        });
    }



    updateWorker() {
        var data = {
            location: this.state.currentWorker.location,
            start: this.state.currentWorker.start,
            lunch_start: this.state.currentWorker.lunch_start,
            lunch_stop: this.state.currentWorker.lunch_stop,
            tea_start: this.state.currentWorker.tea_start,
            tea_stop: this.state.currentWorker.tea_stop,
            stop: this.state.currentWorker.stop
        };
        WorkedHoursDataService.update(this.props.id, data)
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
                            value={currentWorker.location}
                            onChange={this.onChangeLocation} />

                        <label htmlFor="">Start Time:</label>
                        <input
                            className="form-control"
                            type="time"
                            required
                            value={currentWorker.start}
                            onChange={this.onChangeStart} />

                        <label htmlFor="">Lunch Time:</label>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        value={currentWorker.lunch_start}
                                        onChange={this.onChangeLunchStart} />
                                </div>
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        value={currentWorker.lunch_stop}
                                        onChange={this.onChangeLunchStop} />
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
                                        value={currentWorker.tea_start}
                                        onChange={this.onChangeTeaStart} />
                                </div>
                                <div class="col-6">
                                    <input
                                        className="form-control"
                                        type="time"
                                        required
                                        placeholder="start time"
                                        value={currentWorker.tea_stop}
                                        onChange={this.onChangeTeaStop} />
                                </div>

                            </div>
                        </div>

                        <label htmlFor="">Leave Time:</label>
                        <input
                            className="form-control"
                            type="time"
                            required
                            value={currentWorker.stop}
                            onChange={this.onChangeStop} />
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

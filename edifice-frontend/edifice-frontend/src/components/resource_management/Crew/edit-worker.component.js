import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import cogoToast from "cogo-toast";
import Alert from "react-bootstrap/Alert";

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
      },
      isMobileValid: -1

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

    WorkerDataService.findVaildMobile(e.target.value)
      .then(response => {
        this.setState({
          isMobileValid: response.data.length
        });
      })
      .catch(e => {
        console.log(e);
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

    // if (this.state.currentWorker.mobile.length !== 10) {
    //   cogoToast.error('Invalid mobile number');
    // } else if (this.state.currentWorker.isMobileValid > 1) {
    //   cogoToast.error('Mobile number is already added');
    // } else {

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
        cogoToast.success("Worker Updated successfully!");
        console.log(response.data);
        window.location.reload();

      })
      .catch(e => {
        console.log(e);
      });
    // }
  }

  render() {
    const { currentWorker, isMobileValid } = this.state;
    return (
      <div>
        <Modal.Header closeButton>
          <h5 className="modal-title" id="exampleModalCenterTitle">Edit Worker Details</h5>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="">Id</label>
            <input
              className="form-control"
              type="text"
              required
              value={currentWorker.wId}
              disabled />

            <label htmlFor="">First Name</label>
            <input
              className="form-control"
              type="text"
              required
              value={currentWorker.firstName}
              onChange={this.onChangeFirstName} />
            <br />

            <label htmlFor="">Last Name</label>
            <input
              className="form-control"
              type="text"
              required
              value={currentWorker.lastName}
              onChange={this.onChangeLastName} />
            <br />

            <label htmlFor="">Mobile</label>
            <input
              className="form-control"
              type="number"
              required
              value={currentWorker.mobile}
              onChange={this.onChangeMobile} />
            <br />

            {/* 
            <div className="form-group">
              {this.state.currentWorker.mobile.length === 10 || this.state.currentWorker.mobile.length === 0 || this.state.currentWorker.mobile.length === 9 ?
                (isMobileValid > 1) ?
                  <Alert variant="danger">
                    Mobile number is already added
                  </Alert> : "" :
                <Alert variant="danger">
                  Invalid mobile number
                </Alert>}
            </div> */}
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
            onClick={this.updateWorker}>
            Update
          </button>
        </Modal.Footer>
      </div>

    );
  }
}

export default EditWorker;

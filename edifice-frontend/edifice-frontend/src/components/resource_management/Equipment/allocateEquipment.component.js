import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

import ProjectDataService from "./../../../services/project.service";
import EquipmentDataService from "./../../../services/equipment.service";

class AllocateEquip extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);
    this.updateEquipment = this.updateEquipment.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);
    this.state = {
      currentEquipment: {
        projectId: "",
        code: this.props.code
      },
      projects: [],

    }

  };

  componentDidMount() {
    this.retrieveProjects();
  }

  onChangeProject(e) {
    const projectId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentEquipment: {
          ...prevState.currentEquipment,
          projectId: projectId
        }
      };
    });
  }

  retrieveProjects() {
    ProjectDataService.getAll()
      .then(response => {
        this.setState({
          projects: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateEquipment() {
    var data = {
      projectId: this.state.currentEquipment.projectId,
    };
    EquipmentDataService.update(this.props.code, data)
      .then(response => {
        this.setState(prevState => ({
          currentEquipment: {
            ...prevState.currentEquipment,
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
    return (
      <div>
        <Modal.Header closeButton>
          <h5 className="modal-title" id="exampleModalCenterTitle">Select Project</h5>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <input
                  className="form-control"
                  type="text"
                  required
                  onChange={this.onChangeProject}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.updateEquipment}>
            Assign
          </button>
        </Modal.Footer>
      </div>

    );
  }
}
export default AllocateEquip;
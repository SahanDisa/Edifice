import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

import ProjectDataService from "./../../../services/project.service";
import EquipmentDataService from "./../../../services/equipment.service";

class AllocateEquip extends Component {
    constructor(props) {
        super(props);
        this.updateEquipment = this.updateEquipment.bind(this);
        this.state = {
            currentEquipment: {
                projectId: this.props.projectId,
                code: this.props.code
            },
            projectId: this.props.projectId,
            code: this.props.code
        }

    };

    updateEquipment() {
        var data = {
            projectId: null,
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
        const { code, projectId } = this.state;
        return (
            <div>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p>Are you sure you want to release equipment code: {code} from project {projectId}</p>

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.updateEquipment}>
                        Yes
                    </button>
                </Modal.Footer>
            </div>

        );
    }
}
export default AllocateEquip;
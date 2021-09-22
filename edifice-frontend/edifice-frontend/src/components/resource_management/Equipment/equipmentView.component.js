import React, { Component } from 'react';
import { Link } from "react-router-dom";

import EquipmentDataService from "./../../../services/equipment.service";
import EquipmentCategoryDataService from "./../../../services/equipment-category.service";

import { Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import NewCategory from './new-category.component';
import AddEquip from './new-equipment.component';
import Allocate from './allocateEquipment.component';
import Release from './releaseEquipment.component';


class Equipment extends Component {

    constructor(props) {
        super(props);
        this.retrieveEquipment = this.retrieveEquipment.bind(this);
        this.retrieveEquipmentCategory = this.retrieveEquipmentCategory.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveProjects = this.retrieveProjects.bind(this);

        this.state = {
            equipments: [],
            categorys: [],
            currentIndex: -1,
            searchTitle: "",
            content: "",
            currentEquipment: "",
            projects: [],
            id: this.props.match.params.id
        };
    }

    componentDidMount() {
        this.retrieveEquipment(this.props.match.params.id);
        this.retrieveEquipmentCategory();
        this.retrieveProjects();
    }

    retrieveProjects() {
        EquipmentDataService.getAllProjects()
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

    retrieveEquipment(id) {
        EquipmentDataService.getAllEquipmentProjects(id)
            .then(response => {
                this.setState({
                    equipments: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    retrieveEquipmentCategory() {
        EquipmentCategoryDataService.getAll()
            .then(response => {
                this.setState({
                    categorys: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    searchTitle() {
        EquipmentCategoryDataService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    categorys: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { equipments, id, categorys, searchTitle, currentEquipment, projects } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col" >
                        <h2>EQUIPMENTS</h2>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to="/home">
                                Home
                            </Link>
                            <Link color="inherit" to={"/projectmanagementhome/" + id}>
                                App Dashboard
                            </Link>
                            <Link color="textPrimary" to={"/equipView/" + id} aria-current="page">
                                Equipments
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
                <hr />
                <br />

                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Equipment Category"
                                value={searchTitle}
                                onChange={this.onChangeSearchTitle}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={this.searchTitle}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">
                            <h5>Categories</h5>
                            <br />
                            <div class="accordion" id="accordionExample">
                                {categorys && categorys.map((category, currentIndex) => (
                                    <div class="card" key={category.id}>
                                        <div class="card-header" id="headingOne">

                                            <h2 class="mb-0">
                                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${currentIndex}`} aria-expanded="true" aria-controls="collapseOne">{category.name}</button>
                                            </h2>
                                        </div>
                                        <div id={`collapse${currentIndex}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div className="">
                                                    <Table responsive>
                                                        <thead>
                                                            <tr>
                                                                <th>Code</th>
                                                                <th>Condition</th>
                                                                <th>Issue Date</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {equipments && equipments.map((equipment) => (
                                                                category.id === equipment.equipmentCategoryId ?
                                                                    <tr
                                                                        key={equipment.code}
                                                                    >
                                                                        <td>{equipment.code}</td>
                                                                        <td>{equipment.condition}</td>
                                                                        <td>{equipment.date}</td>
                                                                        <td>{equipment.description}</td>
                                                                    </tr> : ""
                                                            ))}
                                                        </tbody>
                                                        {/*Ends */}
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                </div >

                {/* New Caregory Starts */}
                <div div className="modal fade" id="newCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                    <NewCategory />
                </div >
                {/* New Caregory Ends */}

                {/* New Equipment Starts */}
                <div className="modal fade" id="addEquip" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddEquip />
                </div>
                {/* New Equipment Ends */}

                {/* allocate Starts */}
                <Modal show={this.state.isAllocateOpen} onHide={this.closeAllocateModal}>
                    <Allocate
                        code={currentEquipment.code} />
                </Modal>

                {/* release Starts */}
                <Modal show={this.state.isReleaseOpen} onHide={this.closeReleaseModal}>
                    <Release
                        code={currentEquipment.code}
                        projectId={currentEquipment.projectId} />
                </Modal>
            </div >
        );
    }
}

export default Equipment;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import ActionPlanService from "../../../services/project_management/actionplan.service";
import Card from "react-bootstrap/Card";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Alert from "react-bootstrap/Alert";

export default class ActionPlan extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveActionPlanCategory = this.saveActionPlanCategory.bind(this);
    this.state = {
      id: null,
      title: "",
      description: "",
      projectId: this.props.match.params.id,
      actionplans: [],
      currentIndex: -1,
      isTitleValid: 0,

      submitted: false,
    };
  }
  componentDidMount() {
    this.retriveActionPlanTypes(this.props.match.params.id);
  }

  retriveActionPlanTypes(id) {
    ActionPlanService.getAll(id)
      .then((response) => {
        this.setState({
          actionplans: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
    ActionPlanTypeDataService.findByTitle(e.target.value, this.props.match.params.id)
    .then((response) => {
      this.setState({
        isTitleValid: response.data.length,
      });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveActionPlanCategory() {
    console.log("click kala");
    var data = {
      title: this.state.title,
      description: this.state.description,
      projectId: this.props.match.params.id,
    };

    ActionPlanTypeDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          projectId: response.data.projectId,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { actionplans, aptypes, currentIndex, projectId, isTitleValid } =
      this.state;
    return (
      <div>
        <h2>ACTION PLAN HOME</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/home">
            Home
          </Link>
          <Link color="inherit" to={"/projectmanagementhome/" + projectId}>
            App Dashboard
          </Link>
          <Link color="inherit" aria-current="page" className="disabledLink">
            Action Plan
          </Link>
        </Breadcrumbs>
        <hr />
        <div>
          <h4 className="mt-2">Action Plan Types</h4>
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
                  onClick={this.saveActionPlanCategory}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                {this.state.title == "" ? "" : isTitleValid > 0 ? 
                  <Alert variant="danger">Title is already taken</Alert> :
                  <Alert variant="success">Title is avaliable to use</Alert>
                }
              </div>
            </div>
          </div>
          <hr />
          <h4>Action Plans</h4>
          <div>
            <Link
              className="btn btn-primary mb-3"
              to={"/addactionplan/" + projectId}
            >
              + Add Action Plan
            </Link>
          </div>
          <div className="container">
            {actionplans &&
              actionplans.map((api, index) => (
                <div
                  className={
                    "container mb-3" + (index === currentIndex ? "active" : "")
                  }
                  key={index}
                >
                  <Card style={{ height: "10rem" }}>
                    <Card.Header>
                      <div className="row">
                        <div className="col-9">
                          <Link
                            to={"/actionplansingle/" + projectId + "/" + api.id}
                            style={{ "text-decoration": "none" }}
                          >
                            <h5>{api.title}</h5>
                          </Link>
                        </div>
                        <div className="col-3">
                          <Link
                            to={
                              "/viewactionplantype/" + projectId + "/" + api.id
                            }
                            style={{ "text-decoration": "none" }}
                          >
                            <h6>Action Type: {api.actiontype}</h6>
                          </Link>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <div className="row">
                          <div className="col-6">
                            <p>Description : {api.description} </p>
                            <p>Location : {api.location}</p>
                          </div>
                          <div className="col-6">
                            <p>Plan Manager : {api.planmanager}</p>
                            {api.isApproved == false
                              ? "Not Approved 🔴"
                              : "Approved 🟢"}
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

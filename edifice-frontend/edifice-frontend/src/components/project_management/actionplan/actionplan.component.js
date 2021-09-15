import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import ActionPlanService from "../../../services/project_management/actionplan.service";
import Card from 'react-bootstrap/Card';

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
        content: "",

        submitted: false
      };
    }
    componentDidMount() {
      this.retriveActionPlanTypes(this.props.match.params.id);
    }

    retriveActionPlanTypes(id){
      ActionPlanService.getAll(id)
      .then(response => {
          this.setState({
            actionplans: response.data
          });
          console.log(response.data);
      })
      .catch(e => {
        console.log(e);
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

    saveActionPlanCategory() {
      console.log("click kala");  
      var data = {
        title : this.state.title,
        description: this.state.description,
      };

      ActionPlanTypeDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      window.location.reload();
    }

    render() {
        const { actionplans, aptypes, currentIndex, projectId } = this.state;
        return (
          <div>
            <div className="container row">
                <div className="col-12">
                    <h2>Action Plan</h2>
                    <h6>Ensure that unique company and project specific requirements are clearly defined, centralized and organized</h6>
                </div>
            </div><hr/>
          <div className="container">
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
                        >Add</button>
                    </div>
                </div>
            </div>
            <h4>Action Plans</h4><hr/>
            <div className="container">
              <Link className="btn btn-primary mb-3" to={"/addactionplan/"+projectId}>+ Add another Action Plan Item</Link>
            </div>
            <div className="container">
              {actionplans && actionplans.map((api, index) => (
                <div className={"container mb-3" + (index === currentIndex ? "active" : "")} key={index}>
                    <Card style={{ height: '10rem' }}>
                        <Card.Header>
                        <div className="row">
                          <div className="col-11">
                            <Link to={"/actionplansingle/" + api.id} style={{'text-decoration': 'none'}}>
                              <h5>{api.title}</h5>
                            </Link>
                          </div>
                          <div className="col-1">
                            <Link to={"/viewactionplantype/"+ api.id} style={{'text-decoration': 'none'}}>
                              <p>{api.actiontype}</p>
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
                              {api.isapprove == false ? "Not Approved 🔴" : "Approved 🟢"}
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
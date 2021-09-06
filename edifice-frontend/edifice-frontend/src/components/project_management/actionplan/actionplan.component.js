import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanTypeService from "../../../services/project_management/actionplantype.service";
import ActionPlanService from "../../../services/project_management/actionplan.service";
import Card from 'react-bootstrap/Card';
import drawingcover from "././../../../assets/PM/photos/drawing.jpg";

export default class Drawings extends Component {
    constructor(props) {
      super(props);
      this.state = {
        actionplans: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
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

    render() {
        const { actionplans, currentIndex,id } = this.state;
        return (
        <div>
            <div className="container row">
                <div className="col-12">
                    <h2>Action Plan</h2>
                    <h6>Ensure that unique company and project specific requirements are clearly defined, centralized and organized</h6>
                </div>
            <hr></hr>
            </div>
            <div className="container">
                
                <Link className="btn btn-primary mr-2" to={"/addactionplantype/"+id}>
                Create Action Plan Type
                </Link>
                <Link className="btn btn-primary" to={"/addactionplan/"+id}>
                Create new Action Plan
                </Link>
                <hr></hr>
            </div>
        <div className="container">
        <h3>Action Plans</h3>
        <div className="container">
            {actionplans &&
              actionplans.map((actionplan, index) => (
              <div
                className={
                  "container m-2" +
                  (index === currentIndex ? "active" : "")
                }
                key={index}
                >
                {/* unit data */}
                <Link to={"/viewdrawingcategory/"+actionplans.id} style={{'text-decoration': 'none'}}>
                <Card border="dark" style={{ width: '55rem' }}>
                <Card.Header>{actionplan.actiontype}</Card.Header> 
                <Card.Body>
                  <Card.Title><h3>{actionplan.title}</h3></Card.Title>
                  <Card.Text>
                  <p>Description : {actionplan.description} </p>
                  <p>Location : {actionplan.location}</p>
                  <p>Plan Manager : {actionplan.planmanager}</p>
                  {actionplan.isapprove == false ? "Not Approved 🔴" : "Approved 🟢"} 
                  </Card.Text>
                </Card.Body> 
                </Card>
                </Link>
                </div>
            ))}
            </div>
        </div>
        <hr></hr>
        
        </div>
        );
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import ActionPlanDataService from "../../../services/project_management/actionplan.service";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

export default class viewAPType extends Component {
    constructor(props) {
      super(props);
      this.retrieveCategoryAP = this.retrieveCategoryAP.bind(this);
      this.state = {
        id: this.props.match.params.id,
        actionplans: [],
        title: "",
        description: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retriveCategoryInfo(this.props.match.params.id);
      this.retrieveCategoryAP(this.props.match.params.id);
    }

    retriveCategoryInfo(id){
      ActionPlanTypeDataService.getOne(id)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          projectId: response.data.projectId,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }

    retrieveCategoryAP(id) {
      ActionPlanDataService.getType(id)
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
        const { id, title, description, actionplans, currentIndex } = this.state;
        return (
            <div>
                <h2>Action Plan Category - {title}</h2>
                <p>{description}</p>
                <hr />
                <h3>Action Plan List</h3>
                <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Plan Manager</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {actionplans && actionplans.map((api, index) => (
                        <tr key={index}>
                          <td>{api.id}</td>
                          <td>{api.title}</td>
                          <td>{api.description}</td>
                          <td>{api.planmanager}</td>
                          <td>{api.location}</td>
                          <td>{api.isapprove == 0 ? "🔴 Not Approved": "🟢 Approved"}</td>
                          <td>
                            <Link to={"/updatedrawing/"+api.id+"/"+id}>
                              <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                            </Link>
                            <Link to={"/viewdrawing/"+api.id}>
                              <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                            </Link>
                          </td>    
                        </tr>
                      ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
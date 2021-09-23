import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import ActionPlanDataService from "../../../services/project_management/actionplan.service";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import cogoToast from 'cogo-toast';

export default class viewAPType extends Component {
    constructor(props) {
      super(props);
      this.retrieveCategoryAP = this.retrieveCategoryAP.bind(this);
      this.deleteActionPlan = this.deleteActionPlan.bind(this);
      this.state = {
        id: "",
        title: this.props.match.params.apid,
        projectId: this.props.match.params.id,
        actionplans: [],
        description: ""
      };
    }
  
    componentDidMount() {
      this.retrieveCategoryAP(this.props.match.params.apid);
    }

    retrieveCategoryAP(apid) {
      ActionPlanDataService.getType(apid)
      .then(response => {
        this.setState({
          actionplans: response.data
        });
        console.log(response.data);
      })
    }

    deleteActionPlan(e){
      var data = {
          isDeleted: 1
      }
      ActionPlanDataService.update(e.target.value, data)
      .then(response => {
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
      });
      this.props.history.push("/actionplan/"+ this.props.match.params.id + "/" + this.props.match.params.apid);
      window.location.reload();
      cogoToast.success("Action Plan Deleted Successfully!");
    }

    render() {
        const { title, projectId, actionplans } = this.state;
        console.log(projectId);
        return (
            <div>
                <h2>Action Plan Type - {title}</h2>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to="/home">Home</Link>
                  <Link color="inherit" to={"/projectmanagementhome/" + projectId}>App Dashboard</Link>
                  <Link color="inherit" to={"/actionplan/" + projectId}>Action Plan</Link>
                  <Link color="inherit" aria-current="page" className="disabledLink">View Action Plan Type</Link>
                </Breadcrumbs><hr/>
                <h3 className="mb-3">Action Plan List</h3>
                <Table striped bordered hover variant="" responsive>
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
                            <Link to={"/viewactionplan/" + projectId + "/" + api.id}>
                              <button className="btn btn-success mr-2">Update <UpdateIcon/> </button>
                            </Link>
                            <button className="btn btn-danger" value={api.id} onClick={this.deleteActionPlan}>Delete <DeleteIcon/> </button>
                          </td>    
                        </tr>
                      ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
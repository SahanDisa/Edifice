import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanItemDataService from "../../../services/project_management/actionplanitem.service";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import VisibilityIcon from "@material-ui/icons/Visibility";
import cogoToast from 'cogo-toast';

export default class viewAPItem extends Component {
    constructor(props) {
      super(props);
      this.retrieveItemAP = this.retrieveItemAP.bind(this);
      this.deleteAPItems = this.deleteAPItems.bind(this);
      this.state = {
        actionplansectionId: this.props.match.params.apid,
        projectId: this.props.match.params.id,
        actionplansection: []
      };
    }
  
    componentDidMount() {
      this.retrieveItemAP(this.props.match.params.apid);
    }

    retrieveItemAP(apid) {
        ActionPlanItemDataService.getSection(apid)
        .then(response => {
          this.setState({
            actionplansection: response.data
          });
          console.log(response.data);
        })
    }

    deleteAPItems(e){
      var data = {
          isDeleted: 1
      }
      ActionPlanItemDataService.update(e.target.value, data)
      .then(response => {
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
      });
      this.props.history.push("/actionplan/"+ this.props.match.params.id);
      window.location.reload();
      cogoToast.success("Action Plan Deleted Successfully!");
    }

    render() {
        const { projectId, actionplansection, actionplansectionId } = this.state;
        console.log(actionplansectionId);
        return (
            <div>
                <h2>Action Plan Item</h2>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to="/home">Home</Link>
                  <Link color="inherit" to={"/projectmanagementhome/" + projectId}>App Dashboard</Link>
                  <Link color="inherit" to={"/actionplan/" + projectId}>Action Plan Home</Link>
                  <Link color="inherit" aria-current="page" className="disabledLink">View Action Plan Item</Link>
                </Breadcrumbs><hr/>
                <Table striped bordered hover variant="" responsive>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Assignee</th>
                        <th>Status</th>
                        {/* <th>Section</th> */}
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {actionplansection && actionplansection.map((aps, index) => (
                        <tr key={index}>
                          <td>{aps.title}</td>
                          <td>{aps.description}</td>
                          <td>{aps.assigner}</td>
                          <td>{aps.isCompleted == 0 ? "🔴 Not Completed": "🟢 Completed"}</td>
                          {/* <td>{aps.actionplansectionId}</td> */}
                          <td>
                          <Link to={"/viewapitemsingle/" + projectId + "/" + aps.id}><button className="btn btn-success mr-2">View <VisibilityIcon /></button></Link>
                          <button className="btn btn-danger" value={aps.id} onClick={this.deleteAPItems}>Delete <DeleteIcon/> </button>
                          </td>    
                        </tr>
                      ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
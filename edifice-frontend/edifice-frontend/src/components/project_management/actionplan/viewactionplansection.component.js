import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanSectionDataService from "./../../../services/project_management/actionplansection.service";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Table from "react-bootstrap/Table";
import cogoToast from 'cogo-toast';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from "@material-ui/icons/Delete";

export default class viewAPSection extends Component {
  constructor(props) {
    super(props);
    // this.onChangeReftype = this.onChangeReftype.bind(this);
    // this.onChangeRefid = this.onChangeRefid.bind(this);
    this.onChangeAcceptance = this.onChangeAcceptance.bind(this);
    this.onChangeDuedate = this.onChangeDuedate.bind(this);
    this.retrieveAPSection = this.retrieveAPSection.bind(this);
    this.updateActionPlan = this.updateActionPlan.bind(this);
    this.deleteActionPlan = this.deleteActionPlan.bind(this);
    this.state = {
      apsection: {
        id: null,
        title: "",
        acceptance: "",
        duedate: "",
        actionplanId: this.props.match.params.apid,
      },
      projectId: this.props.match.params.id,
      currentIndex: -1,

      submitted: false,
    };
  }

  componentDidMount() {
    this.retrieveAPSection(this.props.match.params.apid);
  }

  retrieveAPSection(id){
    ActionPlanSectionDataService.get(id)
    .then(response => {
      this.setState({
        apsection: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  onChangeAcceptance(e) {
    const acceptance= e.target.value
    this.setState(function(prevState){
      return {
        apsection: {
          ...prevState.apsection,
          acceptance: acceptance
        }
      }
    });
  }

  onChangeDuedate(e) {
    const duedate= e.target.value
    this.setState(function(prevState){
      return {
        apsection: {
          ...prevState.apsection,
          duedate: duedate
        }
      }
    });
  }

  updateActionPlan(){
    var data = {
        title: this.state.apsection.title,
        acceptance: this.state.apsection.acceptance,
        duedate: this.state.apsection.duedate,
        actionplanId: this.state.apsection.actionplanId
    };

    ActionPlanSectionDataService.update(this.props.match.params.apid, data)
    .then(response => {
      this.setState(prevState => ({
        apsection: {
          ...prevState.apsection,
        }
      }));
      console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
    this.props.history.push("/viewactionplansection/"+ this.props.match.params.id + "/" +this.props.match.params.apid);
    cogoToast.success("Action Plan Section updated Successfully!");
  }

  deleteActionPlan(){
    var data = {
        isDeleted: 1
    }
    ActionPlanSectionDataService.update(this.props.match.params.apid, data)
    .then(response => {
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
    this.props.history.push("/actionplansingle/"+ this.props.match.params.id + "/" +this.props.match.params.apid);
    window.location.reload();
    cogoToast.success("Action Plan Section Deleted Successfully!");
  }

  render() {
    const {projectId, apsection} = this.state;
    return (
      <div className="container">
        <div class="container">
          <h2>Manage Action Plan Section</h2>
          <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">Home</Link>
              <Link color="inherit" to={"/projectmanagementhome/"+ projectId}>App Dashboard</Link>
              <Link color="inherit" to={"/actionplan/" + projectId}>Action Plan</Link>
              <Link color="inherit" to={"/actionplansingle/" + projectId + "/" + apsection.actionplanId}>Action Plan Single Page</Link>
              <Link color="inherit" aria-current="page" className="disabledLink">Manage Action Plan Section</Link>
          </Breadcrumbs><hr/>
          <div className="">
              <div className="form-row">
                  <div className="form-group col-md-4">
                      <label htmlFor="title">Title</label>
                      <input
                          type="text"
                          className="form-control"
                          id="title"
                          readOnly
                          value={apsection.title}
                          name="title"
                      />
                  </div>
                  <div className="form-group col-md-5">
                      <label htmlFor="acceptance">Acceptance</label>
                      <input
                          type="text"
                          className="form-control"
                          id="acceptance"
                          value={apsection.acceptance}
                          onChange={this.onChangeAcceptance}
                          name="acceptance"
                      />
                  </div>
                  <div className="form-group col-md-3">
                      <label htmlFor="duedate">Due Date</label>
                      <input
                          className="form-control"
                          name="duedate"
                          value={apsection.duedate}
                          onChange={this.onChangeDuedate}
                          type="date"
                          required
                      />
                  </div>
              </div>
          </div><hr />
          <button className="btn btn-primary mr-2" id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
          <button className="btn btn-danger mr-2"  id="updateBtn" data-target="#deleteModal" data-toggle="modal">Delete</button>
          <Link to={"/actionplan/" + projectId} className="">Cancel</Link>
        </div>
        {/* Update modal Starts */}
        <div className="modal fade" id="promptModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to update</p>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <a onClick={this.updateActionPlan} className="btn btn-primary pr-3 ml-2 mr-3" data-dismiss="modal"> Yes, Update</a>
                    <a className="btn btn-secondary ml-6 mr-6 pl-3" data-dismiss="modal"> Cancel</a>
                </div>
                </div>
            </div>
        </div>
        {/* Update modal Ends */}
        {/* Delete modal Starts */}
        <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete?</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={this.deleteActionPlan} data-dismiss="modal"> Yes, Delete</a>
                        <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                    </div>
                </div>
            </div>
        </div>
        {/* Delete modal Ends */}
      </div>
    );
  }
}
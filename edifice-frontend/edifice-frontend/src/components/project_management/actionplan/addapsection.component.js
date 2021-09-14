import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanDataService from "./../../../services/project_management/actionplan.service";
import ActionPlanTypeDataService from "../../../services/project_management/actionplantype.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default class AddAPSection extends Component {
  constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAssigner = this.onChangeAssigner.bind(this);
        this.onChangeisCompleted = this.onChangeisCompleted.bind(this);
        this.saveAPsection = this.saveAPsection.bind(this);

        this.state = {
        id: null,
        reftype: "",
        refid: "",
        assigner: "",
        isCompleted: 0,
        actionplansectionId: "",
        // this.props.match.params.id, 
        
        actionplantypes: [],
        currentIndex: -1,
        submitted: false,
        };
    }
    onChangeTitle(e) {
        this.setState({
        reftype: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
        refid: e.target.value
        });
    }

    onChangeAssigner(e) {
        this.setState({
        assigner: e.target.value
        });
    }

    onChangeisCompleted(e) {
        this.setState({
        acceptance: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
        reftype: e.target.value
        });
    }
    
    saveAPsection() {  
        var data = {
            reftype: this.state.reftype,
            refid: this.state.refid,
            assigner: this.state.assigner,
            isCompleted: this.state.isCompleted,
            actionplansectionId: this.state.actionplansectionId
        };

        ActionPlanDataService.create(data)
        .then(response => {
            this.setState({
            id: response.data.id,
            reftype: response.data.reftype,
            refid: response.data.refid,
            assigner: response.data.assigner,
            isCompleted: response.data.isCompleted,
            actionplansectionId: response.data.actionplansectionId,

            submitted: true
        });
            console.log(response.data);
        })
    }
  
    newDrawing() {
        this.setState({
            id: null,
            reftype: "",
            refid: "",
            assigner: "",
            reftype: "",
            acceptance: "",
        //   actionplansectionId: this.props.match.params.id,
            actionplansectionId: 1,
            
            submitted: true
        });
    }

  render() {
    const {actionplansectionId, currentIndex, actionplantypes} = this.state;
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
          <center>
            <h4>Action Plan details successfully submitted!</h4>
            <Link to={"/actionplan/"+actionplansectionId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Back Home
            </Link>
            <Link to={"/addactionplan/"+actionplansectionId} className="btn btn-primary mr-2"  style={{ 'text-decoration': 'none' }}>
              Add Action Plan
            </Link>
          </center>
          </div>
        ) : (
          <div class="container">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add New Action Plan Section</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <div className="">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="reftype">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="reftype"
                                required
                                value={this.state.reftype}
                                onChange={this.onChangeTitle}
                                name="reftype"
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="reftype">Acceptance</label>
                            <input
                                type="text"
                                className="form-control"
                                id="reftype"
                                required
                                value={this.state.acceptance}
                                onChange={this.onChangeAcceptance}
                                name="reftype"
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="duedate">Due Date</label>
                            <input
                                className="form-control"
                                name="duedate"
                                value={this.state.duedate}
                                onChange={this.onChangeDuedate}
                                type="date"
                                min=""
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <label htmlFor="reftype">Ref type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="reftype"
                            required
                            value={this.state.reftype}
                            onChange={this.onChangeLocation}
                            name="reftype"
                        />
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="refid">Ref Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="refid"
                                required
                                value={this.state.refid}
                                onChange={this.onChangeDescription}
                                name="refid"
                            />
                        </div>
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary"data-dismiss="modal" onClick={this.saveAPitem}>Create</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
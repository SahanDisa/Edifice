import React, { Component } from "react";
import PrimeContractsDataService from "./../../../services/prime-contracts.service";

export default class CreatePrimeContracts extends Component{
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeEngineer = this.onChangeEngineer.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEstimatedCompletionDate = this.onChangeEstimatedCompletionDate.bind(this);
    this.onChangeSignedContractReceivedDate = this.onChangeSignedContractReceivedDate.bind(this);
    this.onChangeActualCompletionDate = this.onChangeActualCompletionDate.bind(this);
    this.onChangeDefaultRetainange = this.onChangeDefaultRetainange.bind(this);
    this.onChangeExecuted = this.onChangeExecuted.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeInclusions = this.onChangeInclusions.bind(this);
    this.onChangeExclusions = this.onChangeExclusions.bind(this);
    this.onChangeAttachments = this.onChangeAttachments.bind(this);
    this.savePrimeContract = this.savePrimeContract.bind(this);
  
    this.state = {
      id: null,
      owner: "",
      engineer: "",
      title: "",
      status: "", 
      startDate: "",
      estimatedCompletionDate : "",
      signedContractReceivedDate : "",
      actualCompletionDate : "",
      defaultRetainange :"",
      executed:"",
      description:"",
      inclusions:"",
      exclusions:"",
      attachments:"",
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value
    });
  }

  onChangeEngineer(e) {
    this.setState({
      engineer: e.target.value
    });
  }
  onChangeTitle (e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeStatus (e) {
    this.setState({
      status: e.target.value
    });
  }
  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }onChangeEstimatedCompletionDate(e) {
    this.setState({
      estimatedCompletionDate: e.target.value
    });
  }onChangeSignedContractReceivedDate(e) {
    this.setState({
      signedContractReceivedDate: e.target.value
    });
  }onChangeActualCompletionDate(e) {
    this.setState({
      actualCompletionDate: e.target.value
    });
  }onChangeDefaultRetainange(e) {
    this.setState({
      defaultRetainange: e.target.value
    });
  }onChangeExecuted(e) {
    this.setState({
      executed: e.target.value
    });
  }onChangeDescription(e) {
    this.setState({
     description: e.target.value
    });
  }onChangeInclusions(e) {
    this.setState({
     inclusions: e.target.value
    });
  }onChangeExclusions(e) {
    this.setState({
      exclusions: e.target.value
    });
  }onChangeAttachments(e) {
    this.setState({
      attachments: e.target.value
    });
  } 

  savePrimeContract() {
    console.log("clicked");  
    var data = {
      id: this.state.id,
      owner: this.state.owner,
      engineer: this.state.engineer,
      title: this.state.title,
      status: this.state.status,
      startDate: this.state.startDate,
      estimatedCompletionDate: this.state.estimatedCompletionDate,
      signedContractReceivedDate: this.state.signedContractReceivedDate,
      actualCompletionDate:this.state.actualCompletionDate,
      defaultRetainange:this.state.defaultRetainange,
      executed:this.state.executed,
      description:this.state.description,
      inclusions:this.state.inclusions,
      exclusions:this.state.exclusions,
      attachments:this.state.attachments,
      projectId: this.state.projectId
    };

    PrimeContractsDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
      owner: response.data.owner,
      engineer: response.data.engineer,
      title: response.data.title,
      status:response.data.status,
      startDate:response.data.startDate,
      estimatedCompletionDate: response.data.estimatedCompletionDate,
      signedContractReceivedDate: response.data.signedContractReceivedDate,
      actualCompletionDate:response.data.actualCompletionDate,
      defaultRetainange:response.data.defaultRetainange,
      executed:response.data.executed,
      description:response.data.description,
      inclusions:response.data.inclusions,
      exclusions:response.data.exclusions,
      attachments:response.data.attachments,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {projectId} = this.state;
    return (
    <div>
       <h3>NEW PRIME CONTRACT </h3><hr/>
       <div className="mb-3">
          <h5>General Information</h5>
          </div>
         
          <div className="submit-form">
          <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">#</label> 
              </div>
              <div className="form-group col-md-2">
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value={this.state.id}
                onChange={this.onChangeId}
                name="id"
              />
              </div>
              <div className="form-group col-md-2"></div>
              </div></div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Owner/Client:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="text"
                className="form-control"
                id="owner"
                required
                value={this.state.owner}
                onChange={this.onChangeOwner}
                name="owner"
              />
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Contractor:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="text"
                className="form-control"
                value="Edifice"
              />
              </div>
              </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Architect/Engineer:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="text"
                className="form-control"
                id="engineer"
                required
                value={this.state.engineer}
                onChange={this.onChangeEngineer}
                name="engineer"
              />
              </div>
              </div><hr />
              <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Title:</label>
              </div>
              <div className="form-group col-md-4">
              <input
                type="textarea"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
              </div>
            </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Status:</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" name="status" required id="status" value={this.state.status} onChange={this.onChangeStatus}>
                  <option value="Draft" selected>Draft</option>
                  <option value="Out for Bid">Out for Bid</option>
                  <option value="Out for Signature">Out for Signature</option>
                  <option value="Approved">Approved</option>
                  <option value="Out for Signature">Out for Signature</option>
                  <option value="Complete">Complete</option>
                  <option value="Terminated">Terminated</option>
                </select>
              </div><div className="form-group col-md-2"></div>
              </div><hr />
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Start Date:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="date"
                className="form-control"
                id="startDate"
                required
                value={this.state.startDate}
                onChange={this.onChangeStartDate}
                name="startDate"
              />
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Estimated Completion Date:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="date"
                className="form-control"
                id="estimatedCompletionDate"
                required
                value={this.state.estimatedCompletionDate}
                onChange={this.onChangeEstimatedCompletionDate}
                name="estimatedCompletionDate"
              />
              </div>
              </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Signed Contract Received Date:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="date"
                className="form-control"
                id="signedContractReceivedDate"
                required
                value={this.state.signedContractReceivedDate}
                onChange={this.onChangeSignedContractReceivedDate}
                name="signedContractReceivedDate"
              />
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Actual Completion Date:</label>
              </div>
              <div className="form-group col-md-2">
              <input
                type="date"
                className="form-control"
                id="actualCompletionDate"
                required
                value={this.state.actualCompletionDate}
                onChange={this.onChangeActualCompletionDate}
                name="actualCompletionDate"
              />
              </div>
              </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Default Retainange:</label>
              </div>
              <div className="form-group col-md-1">
              <input
                type="text"
                className="form-control"
                id="defaultRetainange"
                required
                value={this.state.defaultRetainange}
                onChange={this.onChangeDefaultRetainange}
                name="defaultRetainange"
              />
              </div><div className="form-group col-md-1">%</div>
              <div className="form-group col-md-2">
                <label htmlFor="">Executed:</label>
                <input
                type="checkbox"
                className="form-control"
                id="executed"
                required
                value={this.state.executed}
                onChange={this.onChangeExecuted}
                name="executed"
              />
              </div>
             
            </div>
            
            <hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Description:</label>
              </div>
              <div className="form-group col-md-6">
              <input
                type="textarea"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
              </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Inclusions:</label>
              </div>
              <div className="form-group col-md-6">
              <input
                type="textarea"
                className="form-control"
                id="inclusions"
                required
                value={this.state.inclusions}
                onChange={this.onChangeInclusions}
                name="inclusions"
              />
              </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Exclusions:</label>
              </div>
              <div className="form-group col-md-6">
              <input
                type="textarea"
                className="form-control"
                id="exclusions"
                required
                value={this.state.exclusions}
                onChange={this.onChangeExclusions}
                name="exclusions"
              />
              </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="">Attachments:</label>
              </div>
              <div className="form-group col-md-2">
       
        

             </div></div>
            <div className="form-row">
            <button onClick={this.savePrimeContract} className="btn btn-success">
              Create
            </button>&nbsp;&nbsp;
            <button onClick={this.savePrimeContract} className="btn btn-success">
            Cancel
            </button>&nbsp;&nbsp;
            <button onClick={this.savePrimeContract} className="btn btn-success">
            Create & Email
            </button>&nbsp;&nbsp;
            </div><br />
          </div>


    );
  }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default class CreatePrimeContracts extends Component{
  constructor(props) {
    super(props);
    this.onChangeHash = this.onChangeHash.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContractCompany = this.onChangeContractCompany.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    //this.onChangeExecuted = this.onChangeExecuted.bind(this);
    this.onChangeDefaultRetainage = this.onChangeDefaultRetainage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    //this.onChangeAttachments = this.onChangeAttachments.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEstimatedCompletionDate = this.onChangeEstimatedCompletionDate.bind(this);
    this.onChangeActualCompletionDate = this.onChangeActualCompletionDate.bind(this);
    this.onChangeSignedContractReceivedDate = this.onChangeSignedContractReceivedDate.bind(this);
    this.onChangeInclusions = this.onChangeInclusions.bind(this);
    this.onChangeExclusions = this.onChangeExclusions.bind(this);
    this.saveCommitment = this.saveCommitment.bind(this);
    this.newCommitment = this.newCommitment.bind(this);

    this.state = {
      id: null,
      hash: "",
      title: "",
      contractCompany: "",
      status: "", 
      //executed:"",
      defaultRetainage :"",
      description:"",
      /*attachments:"",*/
      startDate: "",
      estimatedCompletionDate : "",
      actualCompletionDate : "",
      signedContractReceivedDate : "",
      inclusions:"",
      exclusions:"",
      
      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeHash(e) {
    this.setState({
      hash: e.target.value
    });
  }
  onChangeTitle (e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeContractCompany(e) {
    this.setState({
      contractCompany: e.target.value
    });
  }
  onChangeStatus (e) {
    this.setState({
      status: e.target.value
    });
  }
 /* onChangeExecuted(e) {
    this.setState({
      executed: e.target.value
    });
  }*/
  onChangeDefaultRetainage(e) {
    this.setState({
      defaultRetainage: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
     description: e.target.value
    });
  }
 /* onChangeAttachments(e) {
    this.setState({
      attachments: e.target.value
    });
  }*/
  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }onChangeEstimatedCompletionDate(e) {
    this.setState({
      estimatedCompletionDate: e.target.value
    });
  }
  onChangeActualCompletionDate(e) {
    this.setState({
      actualCompletionDate: e.target.value
    });
  }
  onChangeSignedContractReceivedDate(e) {
    this.setState({
      signedContractReceivedDate: e.target.value
    });
  }onChangeInclusions(e) {
    this.setState({
     inclusions: e.target.value
    });
  }onChangeExclusions(e) {
    this.setState({
      exclusions: e.target.value
    });
  } 

  saveCommitment() {
    console.log("clicked");  
    var data = {
      hash: this.state.hash,
      title: this.state.title,
      contractCompany: this.state.contractCompany,     
      status: this.state.status,
      //executed:this.state.executed,
      defaultRetainage:this.state.defaultRetainage,
      description:this.state.description,
      //attachments:this.state.attachments,
      startDate: this.state.startDate,
      estimatedCompletionDate: this.state.estimatedCompletionDate,
      actualCompletionDate:this.state.actualCompletionDate,
      signedContractReceivedDate: this.state.signedContractReceivedDate,
      inclusions:this.state.inclusions,
      exclusions:this.state.exclusions,
      projectId: this.state.projectId
    };

    CommitmentDataService.create(data)
      .then(response => {
        this.setState({
        hash: response.data.hash,
        title: response.data.title,
      contractCompany: response.data.contractCompany,      
      status:response.data.status,
      //executed:response.data.executed,
      defaultRetainage:response.data.defaultRetainage,
      description:response.data.description,
      //attachments:response.data.attachments,
      startDate:response.data.startDate,
      estimatedCompletionDate: response.data.estimatedCompletionDate,
      actualCompletionDate:response.data.actualCompletionDate,
      signedContractReceivedDate: response.data.signedContractReceivedDate,
      inclusions:response.data.inclusions,
      exclusions:response.data.exclusions,
     
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCommitment() {
    this.setState({
      id: null,
      hash: "",
      title: "",
      contractCompany: "",
      status: "", 
      //executed:false,
      defaultRetainage :"",
      description:"",
      //attachments:"",
      startDate: "",
      estimatedCompletionDate : "",
      actualCompletionDate : "",
      signedContractReceivedDate : "",
      inclusions:"",
      exclusions:"",
      projectId: this.props.match.params.id,

      submitted: false
    });
  }

  render() {
    const {projectId} = this.state;
    return (
        <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCommitment}>
             Create Another Commitment
            </button>&nbsp;&nbsp;
            <Link  to={"/commitment/"+projectId} className="btn btn-success">View Commitments</Link>
          </div>
        ) : (
            <div class="container">
       <h2>Create New Commitment </h2><hr/>
       <div className="row">
       <div className="col-sm-6">
          <div className="form-group">
         
                <label htmlFor="hash"># :</label> 
             
  
              <input
                type="text"
                className="form-control"
                id="hash"
                required
                value={this.state.hash}
                onChange={this.onChangeHash}
                name="hash"
              />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title :</label>
    
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
              </div>
              <div className="form-group">
                <label htmlFor="contractCompany">Contract Company :</label>
             
                <input
                type="text"
                className="form-control"
                id="contractCompany"
                required
                value={this.state.contractCompany}
                onChange={this.onChangeContractCompany}
                name="contractCompany"
              />
              </div>
            
            <div className="form-group">
                <label htmlFor="status">Status :</label>
            
              <input
                type="text"
                className="form-control"
                id="status"
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                name="status"
              />
              </div>
           
           {/*<div className="form-group">
                <label htmlFor="executed">Executed</label>
         
              <input
                type="checkbox"
                className="form-control"
                id="executed"
                required
                value={this.state.executed}
                onChange={this.onChangeExecuted}
                name="executed"
              />
        </div>*/}
         
              <div className="form-group">
                <label htmlFor="defaultRetainage">Default Retainage % :</label>
                <input
                type="text"
                className="form-control"
                id="defaultRetainage"
                required
                value={this.state.defaultRetainage}
                onChange={this.onChangeDefaultRetainage}
                name="defaultRetainage"
              />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description :</label>
 
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
          {/* <div className="form-group">
                <label htmlFor="attachments">Attachments</label>
            
              <input
                type="file"
                className="form-control"
                id="attachments"
                required
                value={this.state.attachments}
                onChange={this.onChangeAttachments}
                name="attachments"
              />
              </div>*/}
              <div className="form-group">
                <label htmlFor="startDate">Start Date :</label>
            
              <input
                type="date"
                className="form-control"
                id="startDate"
                required
                value={this.state.startDate}
                onChange={this.onChangeStartDate}
                name="startDate"
              />
              </div> 
              <div className="form-group">
                <label htmlFor="estimatedCompletionDate">Estimated Completion Date :</label>

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
             
            <div className="form-group">
                <label htmlFor="actualCompletionDate">Actual Completion Date :</label>
 
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
              <div className="form-group">
                <label htmlFor="signedContractReceivedDate">Signed Contract Received Date :</label>
 
              <input
                type="date"
                className="form-control"
                id="signedContractReceivedDate"
                required
                value={this.state.signedContractReceivedDate}
                onChange={this.onChangeSignedContractReceivedDate}
                name="signedContractReceivedDate"
              />
              </div>
             
            
            <div className="form-group">
                <label htmlFor="">Inclusions :</label>

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
            
            <div className="form-group">
                <label htmlFor="">Exclusions :</label>
              
              <input
                type="textarea"
                className="form-control"
                id="exclusions"
                required
                value={this.state.exclusions}
                onChange={this.onChangeExclusions}
                name="exclusions"
              />
   </div></div>
<div className="col-sm-6">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Create a Commitment</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Add SoV to a Commitment</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>

</div>
           
           
           
         
            <button onClick={this.saveCommitment} className="btn btn-success">
              Save
            </button>&nbsp;&nbsp;
            <button onClick={this.saveCommitment} className="btn btn-success">
            Cancel
            </button>&nbsp;&nbsp;
           &nbsp;&nbsp;
            <br /><br /><br />
            </div>
        )}
          </div>


    );
  }
}
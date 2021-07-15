import React, { Component } from "react";
import { Link } from "react-router-dom";
import SovDataService from "./../../../services/sov.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export default class CreatePrimeContracts extends Component{
  constructor(props) {
    super(props);
    this.onChangeCostCode = this.onChangeCostCode.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAmmount = this.onChangeAmmount.bind(this);
    this.onChangeBilledToDate = this.onChangeBilledToDate.bind(this);
    this.onChangeAmmountRemaining = this.onChangeAmmountRemaining.bind(this);

    this.saveSov = this.saveSov.bind(this);
    this.newSov = this.newSov.bind(this);

    this.state = {
      id: null,
      costCode: "",
      description: "",
      ammount: "",
      billedToDate: "", 
      ammountRemaining :"",

      projectId: this.props.match.params.id,  
      submitted: false
    };
  }

  onChangeCostCode(e) {
    this.setState({
      costCode: e.target.value
    });
  }
  onChangeDescription (e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeAmmount(e) {
    this.setState({
      ammount: e.target.value
    });
  }
  onChangeBilledToDate (e) {
    this.setState({
        billedToDate: e.target.value
    });
  }
  onChangeAmmountRemaining(e) {
    this.setState({
        ammountRemaining: e.target.value
    });
  }
  
  saveSov(){
    console.log("clicked");  
    var data = {
      costCode: this.state.costCode,
      description: this.state.description,
      ammount: this.state.ammount,     
      billedToDate: this.state.billedToDate,
      ammountRemaining:this.state.ammountRemaining,
      
      projectId: this.state.projectId
    };

    SovDataService.create(data)
      .then(response => {
        this.setState({
        costCode: response.data.costCode,
        description: response.data.description,
      ammount:response.data.ammount,      
      billedToDate:response.data.billedToDate,
      ammountRemaining:response.data.ammountRemaining,
          
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newSov() {
    this.setState({
      id: null,
      costCode: "",
      ammount: "",
      billedToDate: "",
      ammountRemaining: "", 
      
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
            <button className="btn btn-success" onClick={this.newSov}>
             Create Another SoV
            </button>&nbsp;&nbsp;
            <Link  to={"/sov/"+projectId} className="btn btn-success">View SoV</Link>&nbsp;&nbsp;
            <Link  to={"/emailCommitment/"+projectId} className="btn btn-success">Email SoV</Link>
          </div>
        ) : (
            <div class="container">
       <h2>Create New SoV</h2><hr/>
       <div className="row">
       <div className="col-sm-6">
          <div className="form-group">
         
                <label htmlFor="hash">Cost Code :</label> 
              <input
                type="text"
                className="form-control"
                id="costCode"
                required
                value={this.state.costCode}
                onChange={this.onChangeCostCode}
                name="costCode"
              />
              </div>
              <div className="form-group">
                <label htmlFor="title">Description :</label>
    
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
              </div>
              <div className="form-group">
                <label htmlFor="contractCompany">Ammount :</label>
             
                <input
                type="text"
                className="form-control"
                id="ammount"
                required
                value={this.state.ammount}
                onChange={this.onChangeAmmount}
                name="ammount"
              />
              </div>
            
            <div className="form-group">
                <label htmlFor="status">Billed To Date :</label>
            
              <input
                type="date"
                className="form-control"
                id="billedToDate"
                required
                value={this.state.billedToDate}
                onChange={this.onChangeBilledToDate}
                name="billedToDate"
              />
              </div>

              <div className="form-group">
                <label htmlFor="defaultRetainage">Ammount Remaining :</label>
                <input
                type="text"
                className="form-control"
                id="ammountRemaining"
                required
                value={this.state.ammountRemaining}
                onChange={this.onChangeAmmountRemaining}
                name="ammountRemaining"
              />
              </div>
              </div>
<div className="col-sm-6">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Create SoV</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Email</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>

</div>
           
            <button onClick={this.saveSov} className="btn btn-success">
              Save
            </button>&nbsp;&nbsp;
            <button onClick={this.saveSov} className="btn btn-success">
           Email the Commitment
            </button>&nbsp;&nbsp;
           &nbsp;&nbsp;
            <br /><br /><br />
            </div>
        )}
          </div>


    );
  }
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
//import { Route, useParams } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const AddCommitment = (props) => {

  /**validation */
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    contractCompany: Yup.string().required('Contract Company is required'),
    status: Yup.string().required('Status is required'),
    description: Yup.string().required('Description is required'),
    startDate: Yup.string().required('Start Date is required'),
    estimatedCompletionDate: Yup.string().required('Estimated Copletion Date is required'),
    actualCompletionDate: Yup.string().required('Actual Completion Date is required'),
    signedContractReceivedDate: Yup.string().required('Signed Contract Received Date is required'),
    inclusions: Yup.string().required('Inclusions are required'),
    exclusions: Yup.string().required('Exclusions are required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };
/**End of validation */

  //const {pid}= useParams();

  const initialCommitmentState = {
    id: null,
    title :"",
    contractCompany :"",
    status :"",
    description :"",
    startDate :"",
    estimatedCompletionDate :"",
actualCompletionDate :"",
signedContractReceivedDate :"",
    inclusions: "",
exclusions:"",
    projectId:props.match.params.id,
    
    commitmentStatuses: ["--","Ongoing 🔴", "Completed 🟢"]
/* should uncomment this after the subcontractor table
    subcontractors: [], */
    
  };
  const [commitment, setCommitment] = useState(initialCommitmentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCommitment({ ...commitment, [name]: value });
  };

  const saveCommitment = () => {
    var data = {
title: commitment.title,
contractCompany:commitment.contractCompany,
status: commitment.status,
description:commitment.description,
startDate:commitment.startDate,
estimatedCompletionDate: commitment.estimatedCompletionDate,
actualCompletionDate:commitment.actualCompletionDate,
signedContractReceivedDate:commitment.signedContractReceivedDate,
inclusions:commitment.inclusions,
exclusions:commitment.exclusions,
  

      projectId: commitment.projectId,
    };

 /* should uncomment this after the subcontractors table
 retrieveSubcontractors(id){
    SubcontractorsService.getAll(id)
    .then(response => {
        this.setState({
          suncontractors: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  */   

    CommitmentDataService.create(data)
      .then(response => {
        setCommitment({
          id: response.data.id,
title:response.data.title,
contractCompany:response.data.contractCompany,
status:response.data.status,
description:response.data.description,
startDate:response.data.startDate,
estimatedCompletionDate: response.data.estimatedCompletionDate,
actualCompletionDate:response.data.actualCompletionDate,
signedContractReceivedDate:response.data.signedContractReceivedDate,
inclusions:response.data.inclusions,
exclusions:response.data.exclusions,

          projectId: response.data.projectId,
     
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCommitment = () => {
    setCommitment(initialCommitmentState);
    setSubmitted(false);
  };

 
  return (
        <div className="container">
       
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newCommitment}>
              + Add Another Commitment
            </button>&nbsp;&nbsp;
          <Link  to={"/commitment/"+commitment.projectId} className="btn btn-success">View Commitments</Link>
          </div>
        ) : (
          <div class="container">
            <h2>New Commitment</h2>
            <div className="row">
       <div className="col-sm-6">
       <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="title">Title :</label>
    
              <input
                type="text"
            
                id="title"
               {...register('title')}
                value={commitment.title}
                onChange={handleInputChange}
                name="title"
className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.title?.message}</div>
              </div>
              <div className="form-group">
                <label htmlFor="contractCompany">Contract Company :</label>
             
                <input
                type="text"
       
                id="contractCompany"
               {...register('contractCompany')}
                value={commitment.contractCompany}
                onChange={handleInputChange}
                name="contractCompany"
className={`form-control ${errors.contractCompany ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.contractCompany?.message}</div>
              </div>
             { /* this should uncomment after the subcontractors table 
               {subcontractors &&
                subcontractors.map((subcontractor, index) => (
                <option
                    value={subcontractor.id}
                    onChange={this.onChangeType}
                    key={index}
                >
             
                {subcontractor.name}
                </option>
                ))}
             
             
             */}
            
            <div className="form-group">
                <label htmlFor="status">Status :</label>
            
                <select
                id="status"
                {...register('status')}
                value={commitment.status}
                onChange={handleInputChange}
                name="status"
className={`form-control ${errors.status ? 'is-invalid' : ''}`}
              >
                {commitment.commitmentStatuses &&
                commitment.commitmentStatuses.map((commitmentStatus, index) => (
                <option
                    value={commitmentStatus}
                    onChange={handleInputChange }
                    key={index}
                    selected
                >
                {/* unit data */}
                {commitmentStatus}
                </option>
                ))}
              </select>
<div className="invalid-feedback">{errors.status?.message}</div>
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

        </div>
         
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
              </div> */}
              <div className="form-group">
                <label htmlFor="description">Description :</label>
 
              <input
                type="textarea"
            
                id="description"
                {...register('description')}
                value={commitment.description}
                onChange={handleInputChange}
                name="description"
className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.description?.message}</div>
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
           
                id="startDate"
              {...register('startDate')}
                value={commitment.startDate}
                onChange={handleInputChange}
                name="startDate"
className={`form-control ${errors.startDate? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.startDate?.message}</div>
              </div> 
              <div className="form-group">
                <label htmlFor="estimatedCompletionDate">Estimated Completion Date :</label>

              <input
                type="date"
            
                id="estimatedCompletionDate"
                {...register('estimatedCompletionDate')}
                value={commitment.estimatedCompletionDate}
                onChange={handleInputChange}
                name="estimatedCompletionDate"
className={`form-control ${errors.estimatedCompletionDate ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.estimatedCompletionDate?.message}</div>
              </div>
             
            <div className="form-group">
                <label htmlFor="actualCompletionDate">Actual Completion Date :</label>
 
              <input
                type="date"
            
                id="actualCompletionDate"
              {...register('actualCompletionDate')}
                value={commitment.actualCompletionDate}
                onChange={handleInputChange}
                name="actualCompletionDate"
className={`form-control ${errors.actualCompletionDate ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.actualCompletionDate?.message}</div>
              </div>
              <div className="form-group">
                <label htmlFor="signedContractReceivedDate">Signed Contract Received Date :</label>
 
              <input
                type="date"
              
                id="signedContractReceivedDate"
                 {...register('signedContractReceivedDate')}
                value={commitment.signedContractReceivedDate}
                onChange={handleInputChange}
                name="signedContractReceivedDate"
className={`form-control ${errors.signedContractReceivedDate ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.signedContractReceivedDate?.message}</div>
              </div>
             
            
            <div className="form-group">
                <label htmlFor="">Inclusions :</label>

              <input
                type="textarea"
           
                id="inclusions"
               {...register('inclusions')}
                value={commitment.inclusions}
                onChange={handleInputChange}
                name="inclusions"
className={`form-control ${errors.inclusions ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.inclusions?.message}</div>
              </div>
            
            <div className="form-group">
                <label htmlFor="">Exclusions :</label>
              
              <input
                type="textarea"
    
                id="exclusions"
                 {...register('exclusions')}
                value={commitment.exclusions}
                onChange={handleInputChange}
                name="exclusions"
className={`form-control ${errors.exclusions ? 'is-invalid' : ''}`}
              />
<div className="invalid-feedback">{errors.exclusions?.message}</div>
   </div>            


            <div className="form-group">
            <button type="submit" onClick={saveCommitment} className="btn btn-success">
              Save
            </button>
            &nbsp;&nbsp;
            <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>&nbsp;&nbsp;{/*reset not working properly. values doesn't reset, only the error msgs*/}
            <Link to={"/commitment/" + commitment.projectId}>
            <button className="btn btn-success">
            Cancel
            </button></Link>
            </div>
            </form>
            </div>
            
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
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Add SoVs</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 3</strong><br/>Values will be automatically added to the Budget</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                 
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 4</strong><br/>Edit/Delete a Commitment.</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            
            
            </div><br />
          {/** */} 
          </div>
        )}
        <br /><br />
      </div>
  );
};

export default AddCommitment;
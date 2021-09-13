import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Route, useParams } from "react-router-dom";
import SovDataService from "./../../../services/sov.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const AddSov = (props) => {

  /**validation */
  const validationSchema = Yup.object().shape({
    costCode: Yup.string().required('Cost Code is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.string().required('Date is required'),
    amount: Yup.string().required('Amount is required'),
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

  //const {cid}= useParams();

  const initialSovState = {
    id: null,
    costCode :"",
    description :"",
    date :"",
    amount: "",
     commitmentId:props.match.params.id,
     //new below
     projectId:props.match.params.pid,  
    
  };
  const [sov, setSov] = useState(initialSovState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSov({ ...sov, [name]: value });
  };

  const saveSov = () => {
    var data = {
      costCode: sov.costCode,
      description: sov.description,
      date: sov.date,
      amount: sov.amount,
       commitmentId: sov.commitmentId,
       projectId: sov.projectId,
    };

    SovDataService.create(data)
      .then(response => {
        setSov({
          id: response.data.id,
          costCode: response.data.costCode,
          description: response.data.description,
          date: response.data.date,
          amount: response.data.amount,
          commitmentId: response.data.commitmentId,
          projectId: response.data.projectId,
     
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newSov = () => {
    setSov(initialSovState);
    setSubmitted(false);
  };

 
  return (
        <div className="container">
       
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newSov}>
              + Add Another SoV
            </button>&nbsp;&nbsp;
          <Link  to={"/viewsov/"+sov.projectId+"/"+sov.commitmentId} className="btn btn-success">View SoVs</Link>
          </div>
        ) : (
          <div class="container">
            <h2>New SoV</h2>
            <div className="row">
       <div className="col-sm-6">
       <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="costCode">Cost Code :</label>
             {/* <input
                type="text"
                className="form-control"
                id="costCode"
                required
                value={this.state.costCode}
                onChange={this.onChangeCostCode}
                name="costCode"
             />*/}
                <select 
                
                id="costCode"
           
                
                name="costCode"
                {...register('costCode')}
                value={sov.costCode}
                onChange={handleInputChange}
                className={`form-control ${errors.costCode ? 'is-invalid' : ''}`}
              >
                
                <option>001-Maintenance Equipment</option>
                <option>002-Sodding</option>
                <option>003-Visual Display Boards</option>
                <option>004-Site Clearing</option>
                <option>005-Dewatering</option>
             
              </select>
              <div className="invalid-feedback">{errors.costCode?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Description :</label>
              <input
                type="text"
            
                id="description"
                
           
                name="description"
                {...register('description')}
                value={sov.description}
                onChange={handleInputChange}
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.description?.message}</div>
            </div>

          
            <div className="form-group">
              <label htmlFor="date">Date :</label>
              <input
                type="date"
                
                id="date"
                
                
                name="date"
                {...register('date')}
                value={sov.date}
                onChange={handleInputChange}
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.date?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount :</label>
              <input
                type="text"
               
                id="amount"
             
              
                name="amount"
                {...register('amount')}
                value={sov.amount}
                onChange={handleInputChange}
                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.amount?.message}</div>
            </div>
            <div className="form-group">
            <button type="submit" onClick={saveSov} className="btn btn-success">
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
            <Link to={"/viewsov/" +sov.projectId+"/"+ sov.commitmentId}>
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
                <TimelineContent><h5><strong>Step 1</strong><br/>Create SoV for the Subcontract</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Save SoV</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                 
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 3</strong><br/>View the SoVs for the Subcontract</h6></TimelineContent>
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

export default AddSov;
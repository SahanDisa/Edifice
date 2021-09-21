import React, { useState, useEffect, useMemo, useRef } from "react";
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
import BudgetDataService from "./../../../services/budget.service";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CommitmentDataService from "./../../../services/commitment.service";
import cogoToast from 'cogo-toast';

const AddSov = (props) => {

  /**validation */
  const validationSchema = Yup.object().shape({
    costCode: Yup.string().required('Cost Code is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.string().required('Date is required'),
    amount: Yup.number()
    .typeError('You must specify a valid number')
    .required('Amount is required'),
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

const {id}= useParams();
const {pid}= useParams();




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
    commitmentStatuses: ["Ongoing 🔴", "Completed 🟢"],
    
  };
  const [currentCommitment, setCurrentCommitment] = useState(initialCommitmentState);
 
  const [budgets, setBudgets] = useState([]);
  const [sov, setSov] = useState(initialSovState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    retrieveBudgets();    
    getCommitment(id);

  }, []);


 

  const getCommitment = id => {
    CommitmentDataService.get(id)
      .then(response => {
        setCurrentCommitment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const retrieveBudgets = () => {
    
    BudgetDataService.getAll(initialSovState.projectId)//passing project id as id
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

    
const viewS = () => {
  props.history.push("/viewsov/"+pid+"/"+id);
  cogoToast.success("SoV Saved Successfully!");
 }

 
  return (
        <div className="container">
       
        {submitted ? (
          viewS()
        ) : (
          <div class="container">
            <h2>New Schedule of Value</h2>
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">
                Home
              </Link>
              <Link color="inherit" to={"/projectmanagementhome/"+sov.projectId}>
                App Dashboard
              </Link>
              <Link color="textPrimary" to={"/commitment/"+sov.projectId} aria-current="page">
               Commitments
              </Link>
              <Link color="textPrimary" to={"/editcommitment/"+sov.commitmentId} aria-current="page">
              #{id} - {currentCommitment.title}
              </Link>
              <Link color="textPrimary" to={"/viewsov/"+sov.projectId+"/"+sov.commitmentId} aria-current="page">
               Schedule of Values
              </Link>
              <Link color="textPrimary" to={"/addsov/"+sov.projectId+"/"+sov.commitmentId} aria-current="page">
               New SoV
              </Link>
            </Breadcrumbs>
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
                <option value="" disabled selected>Select a Cost Code</option>
{budgets &&
                budgets.map((budget, index) => (
                <option
                    value={budget.costCode}
                    onChange={handleInputChange}
                    key={index}
                >
                {/* unit data */}
                {budget.costCode}
                </option>
                ))}

                {/*<option></option>
                <option>001-Maintenance Equipment</option>
                <option>002-Sodding</option>
                <option>003-Visual Display Boards</option>
                <option>004-Site Clearing</option>
                <option>005-Dewatering</option>*/}
             
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
            {/* <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button> */}
          &nbsp;&nbsp;{/*reset not working properly. values doesn't reset, only the error msgs*/}
            {/* <Link to={"/viewsov/" +sov.projectId+"/"+ sov.commitmentId}>
            <button className="btn btn-success">
            Cancel
            </button></Link> */}
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
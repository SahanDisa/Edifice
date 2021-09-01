import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
//import { Route, useParams } from "react-router-dom";
import DirectCostDataService from "./../../../services/directcost.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const AddDirectCost = (props) => {

  /**validation */
  const validationSchema = Yup.object().shape({
    costCode: Yup.string().required('Cost Code is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    vendor: Yup.string().required('Vendor is required'),
    employee: Yup.string().required('Employee is required'),
    receivedDate: Yup.string().required('Received Date is required'),
    paidDate: Yup.string().required('Paid Date is required'),
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

  //const {pid}= useParams();

  const initialDirectCostState = {
    id: null,
    costCode :"",
    description :"",
    category :"",
    vendor :"",
    employee :"",
    receivedDate :"",
    paidDate :"",
    amount: "",
    projectId:props.match.params.id,  
    
  };
  const [directcost, setDirectCost] = useState(initialDirectCostState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setDirectCost({ ...directcost, [name]: value });
  };

  const saveDirectCost = () => {
    var data = {
      costCode: directcost.costCode,
      description: directcost.description,
      category: directcost.category,
      vendor: directcost.vendor,
      employee: directcost.employee,
      receivedDate: directcost.receivedDate,
      paidDate: directcost.paidDate,
      amount: directcost.amount,
      projectId: directcost.projectId,
    };

    DirectCostDataService.create(data)
      .then(response => {
        setDirectCost({
          id: response.data.id,
          costCode: response.data.costCode,
          description: response.data.description,
          category: response.data.category,
          vendor: response.data.vendor,
          employee: response.data.employee,
          receivedDate: response.data.receivedDate,
          paidDate: response.data.paidDate,
          amount: response.data.amount,
          projectId: response.data.projectId,
     
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newDirectCost = () => {
    setDirectCost(initialDirectCostState);
    setSubmitted(false);
  };

 
  return (
        <div className="container">
       
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newDirectCost}>
              + Add Another Direct Cost
            </button>&nbsp;&nbsp;
          <Link  to={"/directcost/"+directcost.projectId} className="btn btn-success">View Direct Costs</Link>
          </div>
        ) : (
          <div class="container">
            <h2>New Direct Cost</h2>
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
                value={directcost.costCode}
                onChange={handleInputChange}
                className={`form-control ${errors.costCode ? 'is-invalid' : ''}`}
              >
                <option></option>
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
                value={directcost.description}
                onChange={handleInputChange}
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.description?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category :</label>
              {/*<input
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
                name="category"
              />*/}
  <select 
                
                id="category"
                
                name="category"
                {...register('category')}
                value={directcost.category}
                onChange={handleInputChange}
                className={`form-control ${errors.category ? 'is-invalid' : ''}`}
              >
                <option></option>
                <option>Expense</option>
                <option>Invoice</option>
                <option>Payroll</option>
              </select>
              <div className="invalid-feedback">{errors.category?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Vendor :</label>
              <input
                type="text"
                
                id="vendor"
              
               
                name="vendor"
                {...register('vendor')}
                className={`form-control ${errors.vendor ? 'is-invalid' : ''}`}
                value={directcost.vendor}
                onChange={handleInputChange}
                
              />
               <div className="invalid-feedback">{errors.vendor?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Employee :</label>
              <input
                type="text"
               
                id="employee"
                
               
                name="employee"
                {...register('employee')}
                value={directcost.employee}
                onChange={handleInputChange}
                className={`form-control ${errors.employee ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.employee?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="date">Received Date :</label>
              <input
                type="date"
                
                id="receivedDate"
                
               
                name="receivedDate"
                {...register('receivedDate')}
                value={directcost.receivedDate}
                onChange={handleInputChange}
                className={`form-control ${errors.receivedDate ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.receivedDate?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="date">Paid Date :</label>
              <input
                type="date"
                
                id="paidDate"
                
                
                name="paidDate"
                {...register('paidDate')}
                value={directcost.paidDate}
                onChange={handleInputChange}
                className={`form-control ${errors.paidDate ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.paidDate?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount :</label>
              <input
                type="text"
               
                id="amount"
             
              
                name="amount"
                {...register('amount')}
                value={directcost.amount}
                onChange={handleInputChange}
                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              />
               <div className="invalid-feedback">{errors.amount?.message}</div>
            </div>
            <div className="form-group">
            <button type="submit" onClick={saveDirectCost} className="btn btn-success">
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
            <Link to={"/directcost/" + directcost.projectId}>
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
                <TimelineContent><h5><strong>Step 1</strong><br/>Create a Direct Cost</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Direct Cost will be automatically added to the Budget.</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 3</strong><br/>View the Direct Costs.</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                 
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 4</strong><br/>Edit/Delete a DirectCost.</h6></TimelineContent>
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

export default AddDirectCost;
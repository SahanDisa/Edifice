import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DirectCostDataService from "./../../../services/directcost.service";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import { Route, useParams } from "react-router-dom";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


const DirectCost = props => {

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


  //const {projectId}= useParams();
  const initialDirectCostState = {
    id: null,
    costCode: "",
    description: "",
    category: "",
    vendor: "",
    employee: "",
    receivedDate: "",
    paidDate: "",
    amount: "",
    projectId:""
  };
  const [currentDirectCost, setCurrentDirectCost] = useState(initialDirectCostState);
  const [message, setMessage] = useState("");

  const getDirectCost = id => {
    DirectCostDataService.get(id)
      .then(response => {
        setCurrentDirectCost(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDirectCost(props.match.params.id);
  },[props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentDirectCost({ ...currentDirectCost, [name]: value });
  };



  const updateDirectCost = () => {
    DirectCostDataService.update(currentDirectCost.id, currentDirectCost)
      .then(response => {
        console.log(response.data);
        setMessage("The direct cost was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteDirectCost = () => {
    DirectCostDataService.remove(currentDirectCost.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/directcost/"+currentDirectCost.projectId);//check this again
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      {currentDirectCost ? (
        <div class="container">
          <h4>Direct Costs</h4>
          <div className="row">
       <div className="col-sm-6">
       <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="costCode">Cost Code</label>
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
                {...register('costCode')}
                value={currentDirectCost.costCode}
                onChange={handleInputChange}
                className={`form-control ${errors.costCode ? 'is-invalid' : ''}`}
                name="costCode"
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
              <label htmlFor="title">Description</label>
              <input
                type="text"
                
                id="description"
                name="description"
                {...register('description')}
                value={currentDirectCost.description}
                onChange={handleInputChange}
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.description?.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
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
                {...register('category')}
                value={currentDirectCost.category}
                onChange={handleInputChange}
                className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                name="category"
              >
                 <option></option>
                <option>Expense</option>
                <option>Invoice</option>
                <option>Payroll</option>
              </select>
              <div className="invalid-feedback">{errors.category?.message}</div>
            </div>




            <div className="form-group">
              <label htmlFor="title">Vendor</label>
              <input
                type="text"
               
                id="vendor"
                name="vendor"
                {...register('vendor')}
                value={currentDirectCost.vendor}
                onChange={handleInputChange}
                className={`form-control ${errors.vendor ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.vendor?.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="title">Employee</label>
              <input
                type="text"
               
                id="employee"
                name="employee"
                {...register('employee')}
                value={currentDirectCost.employee}
                onChange={handleInputChange}
                className={`form-control ${errors.employee ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.employee?.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Received Date</label>
              <input
                type="date"
              
                id="receivedDate"
                name="receivedDate"
                {...register('receivedDate')}
                value={currentDirectCost.receivedDate}
                onChange={handleInputChange}
                className={`form-control ${errors.receivedDate ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.receivedDate?.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Paid Date</label>
              <input
                type="date"
               
                id="paidDate"
                name="paidDate"
                {...register('paidDate')}
                value={currentDirectCost.paidDate}
                onChange={handleInputChange}
                className={`form-control ${errors.paidDate ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.paidDate?.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Amount</label>
              <input
                type="text"
               
                id="amount"
                name="amount"
                {...register('amount')}
                value={currentDirectCost.amount}
                onChange={handleInputChange}
                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.amount?.message}</div>
            </div>
            <div className="form-group">

            <button className="btn btn-danger" onClick={deleteDirectCost}>
            Delete <DeleteIcon/> 
          </button>

          <button
            type="submit"
            className="btn btn-success m-2"
            onClick={updateDirectCost}
          >
            Update <UpdateIcon/>
          </button>
          <Link to={"/directcost/" + currentDirectCost.projectId}>
            <button className="btn btn-success">
            Cancel
            </button></Link>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>

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
                <TimelineContent><h6><strong>Step 1</strong><br/>Edit a Direct Cost</h6> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Direct Cost amount will be automatically updated in the Budget.</h6></TimelineContent>
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
                <TimelineContent><h5><strong>Step 4</strong><br/>Edit/Delete a DirectCost.</h5></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            
          
          
          </div>
          


     
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a direct Cost...</p>
        </div>
      )}
    </div>
  );
};

export default DirectCost;
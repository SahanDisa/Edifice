import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

export default class ViewSingleCommitment extends Component {
  constructor(props) {
    super(props);

    this.getCommitment = this.getCommitment.bind(this);

    this.state = {
      currentCommitment: {
         id: this.props.match.params.id,
        hash: "",
      title: "",
      contractCompany: "",
      status: "", 
      //executed:"",
      //defaultRetainage :"",
      description:"",
      /*attachments:"",*/
      startDate: "",
      estimatedCompletionDate : "",
      actualCompletionDate : "",
      signedContractReceivedDate : "",
      inclusions:"",
      exclusions:"",
        projectId: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCommitment(this.props.match.params.id);
  }

 
  getCommitment(id) {
    CommitmentDataService.get(id)
      .then(response => {
        this.setState({
          currentCommitment: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

 render() {
    const { currentCommitment, projectId , id} = this.state;

    return (
      <div className="container">
        {currentCommitment ? (
          <div class="container">
            <h4>{currentCommitment.hash} - {currentCommitment.title}</h4>
            <div className="row">
       <div className="col-sm-6">
       <div className="form-group">
         
         <label htmlFor="hash"># :</label> 
      

       <input
         type="text"
         className="form-control"
         id="hash"
     
         value={currentCommitment.hash}
        
         readonly
         name="hash"
       />
       </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentCommitment.title}
                  readonly
                />
              </div>
              <div className="form-group">
                <label htmlFor="contractCompany">Contract Company :</label>
             
                <input
                type="text"
                className="form-control"
                id="contractCompany"
              
                value={currentCommitment.contractCompany}
                readonly
                name="contractCompany"
              />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status :</label>
            
              <input
                type="text"
                className="form-control"
                id="status"
               
                value={currentCommitment.status}
                readonly
                name="status"
              />
              </div>
              {/*<div className="form-group">
                <label htmlFor="defaultRetainage">Default Retainage % :</label>
                <input
                type="text"
                className="form-control"
                id="defaultRetainage"
                required
                value={currentCommitment.defaultRetainage}
                onChange={this.onChangeDefaultRetainage}
                name="defaultRetainage"
              />
        </div>*/}
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentCommitment.description}
                  readonly
                />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date :</label>
            
              <input
                type="date"
                className="form-control"
                id="startDate"
               
                value={currentCommitment.startDate}
                readonly
                name="startDate"
              />
              </div> 
              <div className="form-group">
                <label htmlFor="estimatedCompletionDate">Estimated Completion Date :</label>

              <input
                type="date"
                className="form-control"
                id="estimatedCompletionDate"
                
                value={currentCommitment.estimatedCompletionDate}
                readonly
                name="estimatedCompletionDate"
              />
              </div>
             
            <div className="form-group">
                <label htmlFor="actualCompletionDate">Actual Completion Date :</label>
 
              <input
                type="date"
                className="form-control"
                id="actualCompletionDate"
             
                value={currentCommitment.actualCompletionDate}
                readonly
                name="actualCompletionDate"
              />
              </div>
              <div className="form-group">
                <label htmlFor="signedContractReceivedDate">Signed Contract Received Date :</label>
 
              <input
                type="date"
                className="form-control"
                id="signedContractReceivedDate"
                
                value={currentCommitment.signedContractReceivedDate}
                readonly
                name="signedContractReceivedDate"
              />
              </div>
             
            
            <div className="form-group">
                <label htmlFor="">Inclusions :</label>

              <input
                type="textarea"
                className="form-control"
                id="inclusions"
              
                value={currentCommitment.inclusions}
                readonly
                name="inclusions"
              />
              </div>
            
            <div className="form-group">
                <label htmlFor="">Exclusions :</label>
              
              <input
                type="textarea"
                className="form-control"
                id="exclusions"
             
                value={currentCommitment.exclusions}
                readonly
                name="exclusions"
              />
   </div>




     
          </div>
          <div className="col-sm-6">
        { /* <Link to={"/addsov/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">+ Create SoV </button>
      </Link><br />*/}

                    <Link to={"/viewsov/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">SoVs </button>
                    </Link><br />

                   {/* <Link to={"/addpayment/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">+ Create Payment </button>
    </Link><br />*/}

                    <Link to={"/viewpayment/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">Payments </button>
                    </Link><br />


                    <Link to={"/addinvoice/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">Invoices </button>
                    </Link><br />
            </div>
            </div>
       
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Commitment...</p>
          </div>
        )}
      </div>
    );
  }
}
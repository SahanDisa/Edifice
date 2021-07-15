import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";

export default class ViewSingleCommitment extends Component {
    constructor(props) {
      super(props);
      this.retrieveCommitment = this.retrieveCommitment.bind(this);
      this.state = {
        id: this.props.match.params.id,
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
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrieveCommitment(this.props.match.params.id);
    }
    retrieveCommitment(id) {
      CommitmentDataService.get(id)
        .then(response => {
          this.setState({
            id: response.data.id,
            hash: response.data.hash,
            title: response.data.title,
            contractCompany: response.data.contractCompany,
            status: response.data.status,
            defaultRetainage : response.data.defaultRetainage,
            description:response.data.description,
            //attachments:"",
            startDate: response.data.startDate,
            estimatedCompletionDate : response.data.estimatedCompletionDate,
            actualCompletionDate :response.data.actualCompletionDate, 
            signedContractReceivedDate : response.data.signedContractReceivedDate,
            inclusions:response.data.inclusions,
            exclusions:response.data.exclusions,

            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,hash,title,contractCompany,status,defaultRetainage,description,startDate,estimatedCompletionDate,actualCompletionDate,signedContractReceivedDate,inclusions,exclusions } = this.state;
        return (
            <div>
              <h2>{hash} - {title}</h2>
              <hr></hr>
             
              <div className="col-md-12 text-right">
                <Link to={"#"}>
                    <button className="btn btn-success m-2">Edit </button>
                    </Link>
                    <Link to={"/addsov/"+id}>
                    <button className="btn btn-success m-2">+ Create SoV </button>
                    </Link>
                    </div>
              {/*<h6>Drawing Id : {id}</h6>*/}
              <h3>General Information</h3><br />
              <h6>Contract Company : {contractCompany}</h6>
              <h6>Status : {status}</h6>
              <h6>Default Retainage : {defaultRetainage}</h6>
              <h6>Description  : {description}</h6>
              <h6>Start Date : {startDate}</h6>
              <h6>Estimated Completion Date  : {estimatedCompletionDate}</h6>
              <h6>Actual Completion Date: {actualCompletionDate}</h6>
              <h6>Signed Contract Received Date : {signedContractReceivedDate }</h6>
              <h6>Inclusions  : {inclusions}</h6>
              <h6>Exclusions  : {exclusions}</h6>
              
              <hr></hr>
              
   
            </div>
        );
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommitmentDataService from "./../../../services/commitment.service";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

export default class ViewSingleCommitment extends Component {
  constructor(props) {
    super(props);
 this.onChangeHash = this.onChangeHash.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContractCompany = this.onChangeContractCompany.bind(this);
 this.onChangeStatus = this.onChangeStatus.bind(this);
 this.onChangeDefaultRetainage = this.onChangeDefaultRetainage.bind(this);
 this.onChangeDescription = this.onChangeDescription.bind(this);
 this.onChangeStartDate = this.onChangeStartDate.bind(this);
 this.onChangeEstimatedCompletionDate = this.onChangeEstimatedCompletionDate.bind(this);
 this.onChangeActualCompletionDate = this.onChangeActualCompletionDate.bind(this);
 this.onChangeSignedContractReceivedDate = this.onChangeSignedContractReceivedDate .bind(this);
 this.onChangeInclusions = this.onChangeExclusions .bind(this);


    this.getCommitment = this.getCommitment.bind(this);
    this.updateCommitment = this.updateCommitment.bind(this);
    this.deleteCommitment = this.deleteCommitment.bind(this);

    this.state = {
      currentCommitment: {
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
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCommitment(this.props.match.params.id);
  }

  onChangeHash(e) {
    const hash = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCommitment: {
          ...prevState.currentCommitment,
          hash : hash
        }
      };
    });
  }



  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCommitment: {
          ...prevState.currentCommitment,
          title: title
        }
      };
    });
  }

  onChangeContractCompany(e) {
    const contractCompany = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCommitment: {
          ...prevState.currentCommitment,
         contractCompany : contractCompany
        }
      };
    });
  }

  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCommitment: {
          ...prevState.currentCommitment,
          status : status
        }
      };
    });
  }

  onChangeDefaultRetainage(e) {
    const defaultRetainage = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCommitment: {
          ...prevState.currentCommitment,
          defaultRetainage : defaultRetainage
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
        description: description
      }
    }));
  }

  onChangeStartDate(e) {
    const startDate = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
       startDate : startDate
      }
    }));
  }

 onChangeEstimatedCompletionDate(e) {
    const estimatedCompletionDate = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
     estimatedCompletionDate : estimatedCompletionDate
      }
    }));
  }

 onChangeActualCompletionDate(e) {
    const actualCompletionDate = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
    actualCompletionDate : actualCompletionDate
      }
    }));
  }

 onChangeSignedContractReceivedDate(e) {
    const signedContractReceivedDate = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
   signedContractReceivedDate : signedContractReceivedDate
      }
    }));
  }

 onChangeInclusions(e) {
    const inclusions = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
  inclusions : inclusions
      }
    }));
  }

 onChangeExclusions(e) {
    const exclusions = e.target.value;
    
    this.setState(prevState => ({
      currentCommitment: {
        ...prevState.currentCommitment,
exclusions : exclusions
      }
    }));
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

  updateCommitment() {
    CommitmentDataService.update(
      this.state.currentCommitment.id,
      this.state.currentCommitment
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The commitment was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteCommitment() {    
    CommitmentDataService.delete(this.state.currentCommitment.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/commitment/'+this.state.currentCommitment.projectId)
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
         required
         value={currentCommitment.hash}
         onChange={this.onChangeHash}
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
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contractCompany">Contract Company :</label>
             
                <input
                type="text"
                className="form-control"
                id="contractCompany"
                required
                value={currentCommitment.contractCompany}
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
                value={currentCommitment.status}
                onChange={this.onChangeStatus}
                name="status"
              />
              </div>
              <div className="form-group">
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
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentCommitment.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date :</label>
            
              <input
                type="date"
                className="form-control"
                id="startDate"
                required
                value={currentCommitment.startDate}
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
                value={currentCommitment.estimatedCompletionDate}
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
             
                value={currentCommitment.actualCompletionDate}
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
                
                value={currentCommitment.signedContractReceivedDate}
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
              
                value={currentCommitment.inclusions}
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
             
                value={currentCommitment.exclusions}
                onChange={this.onChangeExclusions}
                name="exclusions"
              />
   </div>




     
          </div>
          <div className="col-sm-6">
          <Link to={"/addsov/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">+ Create SoV </button>
                    </Link><br />

                    <Link to={"/viewsov/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">View SoVs </button>
                    </Link><br />
                    <Link to={"/addinvoice/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">+ Create Invoice </button>
                    </Link><br />

                    <Link to={"/addsov/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">Email Contract </button>
                    </Link><br />

                    <Link to={"/addsov/"+currentCommitment.id}>
                    <button className="btn btn-success m-2">Export PDF </button>
                    </Link><br />
            </div>
            </div>
            <button
              className="btn btn-danger"
              onClick={this.deleteCommitment}
            >
              Delete <DeleteIcon/> 
            </button>

            <button
              type="submit"
              className="btn btn-success m-2"
              onClick={this.updateCommitment}
            >
              Update <UpdateIcon/>
            </button>
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
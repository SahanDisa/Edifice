import React, { Component } from "react";
//import SubDataService from "./../../../services/subcontractor.service";
import DeleteIcon from '@material-ui/icons/Delete';


class EditSub extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      id:  this.props.match.params.id,
      companyName: "",
      type: "",
      contactNo:"",
      email:"",
      contactPersonName: "",
      disableButton:true,
      currentIndex: -1
    }

      this.getSub(this.props.match.params.id);
  }

  onChangeCompanyName(e) {
    this.setState({
      companyName: e,
      disableButton:false
    });
  }

  onChangeType(e) {
    this.setState({
      type: e,
      disableButton:false
    });
  }

  onChangeContactNo(e) {
    this.setState({
      contactNo:e,
      disableButton:false
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e,
      disableButton:false
    });
  }

  onChangeContactPersonName(e) {
    this.setState({
      contactPersonName: e,
      disableButton:false
    });
  }

  displaySuccess(){
    
    window.location.reload();
  }

  getSub(id){
    // SubrDataService.getOne(id)
    // .then(response => {
    //   this.setState({
        
    //     companyName: response.data.companyName,
    //     type: response.data.type,
    //     contactNo: response.data.contactNo,
    //     email: response.data.email,
    //     contactPersonName: response.data.contactPersonName,
    //   });
    //   console.log(response.data);
    //   //this.getLastSub();
    // })
    // .catch(e => {
    //   console.log(e);
    //   //console.log(data);
    // });
  }

  updateSub(id){
    // var data={
    // companyName: this.state.companyName,
    // type:this.state.type,
    // contactNo:this.state.contactNo,
    // email: this.state.email,
    // contactPersonName: this.state.contactPersonName
    // }

    // SubDataService.update(id,data)
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(e => {
    //   console.log(e);;
    // });

    // this.displaySuccess();
  }

  deleteSub(id){

    // SubDataService.delete(id)
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(e => {
    //   console.log(e);
    // });

    console.log("Successfully deleted")
    window.location.href="/subcontractor";
  }

  render() {

    const {id} = this.state;


    return (
      <div className="">
        <h2>New Sub-contractor</h2><hr/>
        <div className="">
          <h5>Enter Sub-contractor details</h5>

          <p>Sub-contractor ID:</p>
          <b className="pl-3">{id}</b>
          <br/>

          <label htmlFor="">Company Name</label>
          <input className="form-control" size="20" type="text" value={this.state.companyName} 
          onChange={e => this.onChangeCompanyName(e.target.value)}
          required/>
          <br/>

          <label htmlFor="">Type</label>

          <select className="form-control" name="type" id="type" value={this.state.type}
            onChange={e => this.onChangeType(e.target.type)}>
            <option value="Concrete">Concrete</option>
            <option value="Electronic">Electronic</option>
            <option value="Other">Other</option>
          </select><br />

          <label htmlFor="">Contact No</label>
          <input className="form-control" type="text" value={this.state.contactNo} 
          onChange={e => this.onChangeContactNo(e.target.value)}
          required/>
          <br/>

          <label htmlFor="">Email</label>
          <input className="form-control" type="text" value={this.state.email} 
          onChange={e => this.onChangeEmail(e.target.value)}
          required/>
          <br/>

          
          <label htmlFor="">Contact Person Name</label>
          <input className="form-control" type="text" value={this.state.contactPersonName} 
          onChange={e => this.onChangeContactPersonName(e.target.value)}
          required/>
          <br/>

          <div className="row">
            <div>
            <button className="btn btn-success" disabled={this.state.disableButton} id="updateBtn" data-target="#promptModal" data-toggle="modal" >Update</button>
            </div>
            <div className="mx-3">
            <a href="/employee" className="btn btn-success">Cancel</a>
            </div>
            <div >
            <button className="btn btn-danger" id="updateBtn" data-target="#deleteModal" data-toggle="modal" ><DeleteIcon style={{ fontSize:15 }}/> Delete</button>
            </div>
          </div>


        </div>
      
      {/* Update modal Starts */}
      <div className="modal fade" id="promptModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <p className="modal-title" id="exampleModalCenterTitle" style={{ fontSize:20 }}>Are you sure you want to update details of Sub-contractor <b>{this.state.companyName}?</b> </p>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <a onClick={() =>{this.updateVendor(id)}} className="btn btn-primary pr-3 ml-2 mr-3"> Yes, Update</a>
                  <a className="btn btn-secondary ml-6 mr-6 pl-3" data-dismiss="modal"> Cancel</a>
                </div>
              </div>
            </div>
          </div>
          {/* Update modal Ends */}

          {/* Delete modal Starts */}
       <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <p className="modal-title" id="exampleModalCenterTitle" style={{ fontSize:20 }}> 
                    Are you sure you want to delete <b>{this.state.name}</b> Sub-contractor from the database?</p>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <a  className="btn btn-danger pr-3 ml-2 mr-3" onClick={() =>{this.deleteVendor(id)}} > Yes, Delete</a>
                  <a className="btn btn-secondary ml-6 mr-6 pl-3" id ="deleteModalDismiss" data-dismiss="modal"> Cancel</a>
                </div>
              </div>
            </div>
          </div>
          {/* Delete modal Ends */}  

      </div>
    );
  }
  
}

export default EditSub;
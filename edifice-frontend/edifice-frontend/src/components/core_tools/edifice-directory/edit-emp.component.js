import React, { Component } from "react";

class EditUser extends Component {

  render() {
    return (
      <div className="col-auto">
        <h2>Edit Employee Details</h2><hr/>
        <div className="">
          <h5>Enter user details</h5>

          <label htmlFor="">Id</label>
          <input className="form-control" type="number" required/>
          <br/>

          <label htmlFor="">Name</label>
          <input className="form-control" type="text" required/>
          <br/>
          <label htmlFor="">Role</label>

          <select className="form-control" name="" id="">
            <option value="role1">civil engineer</option>
            <option value="role2">Project manager</option>
            <option value="role3">Site supervisor</option>
          </select><br />

          <label htmlFor="">Email</label>
          <input className="form-control" type="text" required/>
          <br/>

          <label htmlFor="">Mobile</label>
          <input className="form-control" type="number" required/>
          <br/>
          <br/>

          <div>
          <a href="#" className="btn btn-success">Update</a>
          </div>
          <div>
          <a href="/employees" className="btn btn-success">Cancel</a>
          </div>
          
        </div>
        

      </div>
    );
  }
  
}

export default EditUser;
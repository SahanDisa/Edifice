import React, { Component } from "react";

class AddUser extends Component {

  render() {
    return (
      <div className="">
        <h2>New User</h2><hr/>
        <div className="">
          <h5>Enter user details</h5>

          <label htmlFor="">Id</label>
          <input type="number" required/>

          <label htmlFor="">Name</label>
          <input type="text" required/>

          <label htmlFor="">Role</label>

          <select name="" id="">
            <option value="role1">civil engineer</option>
            <option value="role2">Project manager</option>
            <option value="role3">Site supervisor</option>
          </select><br />

          <label htmlFor="">Email</label>
          <input type="text" required/>

          <label htmlFor="">Mobile</label>
          <input type="number" required/>
          <br/>
          <br/>


          <a href="#" className="btn btn-success">Add</a>
        </div>
        

      </div>
    );
  }
  
}

export default AddUser;
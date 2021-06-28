import React, { Component } from "react";

class EditVendor extends Component {

  render() {
    return (
      <div className="">
        <h2>New Vendor</h2><hr/>
        <div className="">
          <h5>Enter vendor details</h5>

          <label htmlFor="">Id</label>
          <input className="form-control" type="number" required/>
          <br/>

          <label htmlFor="">Company Name</label>
          <input className="form-control" type="text" required/>
          <br/>

          <label htmlFor="">Type</label>

          <select className="form-control" name="" id="">
            <option value="role1">concrete</option>
            <option value="role2">electronic</option>
            <option value="role3">other</option>
          </select><br />

          <label htmlFor="">Contact No</label>
          <input className="form-control" type="number" required/>
          <br/>

          <label htmlFor="">Email</label>
          <input className="form-control" type="text" required/>
          <br/>

          
          <label htmlFor="">Contact Person Name</label>
          <input className="form-control" type="text" required/>
          <br/>
          <br/>

          <div>
          <a href="#" className="btn btn-success">Update</a>
          </div>
          <div>
          <a href="/vendors" className="btn btn-success">Cancel</a>
          </div>
        </div>
        

      </div>
    );
  }
  
}

export default EditVendor;
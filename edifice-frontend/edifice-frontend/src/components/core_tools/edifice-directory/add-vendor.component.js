import React, { Component } from "react";
import VendorDataService from "./../../../services/vendor.service";

class AddVendor extends Component {

  constructor(props) {
    super(props);
    //this.retriveVendors = this.retrieveVendors.bind(this);
    this.state = {
      vendors: [],
      currentIndex: -1,
      content: "",
      id: this.props.match.params.id
    };
  }

  render() {
    return (
      <div className="">
        <h2>New Vendor</h2><hr/>
        <div className="vendorBox" >
          <h5>Enter necessary vendor details</h5>

          <label htmlFor="" hidden>Id</label>
          <input className="form-control" type="number" hidden/>
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
          <input className="form-control" type="text" required/>
          <br/>

          <label htmlFor="">Email</label>
          <input className="form-control" type="text" required/>
          <br/>

          
          <label htmlFor="">Contact Person Name</label>
          <input className="form-control" type="text" required/>
          <br/>
          <br/>

          <div>
          <a href="/vendor" className="btn btn-success">Add</a>
          </div>
          <div>
          <a className="btn btn-secondary" type="reset">Cancel</a>
          </div>
        </div>
        

      </div>
    );
  }
  
}

export default AddVendor;
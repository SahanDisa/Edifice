import React, { Component } from "react";

class UpdateTasks extends Component {

  render() {
    return (
      <div className="">
        <h2>Update Tasks</h2><hr/>
        <div className="mb-3">
          <h5>Task Name</h5>
          <form>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">No</label>
                <input className="form-control" type="number" min="0" required/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="">Title</label>
                <input className="form-control" type="text" required/>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Status</label>
                <select className="form-control" required>
                  <option value="Initialized" selected>Initialized</option>
                  <option value="In progress">In progress</option>
                  <option value="Ready for review">Ready for review</option>
                  <option value="Closed">Closed</option>
                  <option value="Void">Void</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Assignee</label>
                <select className="form-control" required>
                  <option value="Assignee 1" selected>Assignee 1</option>
                  <option value="Assignee 2">Assignee 2</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Due Date</label>
                <input className="form-control" type="date" min="" required/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="">Category</label>
                <select className="form-control" required>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Discription</label>
                <input className="form-control" type="textarea"/>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="privateCheck" />
                <label htmlFor="privateCheck" className="form-check-label">Private</label>
              </div>
            </div>
            <a href="/managetasks" type="submit" className="btn btn-success mr-2">Save</a>
            <a href="/managetasks" type="submit" className="btn btn-danger">Cancel</a>
          </form>
        </div>
      </div>
    );
  }
  
}

export default UpdateTasks;
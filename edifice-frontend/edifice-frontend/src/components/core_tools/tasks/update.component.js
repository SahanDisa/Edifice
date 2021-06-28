import React, { Component } from "react";

class UpdateTasks extends Component {

  render() {
    return (
      <div className="">
        <h2>Update Tasks</h2><hr/>
        <div className="">
            <h5>General Information</h5>
            <form action="">
            <h5>New Tasks</h5>
            <div>
              <label htmlFor="">No</label>
              <input type="number" required/>
            </div>
            <div>
              <label htmlFor="">Title</label>
              <input type="text" required/>
            </div>
            <div>
              <label htmlFor="">Status</label>
              <select duedate="" id="" required>
                <option value="Initialized">Initialized</option>
                <option value="In progress">In progress</option>
                <option value="Ready for review">Ready for review</option>
                <option value="Closed">Closed</option>
                <option value="Void">Void</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Assignee</label>
              <select duedate="" id="" required>
                <option value="Assignee 1">Assignee 1</option>
                <option value="Assignee 2">Assignee 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Due Date</label>
              <input type="date" min="" required/>
            </div>
            <div>
              <label htmlFor="">Category</label>
              <select duedate="" id="">
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Private</label><input type="checkbox"/>
            </div>
            <div>
              <label htmlFor="">Discription</label>
              <input type="textarea"/>
            </div>
            {/* <label htmlFor="">Attachment</label> */}
            <a href="/managetasks" className="btn btn-primary">Cancel</a>
            <a href="#" className="btn btn-success">Save</a>
          </form>
        </div>
      </div>
    );
  }
  
}

export default UpdateTasks;
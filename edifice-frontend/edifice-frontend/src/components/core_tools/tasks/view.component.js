import React, { Component } from "react";

class ViewTasks extends Component {

  render() {
    return (
      <div className="">
          <h2>View Tasks</h2><hr/>
          <div>
            <h5>General Information</h5>
            <label htmlFor="">No</label>
            <input type="number" readonly/>
            <label htmlFor="">Title</label>
            <input type="text" readonly/>
            <label htmlFor="">Status</label>
            <input type="text" readonly/>
            <label htmlFor="">Assignee</label>
            <input type="text" readonly/>
            <label htmlFor="">Due Date</label>
            <input type="date" min="" readonly/>
            <label htmlFor="">Category</label>
            <input type="text" readonly/>
            Private  <input type="checkbox"/>
            <label htmlFor="">Discription</label>
            <input type="textarea" readonly/>
            {/* <label htmlFor="">Attachment</label> */}
        </div>
        <br />
        <div className="jumbotron">
            <a href="#" className="btn btn-primary">Change Status</a>
            <a href="#" className="btn btn-success">Add a comment</a><hr/>
            <p>The task's status is currently ........</p>
            <label htmlFor="">Change Status to </label>
            <select name="" id="" required>
                <option value="Initialized">Initialized</option>
                <option value="In progress">In progress</option>
                <option value="Ready for review">Ready for review</option>
                <option value="Closed">Closed</option>
                <option value="Void">Void</option>
            </select><br /><br />
            <input type="textarea" placeholder="Comments(Optional)"/><br /><br />
            {/* <label htmlFor="">Attachment</label> */}
            <a href="#" className="btn btn-success">Update Status</a>
        </div>
      </div>
    );
  }
  
}

export default ViewTasks;
import React, { Component } from "react";

class ManageTasks extends Component {

  render() {
    return (
      <div className="">
        <h2>Manage Tasks</h2><hr/>
        <div className="">
          <h5>New Tasks</h5>
          <label htmlFor="">No</label>
          <input type="number" required/>
          <label htmlFor="">Title</label>
          <input type="text" required/>
          <label htmlFor="">Status</label>
          <select name="" id="" required>
            <option value="Initialized">Initialized</option>
            <option value="In progress">In progress</option>
            <option value="Ready for review">Ready for review</option>
            <option value="Closed">Closed</option>
            <option value="Void">Void</option>
          </select>
          <label htmlFor="">Assignee</label>
          <select name="" id="" required>
            <option value="Assignee 1">Assignee 1</option>
            <option value="Assignee 2">Assignee 2</option>
          </select>
          <label htmlFor="">Due Date</label>
          <input type="date" min="" required/>
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select><br />
          Private  <input type="checkbox"/>
          <label htmlFor="">Discription</label>
          <input type="textarea"/>
          {/* <label htmlFor="">Attachment</label> */}
          <br /><br />
          <a href="/managetasks" className="btn btn-success">Add</a>
        </div>
        <input type="text" placeholder="Search" /><br/>
        <button>Add Filters</button>
        <table>
          <tr>
            <th></th>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assignee</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Category</th>
            <th></th>
          </tr>
        </table>
      </div>
    );
  }
  
}

export default ManageTasks;
import React, { Component } from "react";

class TaskConfiguration extends Component {

  render() {
    return (
      <div className="">
        <h2>Task Tool Configuration</h2><hr/>
        <h5>Task Categories</h5>
        <table>
          <tr>
            <th>Name</th>
            <th>Active</th>
            <th>Delete</th>
          </tr>
        </table>
        <input type="text" placeholder="Task category" />
        <button>Create</button>
      </div>
    );
  }
  
}

export default TaskConfiguration;
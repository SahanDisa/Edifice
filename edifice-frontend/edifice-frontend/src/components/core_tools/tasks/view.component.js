import React, { Component } from "react";

class ViewTasks extends Component {

  render() {
    return (
      <div className="">
        <h2>View Tasks</h2><hr/>
        <form action="">
          <h5>New Tasks</h5>
          <div>
            <label htmlFor="">No</label>
            <input type="number" readonly/>
          </div>
          <div>
            <label htmlFor="">Title</label>
            <input type="text" readonly/>
          </div>
          <div>
            <label htmlFor="">Status</label>
            <input type="text" readonly/>
          </div>
          <div>
            <label htmlFor="">Assignee</label>
            <input type="text" readonly/>
          </div>
          <div>
            <label htmlFor="">Due Date</label>
            <input type="date" min="" readonly/>
          </div>
          <div>
            <label htmlFor="">Category</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Private</label><input type="checkbox"/>
          </div>
          <div>
            <label htmlFor="">Discription</label>
            <input type="textarea"/>
          </div>
          {/* <label htmlFor="">Attachment</label> */}
        </form>
        <br />
        <div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" id="changeStatus" data-toggle="tab" href="#status" aria-controls="status" aria-selected="true">Change Status</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="addComment" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">Add Comment</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="changeStatus">
              <br />
              <p>The task's status is currently .........</p>
              <form action="">
                <div>
                  <label htmlFor="">Change Status to </label>
                  <select name="" id="" readonly>
                      <option value="Initialized">Initialized</option>
                      <option value="In progress">In progress</option>
                      <option value="Ready for review">Ready for review</option>
                      <option value="Closed">Closed</option>
                      <option value="Void">Void</option>
                  </select>
                </div>
                <input type="textarea" placeholder="Comments(Optional)"/><br /><br />
                {/* <label htmlFor="">Attachment</label> */}
                <a href="#" className="btn btn-success">Update Status</a>
              </form>
            </div>
            <div class="tab-pane fade" id="comment" role="tabpanel" aria-labelledby="addComment">
              <br />
              <input type="textarea" placeholder="Comments" readonly/><br /><br />
              {/* <label htmlFor="">Attachment</label> */}
              <a href="#" className="btn btn-success">Comment</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default ViewTasks;
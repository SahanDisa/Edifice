import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';

import UpdateTasks from "./update.component";
import ViewTasks from "./view.component";

const data = [
  {edit:<a href="/managestasks/update" className="btn btn-outline-success">Edit</a>, view:<a href="/managestasks/view" className="btn btn-outline-primary">View</a>, no: 1, title:"", description:"Collect all the biddings", category:"Bidding"}
];
const columns = [
  {
    dataField: 'edit',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'view',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'no',
    text: 'No',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'title',
    text: 'Title',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'description',
    text: 'Description',
    headerStyle: (column, colIndex) => {
    return { width: '50%', textAlign: 'center' };}
  },{
    dataField: 'assignee',
    text: 'Assignee',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'duedate',
    text: 'Due Date',
    headerStyle: (column, colIndex) => {
        return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'status',
    text: 'Status',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  },
  {
    dataField: 'category',
    text: 'Category',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

class ManageTasks extends Component {

  render() {
    return (
      <div className="">
        <h2>Manage Tasks</h2><hr/>
        <div className="">
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
            <a href="/managetasks" className="btn btn-success">Add</a>
          </form>
        
        </div>
        <div>
          <input type="text" placeholder="Search" /><br/>
          <a href="#" className="btn btn-outline-primary">Add Filter</a>
        </div>
        <div>
          <BootstrapTable 
            hover
            keyField='assignee'
            data={ data }
            columns={ columns } 
            cellEdit={ false }
          />
        </div>
        <div className="container mt-3">
          <Switch>
            <Route path="/managestasks/update" component={UpdateTasks} />
            <Route path="/managestasks/view" component={ViewTasks} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default ManageTasks;
import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
  {edit: <a href="/managesmeetings/update" className="btn btn-outline-success">Edit</a>}
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
    dataField: 'overview',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'date',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'time',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'location',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'status',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'items',
    text: '',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'extra',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

class UpdateMeetings extends Component {

  render() {
    return (
      <div className="">
        <h2>Update Meeting</h2><hr/>
        <div className="mt-3 mb-3">
        <h5>Meeting Name</h5>
          <form>
            <div className="form-row">
                <div className="form-group col-md-12 text-right">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="draftCheck" required/>
                        <label htmlFor="draftCheck" className="form-check-label">Draft Meeting</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="draftCheck" required/>
                        <label htmlFor="draftCheck" className="form-check-label">Private Meeting</label>
                    </div>
                </div>                
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="">Meeting No</label>
                    <input className="form-control" type="number" min="0" required/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="">Meeting Name</label>
                    <input className="form-control" type="text" required/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">Meeting Lcoation</label>
                    <input className="form-control" type="text" required/>
                </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Date</label>
                <input className="form-control" type="date" min="" required/>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="">Start Time</label>
                <input className="form-control" type="time" min="" required/>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="">End Time</label>
                <input className="form-control" type="time" min="" required/>
              </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="">Overview</label>
                    <textarea className="form-control" name="" id="" required></textarea>
                </div>
            </div>
            <div className="form-row mb-3">
                <div className="form-group col-md-6 mb-3">
                    <label htmlFor="">Scheduled Attendees</label>
                    <select className="form-control" required>
                        <option value="Attendee 1" selected>Attendee 1</option>
                        <option value="Attendee 2">Attendee 2</option>
                    </select>
                </div>
            </div>
            <a href="/managetasks" type="submit" className="btn btn-success mr-2">Save</a>
            <a href="/managetasks" type="submit" className="btn btn-danger">Cancel</a>
          </form>
        </div>
        <div class="accordion" id="accordionExample">
          <h5>Agenda</h5>
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Agenda item #1</button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <div className="">
                  <BootstrapTable 
                    hover
                    keyField='location'
                    data={ data }
                    columns={ columns } 
                    cellEdit={ false }
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Agenda item #2</button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <div className="">
                  <BootstrapTable 
                    hover
                    keyField='location'
                    data={ data }
                    columns={ columns } 
                    cellEdit={ false }
                  />
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
  
}

export default UpdateMeetings;
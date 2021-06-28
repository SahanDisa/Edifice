import React, { Component } from 'react';

class UpdateMeetings extends Component {

  render() {
    return (
      <div className="">
        <h2>Update Meeting</h2><hr/>
        <div className="mt-3">
        <h5>Meeting Name</h5>
          <form>
            <div className="form-row">
                <div className="form-group col-md-12 text-right">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="draftCheck" />
                        <label htmlFor="draftCheck" className="form-check-label">Draft Meeting</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="draftCheck" />
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
                    <textarea className="form-control" name="" id=""></textarea>
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
      </div>
    );
  }
  
}

export default UpdateMeetings;
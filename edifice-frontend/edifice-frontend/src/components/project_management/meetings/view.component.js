import React, { Component } from 'react';

class ViewMeetings extends Component {

  render() {
    return (
      <div className="">
        <h2>View Meeting</h2><hr/>
        <div className="mt-3">
        <h5>Meeting Name</h5>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6"></div>
              <div className="form-group col-md-2 form-check">
                <input type="checkbox" className="form-check-input mt-3" id="draftCheck" readOnly/>
                <label htmlFor="draftCheck" className="form-check-label">Draft Meeting</label>
              </div>
              <div className="form-group col-md-2 form-check">
                <input type="checkbox" className="form-check-input mt-3" id="draftCheck" readOnly/>
                <label htmlFor="draftCheck" className="form-check-label">Private Meeting</label>
              </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="">Meeting No</label>
                    <input className="form-control" type="number" min="0" readOnly/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="">Meeting Name</label>
                    <input className="form-control" type="text" readOnly/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">Meeting Lcoation</label>
                    <input className="form-control" type="text" readOnly/>
                </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Date</label>
                <input className="form-control" type="date" min="" readOnly/>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="">Start Time</label>
                <input className="form-control" type="time" min="" readOnly/>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="">End Time</label>
                <input className="form-control" type="time" min="" readOnly/>
              </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="">Overview</label>
                    <textarea className="form-control" name="" id="" readOnly></textarea>
                </div>
            </div>
            <div className="form-row mb-3">
                <div className="form-group col-md-6 mb-3">
                    <label htmlFor="">Scheduled Attendees</label>
                    <select className="form-control" readOnly>
                        <option value="Attendee 1" selected>Attendee 1</option>
                        <option value="Attendee 2">Attendee 2</option>
                    </select>
                </div>
            </div>
            <a href="/managemeetings" type="submit" className="btn btn-primary mr-2">Done</a>
          </form>
        </div>
      </div>      
    );
  }
  
}

export default ViewMeetings;
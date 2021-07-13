import React, { Component } from 'react';

class CreateMeeting extends Component {
    render() {
        return (  
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Add a New Meeting</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Meeting overview</label>
                                    <input className="form-control" type="text" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Category</label>
                                    <select className="form-control" name="" id="" required>
                                        <option value="1">Cat #1</option>
                                        <option value="2">Cat #2</option>
                                        <option value="3">Cat #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Date</label>
                                    <input className="form-control" type="date" min="" required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Time</label>
                                    <input className="form-control" type="time" min="" required/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Location</label>
                                    <input className="form-control" type="text" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="">No. of Items</label>
                                    <input className="form-control" type="number" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="">Status</label>
                                    <select className="form-control" name="" id="" required>
                                        <option value="1">Status #1</option>
                                        <option value="2">Status #2</option>
                                        <option value="3">Status #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a href="/managemeeting" className="btn btn-success">Add</a>
                                <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }

export default CreateMeeting;
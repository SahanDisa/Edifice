import React, { Component } from 'react';

class CreateCategory extends Component {
    render() {
        return (  
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Add a New Category</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form action="">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="">Category</label>
                                <input className="form-control" type="text" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="">Description</label>
                                <input className="form-control" type="text" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="">Titles</label>
                                <input className="form-control" type="text" required/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a href="#" className="btn btn-success">Add</a>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default CreateCategory;

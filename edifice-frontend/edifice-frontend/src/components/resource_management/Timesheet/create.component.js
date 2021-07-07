import React, { Component } from 'react';

class CreateTimesheet extends Component {
    render() {
        return (  
        <div>
            {/*------------------------------------ Add Emp Starts------------------------------------------------------------------ */}
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Add Employees</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <input className="form-control" type="text" placeholder="Search"/>  
                                </div>
                                <div class="col">
                                    <a href="" className="btn btn-success">search</a>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div class="container">                                
                            <div class="row">
                                <div class="col-4">
                                    <p>Crews</p>
                                    <div class="list-group" id="list-tab" role="tablist">
                                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Concrete Crew</a>
                                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Welders</a>
                                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Flooring Crew</a>
                                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Carpenters</a>
                                    </div>
                                </div>

                                <div class="col-4">
                                    
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><p>Concrete Crew</p></div>
                                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><p>Welders</p></div>
                                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><p>Flooring Crew</p></div>
                                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><p>Carpenters</p></div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-success" data-dismiss="modal">Add</button>
                    </div>
                </div>
            </div>
            {/*-------------------------------------------------------- Add Emp Ends----------------------------------------------------------------------*/}
        </div>  
        );
    }
  }

export default CreateTimesheet;





 
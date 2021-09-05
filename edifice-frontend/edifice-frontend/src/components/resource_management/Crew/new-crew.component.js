import React, { Component } from 'react';

import CrewDataService from "./../../../services/crew.service";

class NewCrew extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveCrew = this.saveCrew.bind(this);

    this.state = {
      id: null,
      name: "", 
      projectId: this.props.projectId,
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  saveCrew() {
    var data = {
      name: this.state.name,
      projectId: this.props.projectId
    };

    CrewDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          projectId: response.data.projectId,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
        const {projectId} = this.state;
        return (  
        <div>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Create New Crew</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                    <div>

                        <label htmlFor="">Enter crew Name</label>
                        <input 
                          className="form-control" 
                          type="text" 
                          required
                          id="name"
                          value={this.state.name}
                          onChange={this.onChangeName}
                          name="name"/>
                        <br/>

                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveCrew}>Add</button>
                </div>
              </div>
            </div>
        </div>
 
        );
    }
  }

export default NewCrew;

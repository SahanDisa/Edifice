import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import MeetingCategoryDataService from "../../../services/project_management/meetingcategory.service";
import CreateMeeting from './createmeeting.component';

const data = [
  {edit: <a href="/managesmeetings/update" className="btn btn-primary">Edit</a>, view:<a href="/managesmeetings/view" className="btn btn-success">View</a>,
  overview: "Updates on this week", date: "17/07/2021", time: "10:30 AM", location: "Zoom Platform", status: "Scheduled", items: "2", extra: ""
  }
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
    text: 'Meeting Overview',
    headerStyle: (column, colIndex) => {
    return { width: '50%', textAlign: 'center' };}
  }, {
    dataField: 'date',
    text: 'Meeting Date',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'time',
    text: 'Time',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'location',
    text: 'location',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'status',
    text: 'Status',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'items',
    text: 'Number of Items',
    headerStyle: (column, colIndex) => {
    return { width: '7%', textAlign: 'center' };}
  }, {
    dataField: 'extra',
    text: 'Extra',
    headerStyle: (column, colIndex) => {
        return { width: '7%', textAlign: 'center' };}
  }];

class MeetingsHome extends Component {
  constructor(props) {
      super(props);
      this.onChangeOverview = this.onChangeOverview.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.saveMeetingCategory = this.saveMeetingCategory.bind(this);
      this.state = {
        id: null,
        overview: "",
        description: "",
        projectId: this.props.match.params.id,
        meetingcat: [],
        currentIndex: -1,
        content: "",

        submitted: false
      };
    }

    onChangeOverview(e) {
      this.setState({
        overview: e.target.value
      });
    }

    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });
    }

    saveMeetingCategory() {
      console.log("click kala");  
      var data = {
        overview : this.state.overview,
        description: this.state.description,
        projectId: this.props.match.params.id
      };

      MeetingCategoryDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          overview: response.data.overview,
          description: response.data.description,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      window.location.reload();
    }

    render() {
      return (
        <div className="">
          <h2>Meetings</h2>
          <h6>Manage all aspects of your project meetings from agenda distribution</h6><hr/>
          <div className="container">            
            <h4 className="mt-2">Meeting Types</h4>
            <div className="container">
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="">Overview</label>
                  <input
                    className="form-control" 
                    type="text"
                    name="overview"
                    value={this.state.overview}
                    onChange={this.onChangeOverview}
                    required
                  />
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="">Description</label>
                  <input 
                    className="form-control" 
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    required
                  />
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="">.</label>
                  <button
                      className="btn btn-primary"
                      onClick={this.saveMeetingCategory}
                  >Add</button>
                </div>
              </div>
            </div><hr/>
            <h4 className="mb-3">Meetings</h4>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" id="allmeetings" data-toggle="tab" href="#status" aria-controls="status" aria-selected="true">All Meetings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="recyclebin" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">Recycle Bin</a>
              </li>
            </ul>
            
            <div class="tab-content" id="myTabContent">
              
              <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="allmeetings">
                
                <form>
                  <div className="form-row mt-3">
                    <div class="col-md-12 text-right">
                      <a data-toggle="modal" data-target="#CreateMeeting" href="#" className="btn btn-primary">+ Create Meeting</a>
                    </div>
                    <div className="form-group col-md-4">
                      <input className="form-control" type="text" placeholder="Search" />
                    </div>
                    <a href="#" className="btn btn-outline-dark mb-3">Add Filter</a>
                  </div>
                </form>

                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Weekly OAC Meeting</button>
                      </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="">
                          <div class="col-md-12 text-right mb-2">
                            <a href="#" className="btn btn-primary">+ Follow-up Meeting</a>
                          </div>
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
                <div>
                  <div class="col-md-12 text-left mt-3 mb-3">
                    <a href="/meetingsconfiguration" className="btn btn-primary">+ Add overview</a>
                  </div>
                </div>
              </div>
              
              <div className="tab-pane fade" id="comment" role="tabpanel" aria-labelledby="recyclebin">
                <h5 className="mt-3 ml-9">There is no meetings in the Recycle Bin</h5>
                <a href="/projectmanagementhome/1" type="submit" className="btn btn-primary mt-2">Ok</a>
              </div>

            </div>

          </div>
          {/* Create Meeting Starts */}
          <div className="modal fade" id="CreateMeeting" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <CreateMeeting/>        
          </div>
          {/* Create Meeting Ends */}
        </div>
      );
    }
    
  }

export default MeetingsHome;
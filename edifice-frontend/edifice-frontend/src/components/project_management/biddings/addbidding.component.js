import React, { Component } from "react";
import { Link } from "react-router-dom";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default class AddBidding extends Component {
  constructor(props) {
    super(props);
    this.saveBidding = this.saveBidding.bind(this);
    this.state = {
        submitted: false,
        numbertype: 1
    };
  }
  componentDidMount() {
  }
  saveBidding() {
    this.setState({
    submitted: true
    });
  }

  render() {
    const {numbertype} = this.state;
    // if(numbertype == 1){
    //    numbertype = 2;     
    // }else if(numbertype == 2){
    //    numbertype = 3;
    // }else{
      
    // }
    return (
      <div className="container">
      
        {this.state.submitted ? (
          <div>
            <div className="row">
            <div className="col-sm-8">
            <h4>Invite the Bidders</h4>
            <h6>sucessfully submitted the bid package specification</h6>
              <div className="form-group">
                <label htmlFor="drawtype">Vendor Category: </label>
                <select 
                  className="form-control"
                  id="datatype"
                  required
                  value={this.state.drawtype}
                  onChange={this.onChangeType}
                  name="drawtype"
                >
                  <option>Concrete - Mixture</option>
                  <option>Concrete - Quantity</option>
                  <option>Brick & Block</option>
                  <option>Electrical</option>
                  <option>Plumbing</option>
                  <option>Furniture & Wood</option>
                </select>
                {/* <br /> */}
              </div>
              <button className="btn btn-success" onClick={this.newDrawing}>
              Send Invitation 
              </button>
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 1</strong><br/>Fill Bid Package</h6> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Upload Bid Document</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 3</strong><br/>Invite Bidders</h5></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
            
          </div>
        ) : (
          <div class="container">
            <h2>Add New Bidding</h2>
            
            <div className="row">
            <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                // value={this.state.name}
                // onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                // value={this.state.description}
                // onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="drawtype">Category</label>
              {/* <input
                type="text"
                className="form-control"
                id="description"
                required
                // value={this.state.description}
                // onChange={this.onChangeDescription}
                name="description"
              /> */}
              <select 
                className="form-control"
                id="datatype"
                required
                value={this.state.drawtype}
                onChange={this.onChangeType}
                name="drawtype"
              >
                <option>Infrastructure</option>
                <option>Finishing</option>
                <option>Plumbing</option>
                <option>Electrical</option>
              </select>
              {/* <br /> */}
            </div>
            <div className="form-group">
              <label htmlFor="drawtype">Bid Close Date: </label>
              <input
                type="date"
                className="form-control"
                id="datatype"
                required
                // value={this.state.drawtype}
                // onChange={this.onChangeType}
                name="drawtype"
              />
            </div>
            <div className="form-group">
              <label htmlFor="biddoc">Upload Bid Document: </label>
              <input
                type="file"
                // className="form-control"
                id="datatype"
                required
                // value={this.state.drawtype}
                // onChange={this.onChangeType}
                name="biddoc"
              />
              <a href="/document" className="btn btn-primary">Upload from System</a>
            </div>
            <div className="form-group">
              <label htmlFor="drawtype">Bid Specification: </label>
              <textarea
                // type="textarea"
                className="form-control"
                id="specification"
                required
                // value={this.state.drawtype}
                // onChange={this.onChangeType}
                name="specification"
              />
            </div>
            <button onClick={this.saveBidding} className="btn btn-success">
              Next
            </button>
            </div>
            <div className="col-sm-4">
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h5><strong>Step 1</strong><br/>Fill Bid Package</h5> </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 2</strong><br/>Upload Bid Document</h6></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent><h6><strong>Step 3</strong><br/>Invite Bidders</h6></TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
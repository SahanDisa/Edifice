import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddBidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
        submitted: false
    };
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newDrawing}>
              Add Another 
            </button>
          </div>
        ) : (
          <div class="container">
            <h2>Add New Bidding</h2>
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
              <input
                type="text"
                className="form-control"
                id="description"
                required
                // value={this.state.description}
                // onChange={this.onChangeDescription}
                name="description"
              />
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

            <button onClick={this.saveDrawing} className="btn btn-success">
              Create
            </button>
          </div>
        )}
      </div>
    );
  }
}
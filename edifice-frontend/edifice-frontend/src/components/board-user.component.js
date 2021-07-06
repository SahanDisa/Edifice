import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserService from "./../services/user.service";
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Project Management Home</h3>
        </header>
        
        <div className="card">
            <h5 className="card-header">Project Port City</h5>
            <div className="card-body">
              <h5 className="card-title">Port City: Apartment Section 01</h5>
              <p className="card-text">Investment project in the port city</p>
              <CircularProgress variant="determinate" color="secondary" value={71} />
              <p>71%</p>
              <br/>
              <a href="/projectmanagementhome" className="btn btn-primary">Manage</a>
            </div>
        </div>
        <div className="card">
            <h5 className="card-header">Project Beach Tangalle</h5>
            <div className="card-body">
              <h5 className="card-title">Port City: Apartment Section 01</h5>
              <p className="card-text">Investment project in the port city</p>
              <CircularProgress variant="determinate" color="primary" value={47} />
              <p>47%</p>
              <br/>
              <a href="/projectmanagementhome" className="btn btn-primary">Manage</a>
            </div>
        </div>
        <div className="card">
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Paper className="paper">
                <h5 className="card-header">Project Atlana</h5>
                <div className="card-body">
                  <h5 className="card-title">Port City: Apartment Section 01</h5>
                  <p className="card-text">Investment project in the port city</p>
                  <CircularProgress variant="determinate" color="success" value={61} />
                  <p>61%</p>
                  <a href="/projectmanagementhome" className="btn btn-primary">Manage</a>
                  <br/>
                </div>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                {/* <Paper className="paper">
                <h5>Progress Measures</h5>
                <CircularProgress variant="determinate" color="success" value={61} />
                <p>61%</p>
                <a href="/projectmanagementhome" className="btn btn-primary">Manage</a>
                <br/>
                
                </Paper>  */}
              </Grid>
            </Grid>
        </div>
        
      </div> 
    );
  }
}
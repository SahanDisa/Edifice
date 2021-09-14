import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import errorIcon from "././../assets/unnamed.gif";

export default class ErrorPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: "",
      };
    }
    componentDidMount() {
     
    }
  
    render() {
      const {id} = this.state;
      return (
        <div className="container">
            <center>
                <h3>Error 404 : Page has not builded by Edifice</h3>
                <img
                    src={errorIcon}
                    alt="profile-img"
                    className="profile-img-card"
                    style={{'height': '350px', 'width':'350px'}}
                    id="img"
                />
                <p><a href="/login">Click here</a> to restart the process or contact the system admin for more infomation</p>
            </center>
        </div>
      );
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

//styles classes

export default class PortfolioHome extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.state = {
        drawings: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
      };
    }
  
    componentDidMount() {
      this.retrieveDrawing(this.props.match.params.id);
    }
    retrieveDrawing(id) {
      DrawingDataService.getAll(id)
        .then(response => {
          this.setState({
            drawings: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { drawings ,currentIndex,id } = this.state;
        // const classes = useStyles();
        return (
            <div>
            <div className="jumbotron">
                <h2>Portfolio</h2>
                <p>Detailed version of the project abstraction</p>
            </div>
            <div className="container">
                <h3>Project Profile & Team</h3>
                <p>Project Name, Description,Location,</p>
                <ul>
                    <li>Project director</li>
                    <li>Project Manager</li>
                    <li>Project Engineers</li>
                </ul>
            </div>
            <div className="container">
                <h3>Project Departments</h3>
                <p>Project Department details</p>
                
            </div>
            <div className="container">
                <h3>Project Milestones</h3>
                <p>conatines the project milestones and stages of the project</p>
                
            </div>
            <div className="container">
                <h3>Project Analytics</h3>
                <p>conatines the necessary progress measurement of each section</p>
                
            </div>
            </div>
        );
    }
}
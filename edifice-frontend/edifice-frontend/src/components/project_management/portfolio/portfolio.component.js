import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
      this.getSteps = this.getSteps.bind(this);
      this.state = {
        drawings: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id,
        activeStep: 0
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
    getSteps() {
        return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
      }

    getStepContent(step) {
        switch (step) {
          case 0:
            return `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`;
          case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
          case 2:
            return `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`;
          default:
            return 'Unknown step';
        }
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
            {/* stepper */}
            <div className="container">
           
            </div>
            
            </div>
        );
    }
}
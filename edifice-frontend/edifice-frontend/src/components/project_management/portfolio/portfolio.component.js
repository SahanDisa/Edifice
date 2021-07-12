import React, { Component } from "react";
import ApexCharts from 'apexcharts'
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
// import Typography from '@material-ui/core/Typography';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';

//styles classes

export default class PortfolioHome extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      
      this.state = {
        drawings: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id,
        activeStep: 0,
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          }
        }
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
                {/* Info */}
                <div className="row">
                <div className="card text-dark bg-info">
                  <div className="card-header">Engineering </div>
                  <div className="card-body">
                    <h5 className="card-title">Enginnering Division</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
                <div className="card text-dark bg-info">
                  <div className="card-header">Engineering </div>
                  <div className="card-body">
                    <h5 className="card-title">Block Section 1</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
                <div className="card text-dark bg-info">
                  <div className="card-header">Engineering </div>
                  <div className="card-body">
                    <h5 className="card-title">Block Section 2</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="container">
                <h3>Project Milestones</h3>
                <p>conatines the project milestones and stages of the project</p>
                // Stepper
                {/* <Timeline align="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        9:30 am
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <FastfoodIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        10:00 am
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary">
                        <LaptopMacIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                      </TimelineDot>
                      <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="secondary">
                        <RepeatIcon />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline> */}
            </div>
            <div className="container">
                <h3>Project Analytics</h3>
                <p>conatines the necessary progress measurement of each section</p>
                // Project Charts (min 2)
            </div>
            {/* stepper */}
            <div className="container">
           
            </div>
           
            </div>
        );
    }
}
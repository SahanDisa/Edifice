import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell, LineChart, Line, Label , XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import PortfolioDataService from "../../../services/portfolio.service";
import ProjectDataService from "./../../../services/project.service";
import DocumentDataService from "./../../../services/documentfile.service";
import MilestoneService from "../../../services/milestone.service";
import PortfolioProgressService from "../../../services/portfolioprogress.service";

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AdjustSharpIcon from '@material-ui/icons/AdjustSharp';
import Paper from '@material-ui/core/Paper';
import { ProgressBar } from "react-bootstrap";
import { Card } from "react-bootstrap";

//styles classes
const data = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Not Completed', value: 200 },
];
const dataline = [
  {
    name: 'January 2021',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Feburary 2021',
    uv: 30,
    pv: 13.98,
    amt: 22.10,
  },
  {
    name: 'March 2021',
    uv: 20,
    pv: 98,
    amt: 22.90,
  },
  {
    name: 'April 2021',
    uv: 27.80,
    pv: 39.08,
    amt: 20,
  },
  {
    name: 'May 2021',
    uv: 18.90,
    pv: 48,
    amt: 21.81,
  },
  {
    name: 'June 2021',
    uv: 23.90,
    pv: 38,
    amt: 25,
  },
  {
    name: 'July 2021',
    uv: 34.90,
    pv: 43,
    amt: 21,
  },
];
//yellow #FFBB28
const COLORS = ['#273F7D', '#6B7BA4', '#EF253D'];

export default class PortfolioHome extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawingStatus = this.retrieveDrawingStatus.bind(this);
      this.retrieveDepartments = this.retrieveDepartments.bind(this);
      this.retriveMilestones = this.retriveMilestones.bind(this);
      this.findCompleteCount = this.findCompleteCount.bind(this);
      this.checkMilestone = this.checkMilestone.bind(this);
      this.getPoints = this.getPoints.bind(this);
      this.getTimeline = this.getTimeline.bind(this);
      
      this.state = {
        drawings: [],
        departments: [],
        milestones: [],
        currentIndex: -1,
        content: "",
        milestoneCount: 0,
        completeMilestoneCount: 0,

        drawingComplete: 0,
        drawingPending: 0,
        drawingIncomplete: 0,
        documentComplete: 0,
        documentPending: 0,
        documentIncomplete: 0,
        id: this.props.match.params.id,
        projectId: this.props.match.params.id,

        points: [],
        project:[],
        totaldays: 0,
        remaindays: 0,
      };
    }
  
    componentDidMount() {
      this.retrieveDrawingStatus(this.props.match.params.id);
      this.retrieveDocumentStatus(this.props.match.params.id);
      this.retrieveDepartments(this.props.match.params.id);
      this.retriveMilestones(this.props.match.params.id);
      this.findCompleteCount(this.props.match.params.id);
      this.getPoints(this.props.match.params.id);
      this.retrieveProjectDetails(this.state.id);
      this.getTimeline();
    }
    retrieveProjectDetails(id) {
      ProjectDataService.get(id)
        .then(response => {
          this.setState({
            project: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    getPoints(id){
      PortfolioProgressService.getAll(id)
        .then(response => {
          this.setState({
            points: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    retrieveDepartments(id){
      PortfolioDataService.getAllDep(id)
        .then(response => {
          this.setState({
            departments: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    retriveMilestones(id){
      PortfolioDataService.getAllMilestones(id)
        .then(response => {
          this.setState({
            milestones: response.data,
            milestoneCount: response.data.length
          });
          console.log(response.data);
          //console.log("Milestone count : "+this.state.milestoneCount);
        })
        .catch(e => {
          console.log(e);
        });
    }
    retrieveDrawingStatus(id) {
      DrawingDataService.getStatus(id,"Complete")
        .then(response => {
          this.setState({
            drawingComplete: response.data.length,
            // dataPie: response.data.length,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        DrawingDataService.getStatus(id,"Pending")
        .then(response => {
          this.setState({
            drawingPending: response.data.length,
            //dataPie: response.data.length,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        DrawingDataService.getStatus(id,"Not Complete")
        .then(response => {
          this.setState({
            drawingIncomplete: response.data.length,
            //dataPie: response.data.length,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    retrieveDocumentStatus(id) {
      DocumentDataService.getStatus(id,"Complete")
        .then(response => {
          this.setState({
            documentComplete: response.data.length,
            // dataPie: response.data.length,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        DocumentDataService.getStatus(id,"Pending")
        .then(response => {
          this.setState({
            documentPending: response.data.length,
            //dataPie: response.data.length,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        DocumentDataService.getStatus(id,"Not Complete")
        .then(response => {
          this.setState({
            documentIncomplete: response.data.length,
            //dataPie: response.data.length,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    findCompleteCount(id){
      MilestoneService.findCompleted(id)
        .then(response => {
          this.setState({
            completeMilestoneCount: response.data.length
          });
          //console.log("completeMilestoneCount : "+this.state.completeMilestoneCount);
        })
        .catch(e => {
          console.log(e);
        });
    }
    checkMilestone(event){
      console.log("checked PrevCount : "+ this.state.completeMilestoneCount);
      //console.log(event.target.value); // value of id
      var data = {
        id: event.target.value,
        completed: true,
      };
      
      MilestoneService.update(event.target.value, data)
        .then(response => {
          this.setState({
            completeMilestoneCount: this.state.completeMilestoneCount + 1,
            }
          );
          console.log(response.data);
          console.log("New Count : "+this.state.completeMilestoneCount);
        })
        .catch(e => {
          console.log(e);
      });
      var datapoint = {
        name : (new Date().getFullYear()) + " "+(new Date().toLocaleString('en-us', { month: 'long' })),
        progress: ( (this.state.completeMilestoneCount + 1)/this.state.milestoneCount).toFixed(3),
        projectId: this.state.projectId,
      }
      console.log("Plot Function : "+datapoint.name+" "+datapoint.progress+" "+datapoint.projectId);

      PortfolioProgressService.create(datapoint)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          progress: response.data.progress,
          projectId: response.data.projectId,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      window.location.reload();
    }
    getTimeline(){
      // const today = new Date();
      // const date1 = new Date(this.project.startdate);
      // const date2 = new Date(this.project.enddate);
      // const diffTime = Math.abs(date2 - date1);
      // const diffTime2 = Math.abs(date2 - today);
      // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      // const remainDays = Math.ceil(diffTime2/(1000 * 60 * 60 * 24));
      // console.log(diffTime + " milliseconds");
      // console.log(diffDays + " days");
      // console.log(remainDays + " remain days");
    }
    
    uncheckMilestone(){
      console.log("unchecked");
    }
 
    render() {
        const { milestones, departments, currentIndex,id,drawingComplete,drawingPending,drawingIncomplete,
          documentComplete,documentPending,documentIncomplete,points,project} = this.state;
        
        const dataPie = [
            { name: 'Completed', value:  (drawingComplete+documentComplete)},
            { name: 'Pending', value: (drawingPending + documentPending)},
            { name: 'Not Completed', value: (drawingIncomplete + documentIncomplete)},
        ];

        const total = drawingComplete + drawingPending + drawingIncomplete + documentComplete + documentPending + documentIncomplete;
        
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
        };

        return (
            <div>
            <h2>Portfolio</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">
                Home
              </Link>
              <Link color="inherit" to={"/projectmanagementhome/"+id}>
                App Dashboard
              </Link>
              <Link color="textPrimary" to={"/portfolio/"+id} aria-current="page">
                Portfolio
              </Link>
            </Breadcrumbs>
            <hr></hr>
            <div>
              <h3>Project Analytics</h3>
              <h6>Graphical representation of the progress measurements based on project services</h6>
              <hr></hr>
                <div className="row">
                  <div className="col-6">
                  <h4>Overall Progress</h4>
                  <PieChart width={500} height={300}>
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={dataPie}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />   
                      ))}
                    </Pie>
                  </PieChart>
                  </div>
                  <div className="col-6">
                  <h4>Milestone Progress</h4>
                  <LineChart
                    width={500}
                    height={300}
                    data={points}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line type="monotone" dataKey="pv" stroke="#273F7D" activeDot={{ r: 8 }} /> */}
                    {/* <Line type="monotone" dataKey="uv" stroke="#EF253D" /> */}
                    <Line type="monotone" dataKey="progress" stroke="#273F7D" activeDot={{ r: 8 }} />
                  </LineChart>
                  </div>
                </div>   
            </div>
            <hr></hr>
            
            {/* Progress Tab */}
            <div>
              <h3>Progress by Activities</h3>
              {/* {drawingComplete+" "+drawingPending+" "+drawingIncomplete} */}
              <h6>Visulize the progress of all the activities</h6>
              {/* {(new Date().getFullYear())}{" "}{(new Date().toLocaleString('en-us', { month: 'long' }))} */}
              <div className="container">
                <h6>Drawing</h6>
                <ProgressBar>
                  <ProgressBar variant="primary" now={(drawingComplete)/(drawingComplete + drawingPending + drawingIncomplete)*100} key={1} label="Complete" />
                  <ProgressBar variant="success" now={(drawingPending)/(drawingComplete + drawingPending + drawingIncomplete)*100} key={2} label="Pending" />
                  <ProgressBar variant="danger" now={(drawingIncomplete)/(drawingComplete + drawingPending + drawingIncomplete)*100} key={3}  label="Not Complete"/>
                </ProgressBar>
                <h6>Document</h6>
                <ProgressBar>
                <ProgressBar variant="primary" now={(documentComplete)/(documentComplete + documentPending + documentIncomplete)*100} key={1} label="Complete" />
                  <ProgressBar variant="success" now={(documentPending)/(documentComplete + documentPending + documentIncomplete)*100} key={2} label="Pending" />
                  <ProgressBar variant="danger" now={(documentIncomplete)/(documentComplete + documentPending + documentIncomplete)*100} key={3}  label="Not Complete"/>
                </ProgressBar>
                <h6>Punch List</h6>
                <ProgressBar>
                  <ProgressBar variant="primary" now={45} key={1} label="Complete"/>
                  <ProgressBar variant="success" now={30} key={2} label="Pending" />
                  <ProgressBar variant="danger" now={25} key={3}  label="Not Complete"/>
                </ProgressBar>
              </div>
            </div>
            <hr></hr>
            <div>
                <h3>Project Team</h3>
                <h6>Deatails of the staff members and vendor details</h6>
                {/* <Card>
                  <Card.Body>
                    <Card.Title><h4>{project.title}</h4></Card.Title>
                    <Card.Text>
                    <h6>Description : {project.description}</h6>
                    <h6>Location : {project.location}</h6>
                    <h6>From <b>{project.startdate}</b> To <b>{project.enddate}</b></h6> 
                    </Card.Text>
                  </Card.Body>
                </Card>  */}
                <div className="container">
                  <h6>Manager - 2</h6>      
                  <ProgressBar variant="primary" now={10} />
                  <h6>Enginners - 10</h6>  
                  <ProgressBar variant="success" now={50} />
                  <h6>Architects - 8</h6>
                  <ProgressBar variant="warning" now={40} />
                  <h6>Sub contractors/Vendors - 17</h6>
                  <ProgressBar variant="danger" now={72} />
                </div>
            </div>
            <hr></hr>
            <div>
                <h3>Project Departments</h3>
                <h6>Project Department details</h6>
                {/* Info */}
                <div className="row">
                {departments &&
                      departments.map((department, index) => (
                          <div
                          className={
                          "container col-3" +
                          (index === currentIndex ? "active" : "")
                          }
                          key={index}
                      >
                      {/* unit data */}
                      
                      <Card>
                      <Card.Body>
                            <Card.Title><h4>{department.title}</h4></Card.Title>
                            <Card.Text>
                            {department.description}
                            </Card.Text>
                        </Card.Body>
                      </Card>
                      </div>
                  ))}
                  </div>
            </div>
            <hr></hr>
            <div>
              <h3>Project Milestones</h3>
              <h6>Represent the state diagram project milestones of the project</h6>
              <center>
                {/* <h5>Total Days</h5>
                <h4>Remaining Days</h4> */}
              </center>
              <div className="container">
                {/* stepper */}
                <div>
                <Timeline align="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="secondary">
                        <AdjustSharpIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h5>Start</h5></TimelineContent>
                </TimelineItem>
                {milestones && milestones.map((milestone, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        {milestone.duration}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="primary">
                        <AssignmentIcon/>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className="container">
                      <Typography variant="h6" component="h1">
                        {milestone.title}
                      </Typography>
                      <Typography>
                      {milestone.description}
                      <br/>
                      { milestone.completed ? 
                      <h6>Completed {" "}
                      <input type="checkbox" name="check" value={milestone.id} onChange={this.uncheckMilestone} checked></input>
                      </h6>
                      : 
                      <h6>Incomplete
                      <input type="checkbox" name="uncheck" value={milestone.id} onChange={this.checkMilestone}></input>
                      </h6>
                      }
                      </Typography>
                    </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
                  <TimelineItem>
                    <TimelineSeparator>
                      {/* <TimelineDot variant="outlined" color="secondary" /> */}
                      {/* <TimelineConnector /> */}
                    </TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary">
                      <AdjustSharpIcon />
                    </TimelineDot>
                    <TimelineContent><h5>End</h5></TimelineContent>
                  </TimelineItem>
                </Timeline>
                </div>
              </div>
            </div>
            </div>
        );
    }
}
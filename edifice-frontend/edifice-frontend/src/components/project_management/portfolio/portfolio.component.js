import React, { Component, PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Paper from '@material-ui/core/Paper';
import { ProgressBar } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";

//styles classes
const data = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  // { name: 'Group C', value: 300 },
  { name: 'Not Completed', value: 200 },
];
const dataline = [
  {
    name: 'January 2021',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feburary 2021',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March 2021',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April 2021',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May 2021',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June 2021',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July 2021',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
//yellow #FFBB28
const COLORS = ['#273F7D', '#6B7BA4', '#EF253D'];

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

export default class PortfolioHome extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      
      this.state = {
        drawings: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id,
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
            <h2>Portfolio</h2>
            <p>Project abstraction</p>
            <hr></hr>
            <div className="container">
              <h3>Project Analytics</h3>
              <p>Graphical representation of the progress measurements based on items</p>
                <div className="row">
                  <div className="col-6">
                  <h4>Overall Progress</h4>
                  <PieChart width={500} height={300}>
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                  </div>
                  <div className="col-6">
                  <h4>Monthly Progress</h4>
                  <LineChart
                    width={500}
                    height={300}
                    data={dataline}
                    // margin={{
                    //   top: 5,
                    //   right: 30,
                    //   left: 20,
                    //   bottom: 5,
                    // }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#273F7D" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#EF253D" />
                  </LineChart>
                  </div>
                </div>   
            </div>
            <hr></hr>
            <div className="container">
                <h3>Project Profile & Team</h3>
                <Card>
                  <Card.Body>
                    <Card.Title><h4>Port City: Tower</h4></Card.Title>
                    <Card.Text>
                    <h6>Description : Two tower construction</h6>
                    <h6>Location: Colombo 2</h6>
                    <h6>From <b>2021-07-16</b> To <b>2022-07-16</b></h6> 
                    </Card.Text>
                  </Card.Body>
                </Card> 
                <div>
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
            <div className="container">
                <h3>Project Departments</h3>
                <p>Project Department details</p>
                {/* Info */}
                <Row>
                  <Col sm>
                  <Card>
                  <Card.Body>
                        <Card.Title><h4>Tower 1</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col sm>
                  <Card>
                  <Card.Body>
                        <Card.Title><h4>Tower 2</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col sm>
                  <Card>
                  <Card.Body>
                        <Card.Title><h4>Finishing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
                </Row>   
            </div>
            <hr></hr>
            <div className="container">
                <h3>Project Milestones</h3>
                <p>conatines the project milestones and stages of the project</p>
  
                <Timeline align="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        3 months
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <EventAvailableIcon  />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Milestone 1
                        </Typography>
                        <Typography>Insfrastructure</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        4 months
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <EventAvailableIcon  />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Milestone 2
                        </Typography>
                        <Typography>Initial Tower 1 construction</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        8 months
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <EventAvailableIcon  />
                      </TimelineDot>
                      <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Milestone 3
                        </Typography>
                        <Typography>Initial Tower 2 construction</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        8 months
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <EventAvailableIcon  />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          Finishing
                        </Typography>
                        <Typography>Finishing process</Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
            </div>
            
            {/* stepper */}
            <div className="container">
           
            </div>
           
            </div>
        );
    }
}
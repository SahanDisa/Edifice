import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default class ActionPlanSinglePage extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        id: this.props.match.params.id,
        title: "",
        description: "",
        category: "",
        projectId: "",

        currentUser: AuthService.getCurrentUser(),
      };
    }
    
    componentDidMount() {
      
    }
    
    render() {
        const { id, title, description, category, currentUser } = this.state;
        return (
            <div>
                <h2>Action Plan Single Page</h2>
                <p>Manage a single Action Plan with sections and action items</p>
                <hr/>
                <h3>Action Plan Workflow</h3>
                <div className="row">
                    <div className="col-8">
                        {/* Starts */}
                        <Timeline align="right">
                                {/* First Item starts */}
                                <TimelineItem>
                                <TimelineOppositeContent>
                                <Paper  elevation={5} className="container">
                                <Typography color="textSecondary">
                                    {/* <h4>Action Items #1</h4>
                                    <h4>Action Items #2</h4> */}
                                    <Link className="btn btn-success m-2" to="#">View Items</Link>
                                </Typography>
                                </Paper>  
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className="container">
                                    <Typography variant="h6" component="h1">
                                        Section #1
                                    </Typography>
                                    <Typography>
                                    <p>This is demo description</p>
                                    <p>Acceptance is inspection of walls</p>
                                    <p>Due Date is 2021-09-20</p>
                                    <p>Ref type : Drawing</p>
                                    <hr></hr>
                                    <Link className="btn btn-primary m-2" to="#">⚙️Manage</Link>
                                    </Typography>
                                </Paper>
                                </TimelineContent>
                                </TimelineItem>
                                {/* First Item ends */}
                                <TimelineItem>
                                <TimelineOppositeContent>
                                    <Paper  elevation={5} className="container">
                                    <Typography color="textSecondary">
                                        <h4>Action Items #1</h4>
                                        <h4>Action Items #2</h4>
                                        <Link className="btn btn-success m-2" to="#">View Items</Link>
                                    </Typography>
                                    </Paper>  
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className="container">
                                    <Typography variant="h6" component="h1">
                                        Section #2
                                    </Typography>
                                    <Typography>
                                    <p>This is demo description</p>
                                    <p>Acceptance is construction of walls</p>
                                    <p>Due Date is 2021-10-20</p>
                                    <p>Ref type : Drawing</p>
                                    <hr></hr>
                                    <Link className="btn btn-primary m-2" to="#">⚙️Manage</Link>
                                    </Typography>
                                </Paper>
                                </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                <TimelineOppositeContent>
                                <Paper  elevation={5} className="container">
                                    <Typography color="textSecondary">
                                        <h4>Action Items #1</h4>
                                        <h4>Action Items #2</h4>
                                        <Link className="btn btn-success m-2" to="#">View Items</Link>
                                    </Typography>
                                    </Paper>  
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className="container">
                                    <Typography variant="h6" component="h1">
                                        Section #3
                                    </Typography>
                                    <Typography>
                                    <p>This is demo description</p>
                                    <p>Acceptance is plastering of walls</p>
                                    <p>Due Date is 2021-11-20</p>
                                    <p>Ref type : Drawing/Photo</p>
                                    <hr></hr>
                                    <Link className="btn btn-primary m-2" to="#">⚙️Manage</Link>
                                    </Typography>
                                </Paper>
                                </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot variant="outlined" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <h5>End</h5>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        {/* Ends */}
                    </div>
                    <div className="col-4">
                        <h4>Title : Action Plan #1</h4>
                        <h6>Plan Manager : Name of Plan Manager</h6>
                        <h6>Action Type : Construction</h6>
                        <h6>Location : </h6>
                        <h6>Description : </h6>
                        <h6>Approved : Yes/No</h6>
                        <hr></hr>
                        <Link className="btn btn-primary m-2" to={"/addactionplansection"}>Add Section</Link>
                        <Link className="btn btn-primary m-2" to={"/addactionplanitem"}>Add Action Items</Link>
                    </div>
                </div>
            </div>
        );
    }
}
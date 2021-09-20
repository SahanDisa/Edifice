import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import ActionPlanSectionService from "../../../services/project_management/actionplansection.service";
import AddAPItem from './addapitem.component';
import AddAPSection from './addapsection.component';

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
      this.getActionPlanSections = this.getActionPlanSections.bind(this);
    
      this.state = {
        id: this.props.match.params.id,
        apid: this.props.match.params.apid,
        title: "",
        description: "",
        category: "",
        projectId: "",

        currentUser: AuthService.getCurrentUser(),
        actionplansections: [],
      };
    }
    
    componentDidMount() {
        this.getActionPlanSections(this.props.match.params.id);
    }
    getActionPlanSections(id){
        ActionPlanSectionService.getAll(id)
            .then(response => {
                this.setState({
                  actionplansections: response.data
                });
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
        });
    }
    
    render() {
        const { id, actionplansections } = this.state;
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
                                {actionplansections && actionplansections.map((actionplansection, index) => (
                                
                                <TimelineItem>
                                <TimelineOppositeContent>
                                <Paper  elevation={5} className="container">
                                <Typography color="textSecondary">
                                    {/* <h4>Action Items #1</h4>
                                    <h4>Action Items #2</h4> */}
                                    <Link className="btn btn-success m-2" to={"/viewactionplanitems/"+id+"/"+actionplansection.id}>View Items</Link>
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
                                        {actionplansection.title}
                                    </Typography>
                                    <Typography>
                                    <p>{actionplansection.acceptance}</p>
                                    <p>Due Date is {actionplansection.duedate}</p>
                                    <p>Ref type : {actionplansection.reftype} {actionplansection.refid}</p>
                                    <hr></hr>
                                    <Link className="btn btn-primary m-2" to="#">⚙️Manage</Link>
                                    </Typography>
                                </Paper>
                                </TimelineContent>
                                </TimelineItem>

                                ))}
                                {/* First Item ends */}
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
                        <Link href="#" className="btn btn-primary mr-2"  to="">+ Add Section</Link>
                        <Link href="#" className="btn btn-primary"  to="">+ Add Item</Link>
                    </div>
                </div>
                {/* Add Section Starts */}
                  <div className="modal fade" id="addAPSection" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddAPSection actionplanId ={id} />
                  </div>
                {/* Add Section Ends */}

                {/* Add item Starts */}
                  <div className="modal fade" id="addAPItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddAPItem actionplanId ={id}/>
                  </div>
                {/* Add item Ends */}
            </div>
        );
    }
}
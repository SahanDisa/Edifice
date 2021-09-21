import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import ActionPlanService from "../../../services/project_management/actionplan.service";
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
import { Breadcrumbs } from "@material-ui/core";

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
        actionplan: [],
      };
    }
    
    componentDidMount() {
        this.getActionPlanSections(this.props.match.params.apid);
        this.getActionPlanDetails(this.props.match.params.apid);
    }
    getActionPlanDetails(id){
        ActionPlanService.getOne(id)
        .then(response => {
            this.setState({
              actionplan: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
    });
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
        const { id, actionplansections, actionplan, apid } = this.state;
        return (
            <div>
                <h2>Action Plan - {actionplan.title}</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Home</Link>
                    <Link color="inherit" to={"/projectmanagementhome/"+id}>App Dashboard</Link>
                    <Link color="inherit" to={"/actionplan/"+id}>Action Plan Home</Link>
                    <Link color="inherit" aria-current="page" className="disabledLink">{actionplan.title}</Link>
                </Breadcrumbs>
                <hr/>
                <h3>Workflow</h3>
                <div className="row">
                    <div className="col-8">
                        {/* Starts */}
                        <Timeline align="right">
                            {/* First Item starts */}
                            {actionplansections && actionplansections.map((actionplansection, index) => (
                            
                            <TimelineItem>
                            {/* <TimelineOppositeContent>
                            <Paper  elevation={5} className="container">
                            <Typography color="textSecondary">
                                <h4>Action Items #1</h4>
                                <h4>Action Items #2</h4>
                                <Link className="btn btn-success m-2" to={"/viewactionplanitems/"+id+"/"+actionplansection.id}>View Items</Link>
                            </Typography>
                            </Paper>  
                            </TimelineOppositeContent> */}
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
                                <Link className="btn btn-success m-2" to={"/viewactionplanitems/"+id+"/"+actionplansection.id}>View Items</Link>
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
                        <h6>Plan Manager : {actionplan.planmanager}</h6>
                        <h6>Action Type : {actionplan.actiontype}</h6>
                        <h6>Location : {actionplan.location}</h6>
                        <h6>Description : {actionplan.description}</h6>
                        <h6>{actionplan.isApproved == false ? "Not Approved 🔴" : "Approved 🟢" }</h6>
                        <hr></hr>
                        <Link to={"/addactionplansection/"+id+"/"+apid} className="btn btn-primary mr-2" >+ Add Section</Link>
                        <Link to={"/addactionplanitem/"+id+"/"+apid} className="btn btn-primary mr-2" >+ Add Item</Link>
                        <Link href="#" className="btn btn-success mr-2"  to="">Update</Link>
                    </div>
                </div>
                {/*                 
                  <div className="modal fade" id="addAPSection" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddAPSection actionplanId ={id} />
                  </div>
                

                
                  <div className="modal fade" id="addAPItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <AddAPItem actionplanId ={id}/>
                  </div>
                 */}
            </div>
        );
    }
}
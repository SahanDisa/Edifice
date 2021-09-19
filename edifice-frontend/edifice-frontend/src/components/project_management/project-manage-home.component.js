import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import UserService from "./../../services/user.service";
import ProjectDataService from "./../../services/project.service";
import AuthService from "./../../services/auth.service";
import AppService from "./../../App";
import ProgressBar from 'react-customizable-progressbar';

import portfolioIcon from "././../../assets/portfolio.png";
import rfiIcon from "././../../assets/rfi.png";
import dailylogIcon from "././../../assets/dailylog.png";
import meetingIcon from "././../../assets/meeting.png";
import biddingIcon from "././../../assets/bidding.png";
import actionplanIcon from "././../../assets/actionplan.png";
import drawingsIcon from "././../../assets/drawings.png";
import photosIcon from "././../../assets/photos.png";
import punchlistIcon from "././../../assets/PM/punchlist.png";
import documentIcon from "././../../assets/documents.png";

import budgetIcon from "././../../assets/FM/budget.png";
import addbudgetIcon from "././../../assets/FM/estimateBudget.png";
import costIcon from "././../../assets/FM/cost.png";
import commitmentsIcon from "././../../assets/FM/commitments.png";

import bulldozerIcon from "././../../assets/066-bulldozer.png";

import Card from 'react-bootstrap/Card';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    console.log("Super props"+this.props);
    this.state = {
      content: "",
      projects: [],
      progress: 0,
      id: this.props.match.params.id,
      currentUser:  AuthService.getCurrentUser() ,
      showEngineerBoard: false,
      showManagerBoard: false,
      showAdminBoard: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showEngineerBoard: user.roles.includes("ROLE_USER"),
        showManagerBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
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
    this.retrieveProjects(this.state.id);
    this.getRecentProgress(this.state.id);
  }
  retrieveProjects(id) {
    ProjectDataService.get(id)
      .then(response => {
        this.setState({
          projects: response.data
        });
        this.updateNavBar(response.data.title, response.data.id);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateNavBar(name,pid){
    console.log("Navbar ekata yawanne meka"+name+" "+pid);
    AppService.setProjectName(name,pid);

  }
  getRecentProgress(id){
    var data = 0;
    ProjectDataService.findRecentProgress(id)
    .then(response =>{
      if(response.data.length>0){
        console.log("Progress is "+response.data[0].progress);
        data = Math.ceil(response.data[0].progress*100);
        // this.setState({
        //   progress: response.data[0].progress
        // }).catch(e =>{
        //   console.log(e);
        // });
      }
      console.log("Data assigned"+data);
      this.setState({
        progress: data 
      });
    });
  }

  render() {
    const {id,showEngineerBoard,showManagerBoard,showAdminBoard,projects,progress} = this.state;
    const today = new Date();
    const date1 = new Date(projects.startdate);
    const date2 = new Date(projects.enddate);
    const diffTime = Math.abs(date2 - date1);
    const diffTime2 = Math.abs(date2 - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const remainDays = Math.ceil(diffTime2/(1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    console.log(remainDays + " remain days");
    return (
      <div className="container">
        <h2>APP DASHBOARD</h2>
        {/* Breadcrumb starts */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/home">
            Home
          </Link>
          <Link color="inherit" to={"/projectmanagementhome/"+id}>
          {projects.title} / App Dashboard  
          </Link>
          {/* <Link color="textPrimary" href="/components/breadcrumbs/" aria-current="page">
            Breadcrumb
          </Link> */}
        </Breadcrumbs>
        <br></br>
        {/* Breadcrumb ends */}
        <div className="card card-hover shadow-sm card-text-edifice">
        <div className="row">
          <div className="col-5 m-2">
          <h4>{projects.title}</h4>
          <h6>Description : {projects.description}</h6>
          <h6>Location: {projects.location}</h6> 
          <h6>From : {projects.startdate} to {projects.enddate}</h6>
          </div>
          <div className="col-4 mt-4">
          <center>
          <h2><b>{remainDays}{" "}</b>Days</h2>
          <h3>Remaining</h3>
          </center>
          </div>
          <div className="col-2">
          <center>
          <ProgressBar
              radius={60}
              progress={projects.progressValue}
              cut={120}
              rotate={-210}
              initialAnimation
              initialAnimationDelay={1}
              strokeWidth={13}
              strokeColor="#273f7d"
              transition="2s ease"
              trackStrokeWidth={12}
              trackTransition="1s ease"
              pointerRadius={3}
              pointerStrokeWidth={12}
          />
          {/* <h6 className="mb-10"><b>66%</b></h6>  */}
          </center> 
          </div>
          </div>
        </div>
        {/* Only Manager and Admin has Access to Project/Finance/Resource */}
        
        { showManagerBoard && showEngineerBoard &&
        <div>
        {/* Project Tools Starts */}
        <h3 className="mt-2">Project Tools</h3>
        <div className="row">
          <div className="col-lg-3 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" title="Project Detail Specification with Analytics">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/portfolio/" + id} style={{ 'text-decoration': 'none' }}>
              <img src={portfolioIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Portfolio</h3>
              {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
            </Link>
            </div>
          </div>

          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Manage the project Drawings">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/drawing/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={drawingsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Drawings</h3>
                {/* <span className="fs-sm fw-normal text-muted">Manage your project drawings in one place</span> */}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
          <div className="card card-hover shadow-sm" title="Manage & Capture Images">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/photos/" + id} style={{ 'text-decoration': 'none' }}>
              <img src={photosIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Photos</h3>
              {/* <span className="fs-sm fw-normal text-muted">Manage and capture all the images</span> */}
            </Link>
          </div>
          
        </div>
        <div className="col-lg-3 mb-grid-gutter pb-2">
        
          <div className="card card-hover shadow-sm" title="Manage Documents">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/document/" + id} style={{ 'text-decoration': 'none' }}>
              <img src={documentIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Documents</h3>
              {/* <span className="fs-sm fw-normal text-muted">Manage documents</span> */}
            </Link>
          </div>
          
        </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" title="">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/bidding/" + id} style={{ 'text-decoration': 'none' }}>
              <img src={biddingIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Biddings</h3>
              <span className="fs-sm fw-normal text-muted">Manage all the bid packages and bidding proceses</span>
            </Link>
            </div>
          </div> */}
           <div className="col-lg-3 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" title="Manage meetings">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/meetings/"+id} style={{ 'text-decoration': 'none' }}>
              <img src={meetingIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Meetings</h3>                
              {/* <span className="fs-sm fw-normal text-muted">Manage all aspects of your project meetings from agenda distribution</span> */}
            </Link>
            </div> 
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" title="Organise & define project workflows">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/actionplan/" + id}  style={{ 'text-decoration': 'none' }}>
              <img src={actionplanIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Action Plan</h3>
              {/* <span className="fs-sm fw-normal text-muted">Organise & define project workflows</span> */}
            </Link>
            </div>
            
          </div>
         
          <div className="col-lg-3 mb-grid-gutter pb-2"> 
            <div className="card card-hover shadow-sm" title="Manage Punch Items">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/punchlist/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={punchlistIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Punch List</h3>
                {/* <span className="fs-sm fw-normal text-muted">Manage punch items</span> */}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" title="Track the details at Site">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/dailylogs/"+ id} style={{ 'text-decoration': 'none' }}>
                <img src={dailylogIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Daily Log</h3>
                {/* <span className="fs-sm fw-normal text-muted">Keep track of every detail at job site each and everyday</span> */}
              </Link>
            </div>
            
          </div>
        </div>
        {/* Project Tools Ends */}
        {/* Finance Tools Starts */}
        <h3 className="mt-2">Finance Tools</h3>
        <div className="row" style={{alignItems: "center"}} >
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="See the Budget Overview">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/budget/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={budgetIcon} alt="" width="50"/><br />
                <h3 className="h5 nav-heading-title mb-0">Budget Overview</h3>
                {/*<span className="fs-sm fw-normal text-muted">See the Budget Overview</span>*/}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Estimate the Project Budget.">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/budgetestimates/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={addbudgetIcon} alt="" width="50"/><br />
                <h3 className="h5 nav-heading-title mb-0">Budget Estimates</h3>
                {/*<span className="fs-sm fw-normal text-muted">Estimate the Project Budget.</span>*/}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Track all direct costs that are not associated with commitments.">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/directcost/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={costIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Direct Costs</h3>
                {/*<span className="fs-sm fw-normal text-muted">Track all direct costs that are not associated with commitments.</span>*/}
                </Link>
              </div>
              
          </div>
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
              <div className="card card-hover shadow-sm" title="See the Status and Schedule of Values of all the Contracts.">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/commitment/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={commitmentsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Commitments</h3>
                {/*<span className="fs-sm fw-normal text-muted">See the Status and Schedule of Values of all the Contracts.</span>*/}
              </Link>
              </div>
              
          </div>
        </div>
        {/* Finance Tools Ends */}
        {/* Resource Tools Starts */}
        <h3 className="mt-2">Resource Tools</h3>
        <div className="row" style={{alignItems: "center"}}> 
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/crew/" + id}>
                <img src={meetingIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Crews</h3>
              </Link>
              </div>
              
            </div>
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/equipments/" + id}>
                <img src={bulldozerIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Equipments</h3>
                </Link>
              </div>
              
            </div>
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm">
                <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/schedule/"+id}>
                    <img src={dailylogIcon} alt="" width="50"/>
                    <h3 className="h5 nav-heading-title mb-0">Schedule</h3>                
                </Link>
              </div>
              
            </div>
            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
            
                <div className="card card-hover shadow-sm">
                  <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/timesheet/"+id}>
                    <img src={documentIcon} alt="" width="50"/><br />
                    <h3 className="h5 nav-heading-title mb-0">Timesheet</h3>
                  </Link>
                </div>
                
            </div>
        </div>
        {/* Resource Tools Ends */}
        </div>
        }
        {/* Only Enginner has access to project tools */}
        {!showAdminBoard && !showManagerBoard && showEngineerBoard &&
        <div>
        <h3>Project Tools</h3>
        <div className="row">
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Project Detail Specification with Analytics">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/portfolio/" + id} style={{ 'text-decoration': 'none' }}>
              <img src={portfolioIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Portfolio</h3>
              {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
            </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Manage meetings">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/meetings/"+id} style={{ 'text-decoration': 'none' }}>
              <img src={meetingIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Meetings</h3>                
              {/* <span className="fs-sm fw-normal text-muted">Manage all aspects of your project meetings from agenda distribution</span> */}
            </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Organise & define project workflows">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/actionplan/" + id}  style={{ 'text-decoration': 'none' }}>
              <img src={actionplanIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Action Plan</h3>
              {/* <span className="fs-sm fw-normal text-muted">Organise & define project workflows</span> */}
            </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Manage the project Drawings">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/drawing/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={drawingsIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Drawings</h3>
                {/* <span className="fs-sm fw-normal text-muted">Manage your project drawings in one place</span> */}
              </Link>
            </div>
            
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" title="">
            <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/bidding/" + id} style={{ 'text-decoration': 'none' }}>
              <img src={biddingIcon} alt="" width="50"/>
              <h3 className="h5 nav-heading-title mb-0">Biddings</h3>
              <span className="fs-sm fw-normal text-muted">Manage all the bid packages and bidding proceses</span>
            </Link>
            </div>
          </div> */}
          
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Manage & Capture Images">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/photos/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={photosIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Photos</h3>
                {/* <span className="fs-sm fw-normal text-muted">Manage and capture all the images</span> */}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Manage Documents">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/document/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={documentIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Documents</h3>
                {/* <span className="fs-sm fw-normal text-muted">Manage documents</span> */}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Manage Punch Items">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/punchlist/" + id} style={{ 'text-decoration': 'none' }}>
                <img src={punchlistIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Punch List</h3>
                {/* <span className="fs-sm fw-normal text-muted">Manage punch items</span> */}
              </Link>
            </div>
            
          </div>
          <div className="col-lg-3 mb-grid-gutter pb-2">
          
            <div className="card card-hover shadow-sm" title="Track the details at Site">
              <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/managedailylogs/"+ id} style={{ 'text-decoration': 'none' }}>
                <img src={dailylogIcon} alt="" width="50"/>
                <h3 className="h5 nav-heading-title mb-0">Daily Log</h3>
                {/* <span className="fs-sm fw-normal text-muted">Keep track of every detail at job site each and everyday</span> */}
              </Link>
            </div>
            
          </div>
        </div>
        {/* Project Tools Ends */}
        </div>
        }
      </div>
    );
  }
}
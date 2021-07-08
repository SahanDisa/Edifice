import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardResource from "./components/board-resource.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import AddProject from './components/core_tools/admin/add-project.component';
import ProjectsList from './components/core_tools/admin/project-list.component';
import Project from './components/core_tools/admin/project.component';

import DrawingHome from "./components/project_management/drawings/drawings.component";
import AddDrawing from "./components/project_management/drawings/adddrawing.component";
import ViewSingleDrawing from "./components/project_management/drawings/drawing-singlepage.component";
import PhotosHome from "./components/project_management/photos/photos.component";
import BiddingHome from "./components/project_management/biddings/bidding.component";
import PortfolioHome from "./components/project_management/portfolio/portfolio.component";
import ProjectManagementHome from "./components/project_management/project-manage-home.component";

import Dates from "./components/core_tools/admin/dates.component";
import Defaults from "./components/core_tools/admin/defaults.component";
import Roles from "./components/core_tools/admin/roles.component";

import AddUser from "./components/core_tools/edifice-directory/add-emp.component";
import EditUser from "./components/core_tools/edifice-directory/edit-emp.component";
import Vendors from "./components/core_tools/edifice-directory/vendors.component";
import Emp from "./components/core_tools/edifice-directory/employees.component";
import AddVendor from "./components/core_tools/edifice-directory/add-vendor.component";
import EditVendor from "./components/core_tools/edifice-directory/edit-vendor.component";

import TaskConfiguration from "./components/core_tools/tasks/configuration.component";
import ManageTasks from "./components/core_tools/tasks/manage.component";
import UpdateTasks from "./components/core_tools/tasks/update.component";
import ViewTasks from "./components/core_tools/tasks/view.component";

import FileUpload from "./components/project_management/document/document.component";

import MeetingsConfig from "./components/project_management/meetings/configuration.component";
import ManageMeetings from "./components/project_management/meetings/manage.component";
import UpdateMeetings from "./components/project_management/meetings/update.component";
import ViewMeetings from "./components/project_management/meetings/view.component";

import Budget from "./components/financial_component/budget/budget.component";
import PrimeContracts from "./components/financial_component/prime-contracts/prime-contracts.component";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <link rel="\public\icons\051-dumper truck.png" href=".\public\icons\051-dumper truck.png" type="image/x-icon" />
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Edifice
          </Link>

          <div className="navbar-nav mr-auto">
            {currentUser && (
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/projectmanagement"} className="nav-link">
                  Project Management
                </Link>
              </li>
            )}
            

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Financial Management
                </Link>
              </li>
              
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/resource"} className="nav-link">
                  Resource Management
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Core Tools
                </Link>
              </li>
            )}
          </div>
         
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {/* Profile {currentUser.username} */}
                  ✅ {currentUser.username + " Edifice"}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/projectmanagement" component={BoardUser} />
            {/* <Route path="/projectmanagementhome" component={ProjectManagementHome} /> */}
            <Route path="/projectmanagementhome/:id" component={ProjectManagementHome} />
            <Route path="/portfolio" component={PortfolioHome} />
            <Route path="/resource" component={BoardResource} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path={["/", "/projects"]} component={ProjectsList} />
            <Route path="/document" component={FileUpload} />
            <Route path="/addproject" component={AddProject} />
            <Route path="/projects/:id" component={Project} />
            <Route path="/dates" component={Dates} />
            <Route path="/defaults" component={Defaults} />
            <Route path="/roles" component={Roles} />
            
            <Route path="/tasksconfiguration" component={TaskConfiguration} />
            <Route path="/managetasks" component={ManageTasks} />
            <Route path="/managestasks/update" component={UpdateTasks} />
            <Route path="/managestasks/view" component={ViewTasks} />
            
            <Route path="/meetingsconfiguration" component={MeetingsConfig} />
            <Route path="/managemeetings" component={ManageMeetings} />
            <Route path="/managesmeetings/update" component={UpdateMeetings} />
            <Route path="/managesmeetings/view" component={ViewMeetings} />
            
            <Route path="/addUser" component={AddUser} />
            <Route path="/editUser" component={EditUser} />
            <Route path="/vendors" component={Vendors} />
            <Route path="/employees" component={Emp} />
            <Route path="/addVendor" component={AddVendor} />
            <Route path="/editVendor" component={EditVendor} />
            <Route path="/drawing/:id" component={DrawingHome} />
            <Route path="/adddrawing/:id" component={AddDrawing} />
            <Route path="/viewdrawing/:id" component={ViewSingleDrawing} />
            
            <Route path="/photos" component={PhotosHome} />
            <Route path="/bidding/:id" component={BiddingHome} />      
			
			      <Route path="/budget" component={Budget} />
            <Route path="/prime-contracts" component={PrimeContracts} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
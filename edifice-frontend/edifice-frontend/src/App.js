import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import "./App.css";
import mainIcon from "././assets/Edifice.png";

import NavDropdown from "react-bootstrap/NavDropdown"

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-project.component";
import BoardResource from "./components/board-resource.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import AddProject from './components/core_tools/admin/add-project.component';
import AddDepartment from "./components/core_tools/admin/add-department.component";
import AddMilestone from "./components/core_tools/admin/add-milestone.component";
import AssignUserProject from "./components/core_tools/admin/add-projectuser.component";
import ProjectsList from './components/core_tools/admin/project-list.component';
import Project from './components/core_tools/admin/project.component';


import DrawingHome from "./components/project_management/drawings/drawings.component";
import AddDrawing from "./components/project_management/drawings/adddrawing.component";
import AddDrawingCategory from "./components/project_management/drawings/adddrawingcategory.component";
import ViewSingleDrawingCategory from "./components/project_management/drawings/drawing-category-singlepage";
import ViewSingleDrawing from "./components/project_management/drawings/drawing-singlepage.component";
import UpdateDrawing from "./components/project_management/drawings/updatedrawing.component";

import AddPhoto from "./components/project_management/photos/addphoto.component";
import UploadPhotos from "./components/project_management/photos/uploadphoto.component";
import PhotosHome from "./components/project_management/photos/photos.component";
import AddAlbum from "./components/project_management/photos/addalbum.component";
import ViewSingleAlbum from "./components/project_management/photos/album-singlepage.component";
import MoveCapturetoAlbum from "./components/project_management/photos/movecapturestoalbum.component";

import BiddingHome from "./components/project_management/biddings/bidding.component";
import AddBidding from "./components/project_management/biddings/addbidding.component";
import ViewSpec from "./components/project_management/biddings/viewspec.component";

import ViewSingleBidding from "./components/project_management/biddings/viewbidding.component";
import PortfolioHome from "./components/project_management/portfolio/portfolio.component";
import PortfolioStepper from "./components/project_management/portfolio/singleportfolio.component";
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

import DocumentHome from "./components/project_management/document/document.component";
import AddDirectory from "./components/project_management/document/adddirectory.component";
import ViewDirectory from "./components/project_management/document/viewsingledirectory.component";
import UploadDocFiles from "./components/project_management/document/adddocument.component";
import UploadDocment from "./components/project_management/document/uploaddocument.component";
import ViewSingleDocument from "./components/project_management/document/viewsingledocument.component";
import UpdateDocument from "./components/project_management/document/updatedocument.component";

import MeetingsConfig from "./components/project_management/meetings/configuration.component";
import ManageMeetings from "./components/project_management/meetings/manage.component";
import UpdateMeetings from "./components/project_management/meetings/update.component";
import ViewMeetings from "./components/project_management/meetings/view.component";

import BudgetHome from "./components/financial_management/budget/budget.component";
import PrimeContracts from "./components/financial_management/prime-contracts/primecontracts.component";
import CreatePrimeContracts from "./components/financial_management/prime-contracts/addprimecontract.component";
import DirectCostHome from "./components/financial_management/direct-costs/direct-costs.component";
import InvoiceHome from "./components/financial_management/invoicing/invoices.component";

import rfiHome from "./components/project_management/rfi/rfi.component";
import CreateRFI from "./components/project_management/rfi/create.component";
import EditRFI from "./components/project_management/rfi/edit.component";
import ViewRFI from "./components/project_management/rfi/view.component";

import actionplanHome from "./components/project_management/actionplan/actionplan.component";

import DlsConfig from "./components/project_management/dailylog/configuration.component";
import ManageDls from "./components/project_management/dailylog/manage.component";
import UpdateDls from "./components/project_management/dailylog/update.component";
import ViewDls from "./components/project_management/dailylog/view.component";

import punchlistHome from "./components/project_management/punchlist/punchlist.component";
import ViewPL from "./components/project_management/punchlist/view.component";
import CreatePL from "./components/project_management/punchlist/create.component";
import CreatePLT from "./components/project_management/punchlist/addtypes.component";

import ResourceManagementHome from "./components/resource_management/resource-manage-home.component";
import Timesheet from "./components/resource_management/Timesheet/Timesheet.component";
import Customize from "./components/resource_management/Timesheet/customize.component";
import Crew from "./components/resource_management/Crew/crew.component";
import NewCrew from "./components/resource_management/Crew/new-crew.component";
import Schedule from "./components/resource_management/Schedule/schedule.component";
import Equipments from "./components/resource_management/Equipment/equipment.component";
import EquipDetails from "./components/resource_management/Equipment/equipmentDetails.component";

import FinancialManagementHome from "./components/financial_management/financial-manage-home.component";
import AddBudget from "./components/financial_management/budget/addbudget.component";
import EditPrimeContracts from "./components/financial_management/prime-contracts/editPrimeContracts.component";
import AddDirectCost from "./components/financial_management/direct-costs/adddirectcost.component";
import CommitmentHome from "./components/financial_management/commitments/commitments.component";
import AddCommitment from "./components/financial_management/commitments/addcommitment.component";
import ViewSingleCommitment from "./components/financial_management/commitments/commitment-singlepage.component";
import AddSov from "./components/financial_management/commitments/addsov.component";

import ViewSingleDirectCost from "./components/financial_management/direct-costs/directcost-singlepage.component";
import SovHome from "./components/financial_management/commitments/sovs.component";

import AddInvoice from "./components/financial_management/invoicing/addinvoice.component";
import AddPayment from "./components/financial_management/commitments/addpayment.component";
import PaymentHome from "./components/financial_management/commitments/payments.component";
import EditSingleCommitment from "./components/financial_management/commitments/commitment-edit.component";
import ViewSingleSov from "./components/financial_management/commitments/sov-singlepage.component";
import ViewSingleBudget from "./components/financial_management/budget/budget-singlepage.component";
//import Report from "./components/report/report.component";

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
          <Link to={"/home"} className="navbar-brand">
            <img
              src={mainIcon}
              style={{'width' : "50px", height: "50px"}}
              alt="profile-img"
              className = "mr-1"
            /> Edifice
          </Link>

          <div className="navbar-nav mr-auto">
            {currentUser && (
              <li className="nav-item">
                <Link to={"/home"} className="nav-link"></Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/projectmanagement"} className="nav-link">
                <h6>Manage Projects</h6>
                </Link>
              </li>
            )}
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/financialmanagement"} className="nav-link">
                <h6>Manage Finance</h6>
                </Link>
              </li>
            )}
            {showModeratorBoard && (
            <li className="nav-item">
                <Link to={"/resource"} className="nav-link">
                  <h6>Manage Resources</h6>
                </Link>
        { /*    <NavDropdown title="Manage Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="/timesheet">Timesheets</NavDropdown.Item>
                <NavDropdown.Item href="/equipments">Equipments</NavDropdown.Item>
                <NavDropdown.Item href="/crew">Crews</NavDropdown.Item>
              </NavDropdown>*/}
            </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                <h6>Core Tools</h6>
                </Link>
              </li>
            )}
          </div>
         
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/schedule"} className="nav-link">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
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

              {/* <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li> */}
            </div>
          )}
        </nav>
        {!currentUser && (
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>  
        )}
        {currentUser && (
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/projectmanagement" component={BoardUser} />
            <Route path="/adddepartment/:id" component={AddDepartment} />
            <Route path="/addmilestone/:id" component={AddMilestone}/>
            <Route path="/assignuser/:id" component={AssignUserProject} />
            <Route path="/projectmanagementhome/:id" component={ProjectManagementHome} />

            <Route path="/resource" component={BoardResource} />
            <Route path="/financialmanagement" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path={["/", "/projects"]} component={ProjectsList} />
           
            <Route path="/addproject" component={AddProject} />
            <Route path="/projects/:id" component={Project} />
            <Route path="/dates" component={Dates} />
            <Route path="/defaults" component={Defaults} />
            <Route path="/roles" component={Roles} />
            {/* Porfolio */}
            <Route path="/portfolio/:id" component={PortfolioHome} />
            <Route path="/portstepper" component={PortfolioStepper} />
            {/* Tasks */}
            <Route path="/tasksconfiguration" component={TaskConfiguration} />
            <Route path="/managetasks" component={ManageTasks} />
            <Route path="/managestasks/update" component={UpdateTasks} />
            <Route path="/managestasks/view" component={ViewTasks} />
            {/* Meeting */}
            <Route path="/meetingsconfiguration" component={MeetingsConfig} />
            <Route path="/managemeetings" component={ManageMeetings} />
            <Route path="/managesmeetings/update" component={UpdateMeetings} />
            <Route path="/managesmeetings/view" component={ViewMeetings} />
            {/* RFI */}
            <Route path="/rfi" component={rfiHome} />
            <Route path="/managerfi/create" component={CreateRFI} />
            <Route path="/managerfi/edit" component={EditRFI} />
            <Route path="/managerfi/view" component={ViewRFI} />
            {/* Action Plan */}
            <Route path="/actionplan" component={actionplanHome} />
            {/* Punch List */}
            <Route path="/punchlist" component={punchlistHome} />
            <Route path="/managepunchlist/view" component={ViewPL} />
            <Route path="/managepunchlist/create" component={CreatePL} />
            <Route path="/managepunchlist/createtype" component={CreatePLT} />
            {/* Daily Logs */}
            <Route path="/dailylogsconfiguration" component={DlsConfig} />
            <Route path="/managedailylogs" component={ManageDls} />
            <Route path="/managesdailylogs/update" component={UpdateDls} />
            <Route path="/managesdailylogs/view" component={ViewDls} />
            
            <Route path="/addUser" component={AddUser} />
            <Route path="/editUser" component={EditUser} />
            <Route path="/vendor" component={Vendors} />
            <Route path="/employees" component={Emp} />
            <Route path="/addVendor" component={AddVendor} />
            <Route path="/editVendor" component={EditVendor} />
            {/* Document */}
            <Route path="/directory/:id" component={AddDirectory} />
            <Route path="/document/:id" component={DocumentHome} />
            <Route path="/adddocument/:id" component={UploadDocFiles} />
            <Route path="/uploaddocument/:name" component={UploadDocment}/>
            <Route exact path="/updatedocument/:pid/:id" component={UpdateDocument}/>
            <Route exact path={"/viewdirectory/:pid/:id"} component={ViewDirectory}/>
            <Route path={"/viewsingledocument/:id"} component={ViewSingleDocument}/>
            {/* Drawing Component Routes  */}
            <Route path="/drawing/:id" component={DrawingHome} />
            <Route path="/adddrawingcategory/:id" component={AddDrawingCategory} />
            <Route path="/viewdrawingcategory/:id" component={ViewSingleDrawingCategory}/>
            <Route path="/adddrawing/:id" component={AddDrawing} />
            <Route path="/viewdrawing/:id" component={ViewSingleDrawing} />
            <Route exact path="/updatedrawing/:id/:pid" component={UpdateDrawing}/>
            {/* Photo Component Routes */}
            <Route path="/photos/:id" component={PhotosHome} />
            <Route path="/addphoto/:id" component={AddPhoto}/>
            <Route path="/uploadphoto/:name" component={UploadPhotos}/>
            <Route path="/viewalbum/:id" component={ViewSingleAlbum}/>
            <Route path="/addalbum/:id" component={AddAlbum}/>
            <Route path="/movecapture/:id" component={MoveCapturetoAlbum}/>
            {/* Bidding Component Routes  */}
            <Route path="/bidding/:id" component={BiddingHome} /> 
            <Route path="/addbidding" component={AddBidding} /> 
            <Route path="/viewbidding" component={ViewSingleBidding}/>
            <Route path="/viewspec" component={ViewSpec} />  
			      <Route path="/budget/:id" component={BudgetHome} />
            <Route path="/addbudget/:id" component={AddBudget} />
            <Route path="/prime-contracts" component={PrimeContracts} />
            <Route path="/addprimecontract/:id" component={CreatePrimeContracts} />
            <Route path="/directcost/:id" component={DirectCostHome} />
            <Route path="/invoice/:id" component={InvoiceHome} />
            
            <Route path="/primecontract/:id" component={PrimeContracts} />

            {/*resource management */}
            <Route path="/timesheet/:id" component={Timesheet} />
            <Route path="/customize" component={Customize} />
            <Route path="/crew/:id" component={Crew} />
            <Route path="/newCrew/:id" component={NewCrew}/>
            <Route path="/schedule/:id" component={Schedule} />
            <Route path="/equipments/:id" component={Equipments} />
            <Route path="/equipDetails/:code" component={EquipDetails} />
            {/*<Route path="/equipDetails/:id/:code" component={EquipDetails} />*/}
            <Route path="/resourcemanagementhome/:id" component={ResourceManagementHome} />
                    

            {/*financial management */}
            <Route path="/financialmanagementhome/:id" component={FinancialManagementHome} />
            <Route path="/editprimecontracts/:id" component={EditPrimeContracts} />
            <Route path="/adddirectcost/:id" component={AddDirectCost} />
            {/* Commitment Component Routes  */}
            <Route path="/commitment/:id" component={CommitmentHome} />
            <Route path="/addcommitment/:id" component={AddCommitment} />
            {/*<Route path="/viewdrawing/:id" component={ViewSingleDrawing} />*/}
            <Route path="/viewcommitment/:id" component={ViewSingleCommitment} />
            <Route path="/addsov/:id" component={AddSov} />
            <Route path="/viewdirectcost/:id" component={ViewSingleDirectCost} />
           {/* <Route path="/viewsov/:id" component={ViewSingleSov} />*/}
            <Route path="/viewsov/:id" component={SovHome} />

            <Route path="/addinvoice/:id" component={AddInvoice} />
            <Route path="/addpayment/:id" component={AddPayment} />
            <Route path="/viewpayment/:id" component={PaymentHome} />
            <Route path="/editcommitment/:id" component={EditSingleCommitment} />
            <Route path="/viewsinglesov/:id" component={ViewSingleSov} />
            <Route path="/viewbudget/:id" component={ViewSingleBudget} />
           
          </Switch>
        </div>
        )}
      </div>
    );
  }
}

export default App;
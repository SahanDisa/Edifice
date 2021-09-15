import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserService from "./../services/user.service";
import ProjectDataService from "./../services/project.service";
import AuthService from "./../services/auth.service";
import { Card } from "react-bootstrap";
import mainIcon from "././../assets/Edifice.png";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ProjectIcon from '@material-ui/icons/Apartment';
import FinanceIcon from '@material-ui/icons/MonetizationOn';
import ResourceIcon from '@material-ui/icons/EmojiTransportation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.retrieveProjects = this.retrieveProjects.bind(this);

    this.state = {
      projects: [],
      currentIndex: -1,
      content: "",
      currentUser: AuthService.getCurrentUser(),
      showEngineerBoard: false,
      showManagerBoard: false,
      showAdminBoard: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
  
    if (user) {
      this.setState({
        currentUser: user,
        showEngineerBoard: user.roles.includes("ROLE_USER"),
        showManagerBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
    this.retrieveProjects(this.state.currentUser.id);
  }
  retrieveProjects(id) {
    ProjectDataService.userProjects(id)
      .then(response => {
        this.setState({
          projects: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentIndex,currentUser, showEngineerBoard,showManagerBoard,showAdminBoard } = this.state;
    return (
      <div className="container">
        <center>
        <h2>Hi {currentUser.username}, Welcome to Edifice!</h2>
        {showAdminBoard && showManagerBoard && showEngineerBoard &&
        <h3>You are Login as <b>Admin</b></h3>
        }
        
        {!showAdminBoard && showManagerBoard && showEngineerBoard &&
        <h3>You are Login as <b>Manager</b></h3>
        }
        {!showAdminBoard && !showManagerBoard && showEngineerBoard &&
        <h3>You are Login as <b>Engineer</b></h3>
        }
          <img
              src={mainIcon}
              style={{'width' : "250px", height: "250px", 'border': '2px solid black'}}
              alt="profile-img"
              className = "mr-1"
            />
          <h5>Construction Project Management Tool</h5>  
        </center>
        
          
        {showAdminBoard && showManagerBoard && showEngineerBoard &&
        <div className="row">
        <div className="col-3">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Admin/Manager</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <DashboardIcon style={{ fontSize: 50 }}/>
                  <Link to={"/admin/"} style={{'text-decoration': 'none'}}>
                  <h3>Core Tool & Dashboard</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          <div className="col-3">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner/Architect</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <ProjectIcon style={{ fontSize: 50 }}/>
                  <Link to={"/projectmanagement/"} style={{'text-decoration': 'none'}}>
                  <h3>Project Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          <div className="col-3">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner/QS</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <FinanceIcon style={{ fontSize: 50 }}/>
                  <Link to={"/financialmanagement/"} style={{'text-decoration': 'none'}}>
                  <h3>Finance Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          <div className="col-3">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <ResourceIcon style={{ fontSize: 50 }}/>
                  <Link to={"/resource/"} style={{'text-decoration': 'none'}}>
                  <h3>Resource Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
        </div>
      }
      {!showAdminBoard && showManagerBoard && showEngineerBoard &&
      <center>
        <div className="row">
          <div className="col-4">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner/Architect</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <ProjectIcon style={{ fontSize: 50 }}/>
                  <Link to={"/projectmanagement/"} style={{'text-decoration': 'none'}}>
                  <h3>Project Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          <div className="col-4">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner/QS</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <FinanceIcon style={{ fontSize: 50 }}/>
                  <Link to={"/financialmanagement/"} style={{'text-decoration': 'none'}}>
                  <h3>Finance Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          <div className="col-4">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <ResourceIcon style={{ fontSize: 50 }}/>
                  <Link to={"/resource/"} style={{'text-decoration': 'none'}}>
                  <h3>Resource Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
        </div>
      </center>
      }
      {!showAdminBoard && !showManagerBoard && showEngineerBoard &&
        <center>
        <div className="row">
          <div className="col-12">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner/Architect</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <ProjectIcon style={{ fontSize: 50 }}/>
                  <Link to={"/projectmanagement/"} style={{'text-decoration': 'none'}}>
                  <h3>Project Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          {/* <div className="col-4">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner/QS</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <FinanceIcon style={{ fontSize: 50 }}/>
                  <Link to={"/financialmanagement/"} style={{'text-decoration': 'none'}}>
                  <h3>Finance Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div>
          <div className="col-4">
            <Card border="dark" style={{ width: '16rem' }}>
                <Card.Header>Manager/Enginner</Card.Header> 
                <Card.Body>
                  <Card.Title>
                  <center>
                  <ResourceIcon style={{ fontSize: 50 }}/>
                  <Link to={"/resource/"} style={{'text-decoration': 'none'}}>
                  <h3>Resource Management</h3>
                  </Link>
                  </center>
                  </Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body> 
            </Card>
          </div> */}
        </div>
        </center>
      }
      </div>
    );
  }
}
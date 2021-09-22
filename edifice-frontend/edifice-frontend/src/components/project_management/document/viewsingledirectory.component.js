import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocumentDataService from "../../../services/documentfile.service";
import DirectoryDataService from "../../../services/directory.service";
import AuthService from "./../../../services/auth.service";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import { Breadcrumbs } from "@material-ui/core";

export default class ViewDirectory extends Component {
    constructor(props) {
        super(props);
        this.retrieveCategoryDocument = this.retrieveCategoryDocument.bind(this);
        this.state = {
          pid: this.props.match.params.pid,
          id: this.props.match.params.id,
          documents: [],
          title: "",
          description: "", 
          projectId: "",
          currentUser: AuthService.getCurrentUser(),
          showEngineerBoard: false,
          showManagerBoard: false,
          showAdminBoard: false,
        };
      }
    
      componentDidMount() {
        this.retrieveCategoryDocument(this.props.match.params.id);
        this.retriveCategoryInfo(this.props.match.params.id);
        const user = AuthService.getCurrentUser();
  
        if (user) {
          this.setState({
            currentUser: user,
            showEngineerBoard: user.roles.includes("ROLE_USER"),
            showManagerBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }  
      }
      retriveCategoryInfo(id){
        DirectoryDataService.getOne(id)
        .then(response => {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
      retrieveCategoryDocument(id) {
        DocumentDataService.getCat(id)
          .then(response => {
            this.setState({
              documents: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      render() {
          const { pid,id,title,description,documents,currentIndex, showManagerBoard } = this.state;
          return (
              <div>
                <h2>{title} Documents</h2>
                <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">
                  Home
                </Link>
                <Link color="inherit" to={"/projectmanagementhome/"+pid}>
                  App Dashboard
                </Link>
                <Link color="textPrimary" to={"/document/"+pid} aria-current="page">
                  Document Home
                </Link>
                <Link color="textPrimary" to={"/viewdirectory/"+pid+"/"+id} aria-current="page">
                  {title}
                </Link>
              </Breadcrumbs>
                
                <hr></hr>
                <h3>Category details</h3>
                <div className="row">
                  <div className="col-9">
                  <h6>Name : {title}</h6>
                  <h6>Description : {description}</h6>
                  </div>
                  <div className="col-3">
                  { showManagerBoard &&
                  <div>
                  <Link className="btn btn-primary" to={"/updatedirectory/"+pid+"/"+id} style={{'text-decoration': 'none'}}>
                  ⚙️ Manage
                  </Link>
                  <br/>
                  </div>
                  }
                  <Link className="btn btn-primary mt-2" to={"/adddocument/"+pid} style={{'text-decoration': 'none'}}>
                  Add Document
                  </Link>
                  </div>
                </div>
                <hr></hr>
                
                <h3>Document List</h3>
                <h6>Manage the document in each document category</h6>
                {/* Drawing List */}
                <Table striped bordered hover variant="secondary" responsive>
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {/* Functional for table data */}
                  <tbody>
                  {documents &&
                      documents.map((doc, index) => (
                      <tr
                          key={index}
                      >
                      <td>{doc.id}</td>
                      <td>{doc.title}</td>
                      <td>{doc.description}</td>
                      <td>{title}</td>
                      <td>   
                          {/* Button Group */}
                          {/* <Link to={"/viewdoc/"+doc.id}>
                          <button className="btn btn-primary">View <VisibilityIcon/> </button>
                          </Link> */}
                          {/* <a className="btn btn-primary" href={"http://localhost:8080/api/files/"+doc.title+".pdf"} target="_blank">View<VisibilityIcon/></a> */}
                          <Link to={"/viewsingledocument/"+doc.id}>
                          <button className="btn btn-primary m-2">View <VisibilityIcon/> </button>
                          </Link>
                          <Link to={"/updatedocument/"+pid +"/"+doc.id}>
                          <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                          </Link>
                          {/* <Link to={"/viewdrawing/"+doc.id}>
                          <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                          </Link> */}
                      </td>    
                      </tr>
                      ))}
                  </tbody>
                  {/*Ends */}
                </Table>
               
              </div>
          );
      }
}
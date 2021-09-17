import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectoryService from "../../../services/directory.service";
import DocumentfileService from "../../../services/documentfile.service";
import Card from 'react-bootstrap/Card';
import UploadFiles from "./fileupload.component";
import directorycover from "././../../../assets/PM/photos/directory1.jpg";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-customizable-progressbar';
// import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Breadcrumbs } from "@material-ui/core";
// import UpdateIcon from '@material-ui/icons/Update';

export default class Documents extends Component {
  constructor(props) {
    super(props);
    this.retrieveDirectory = this.retriveDirectory.bind(this);
    this.recentDocuments = this.recentDocuments.bind(this);
    this.state = {
      directories: [],
      recentdocuments: [],
      currentIndex: -1,
      content: "",
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    this.retrieveDirectory(this.props.match.params.id);
    this.recentDocuments();
  }

  retriveDirectory(id){
      DirectoryService.getAll(id)
      .then(response => {
          this.setState({
            directories: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }

  recentDocuments(){
    DocumentfileService.recent()
    .then(response => {
        this.setState({
          recentdocuments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
      const {id, directories, currentIndex, recentdocuments} = this.state;
      
      return (
          <div>
          <h2>Document Home</h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/home">
              Home
            </Link>
            <Link color="inherit" to={"/projectmanagementhome/"+id}>
              App Dashboard
            </Link>
            <Link color="textPrimary" to={"/document/"+id} aria-current="page">
              Document Home
            </Link>
          </Breadcrumbs>
          <hr></hr>
          <div>
            <h3>Insights</h3>
            <h6>Overview of Document progress</h6>
            <div className="row">
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Directory Insights">
                  <h1 className="m-2">5</h1>
                  <h3 className="h5 nav-heading-title m-2">Directory</h3>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </div>
              </div>
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Document Insights">
                  <h1 className="m-2" >7</h1>
                  <h3 className="h5 nav-heading-title mb-0 m-2">Document</h3>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </div>
              </div>
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Revision Insights">
                  <h1 className="m-2">10</h1>
                  <h3 className="h5 nav-heading-title mb-0 m-2">Revision</h3>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </div>
              </div>
              <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
                <div className="card card-hover shadow-sm" title="Project Detail Specification with Analytics">
                <Link className="d-block nav-heading text-center mb-2 mt-2 card-text-edifice" to={"/portfolio/" + id} style={{ 'text-decoration': 'none' }}>
                  <center>
                  <ProgressBar
                      radius={29}
                      progress={25}
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
                  {/* <h3 className="h5 nav-heading-title mb-0">Progress</h3> */}
                  </center>
                  {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
                </Link>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <h3>Directory</h3>
          <h6>Manage project specific documents and organise with directories in here</h6>
          <Link className="btn btn-primary mr-2 mb-2" to={"/directory/"+id}>
                Add Directory
          </Link>
          
          <div className="container">
          <div className="container row">
            {directories &&
              directories.map((directory, index) => (
              <div
              className={
              "container col-3" +
              (index === currentIndex ? "active" : "")
              }
              key={index}>
                {/* unit data */}
                <Link to={"/viewdirectory/"+id+"/"+directory.id} style={{'text-decoration': 'none'}}>
                  <Card
                  bg={'secondary'}
                  text={'dark'}
                  style={{ width: '14rem' }}
                  className="mb-2">
                  <Card.Img src={directorycover} alt="Card image" />
                  <Card.ImgOverlay>
                  </Card.ImgOverlay>
                  <Card.Title><h4>{directory.title}</h4></Card.Title>
                  </Card>
                </Link>
                </div>
            ))}
            </div>
        </div>
        <hr></hr>
        <h3>Documents</h3>
        <h6>Manage your document by adding it to the system</h6>
        <Link className="btn btn-primary mr-2 mb-2" to={"/adddocument/"+id}>
                Add Document
        </Link>
        <h3>Recent Documents</h3>
          {/* Drawing List */}
          <Table striped bordered hover variant="secondary" responsive>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Functional for table data */}
          <tbody>
          {recentdocuments &&
            recentdocuments.map((doc, index) => (
          <tr key={index} >
            <td>{doc.id}</td>
            <td>{doc.title}</td>
            <td>{doc.description}</td>
            <td>{doc.status  == "Not Complete" ? "🔴 Not Complete": doc.status == "Pending"? "🟡 Pending" : "🟢 Complete"}</td>
            <td>   
                {/* Button Group */}
                {/* <Link to={"/viewdoc/"+doc.id}>
                <button className="btn btn-primary">View <VisibilityIcon/> </button>
                </Link> */}
                {/* <a className="btn btn-primary" href={"http://localhost:8080/api/files/"+doc.title+".pdf"} target="_blank">View<VisibilityIcon/></a> */}
                <Link to={"/viewsingledocument/"+doc.id}>
                <button className="btn btn-primary m-2">View <VisibilityIcon/> </button>
                </Link>
                {/* <Link to={"/updatedocument/"+id +"/"+doc.id}>
                <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                </Link>
                <Link to={"/viewdrawing/"+doc.id}>
                <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                </Link> */}
            </td>    
          </tr>
          ))}
          </tbody>
          {/*Ends */}
        </Table>
        {/* Custome File Documents */}
        <UploadFiles/>
      </div>
      );
  }
}
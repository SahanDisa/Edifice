import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectoryService from "../../../services/directory.service";
import DocumentfileService from "../../../services/documentfile.service";
import Card from 'react-bootstrap/Card';
import UploadFiles from "./fileupload.component";
import directorycover from "././../../../assets/PM/photos/directory1.jpg";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

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
          <h2>Document</h2>
          <h6>Manage project specific documents and organise with directories in here</h6>
          <Link className="btn btn-primary mr-2" to={"/directory/"+id}>
                Add Directory
          </Link>
          <Link className="btn btn-primary mr-2" to={"/adddocument/"+id}>
                Add Document
          </Link>
          <hr></hr>
          <h3>Directory</h3>
          <p>Manage your document by clicking on a directory</p>
          <div className="container">
          <div className="container row">
            {directories &&
              directories.map((directory, index) => (
                    <div
                    className={
                    "container col-3" +
                    (index === currentIndex ? "active" : "")
                    }
                    key={index}
                >
                {/* unit data */}
                <Link to={"/viewdirectory/"+id+"/"+directory.id} style={{'text-decoration': 'none'}}>
                        <Card
                        bg={'secondary'}
                        text={'dark'}
                        style={{ width: '14rem' }}
                        className="mb-2"
                        >
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
        <p>Manage your document by adding it to the system</p>
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
                      <tr
                          key={index}
                      >
                      <td>{doc.id}</td>
                      <td>{doc.title}</td>
                      <td>{doc.description}</td>
                      <td>{doc.status}</td>
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
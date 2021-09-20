import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import DrawRevisionService from "../../../services/drawrevision.service";
import UserService from "./../../../services/user.service";
import AuthService from "./../../../services/auth.service";
import { Breadcrumbs } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import PdfIcon from '@material-ui/icons/PictureAsPdf';

export default class ViewSingleDrawing extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeComment = this.onChangeComment.bind(this);
      this.saveDrawingRevision = this.saveDrawingRevision.bind(this);
    
      this.state = {
        id: this.props.match.params.id,
        url: "http://localhost:8080/api/files/", 
        title: "",
        description: "",
        category: "",
        version: 1,
        status: "", 
        projectId: "",
        revisions: [],

        //revision
        currentUser: AuthService.getCurrentUser(),
        username: "",
        comment: "",
      };
    }
    onChangeUserName(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangeComment(e) {
      this.setState({
        comment: e.target.value
      });
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      this.retrieveDrawing(this.props.match.params.id);
      this.getRevisions(this.props.match.params.id);
    }
    retrieveDrawing(id) {
      DrawingDataService.get(id)
        .then(response => {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            category: response.data.category,
            status: response.data.status,
            version: response.data.version,
            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    getRevisions(id){
      DrawRevisionService.getAll(id)
      .then(response => {
          this.setState({
            revisions: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    saveDrawingRevision() { 
      var data = {
        username : this.state.currentUser.username,
        description: this.state.comment,
        drawingId: this.state.id
      };
  
      DrawRevisionService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            username: response.data.username,
            description: response.data.comment,
            drawingId: response.data.drawingId,
  
            // submitted: true
          });
          console.log(response.data);
          window.location.reload();
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,title,description,category,version,status,url,revisions,currentUser,projectId } = this.state;
        return (
           // Main Div
            <div>
              <h2>Drawing Single Page</h2>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">
                  Home
                </Link>
                <Link color="inherit" to={"/projectmanagementhome/"+projectId}>
                  App Dashboard
                </Link>
                <Link color="inherit" to={"/drawing/"+projectId}>
                  Drawing Home
                </Link>
                <Link color="textPrimary" to={"/viewdrawing/"+id} aria-current="page">
                  View Drawing
                </Link>
              </Breadcrumbs>
              {/* <p>Manage as single drawing and add measurements and versioning</p> */}
              <hr></hr>

              <h3>View & Manage Drawing</h3>
              <h6>View the particular drawing in pdf format</h6>
              <div className="row">
              <div className="col-sm-8">
              <embed
                    //src="https://vancouver.ca/files/cov/sample-drawing-package-1and2family.pdf"
                    src={"http://localhost:8080/api/files/"+title+".pdf"}
                    type="application/pdf"
                    frameBorder="0"
                    scrolling="auto"
                    height="700px"
                    width="100%"
                ></embed>
              <hr></hr>  
              <h3>Revisions</h3>
              <h6>Add specific notes for the drawing for the future reference</h6>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="list-group list-group-flush">
                        {revisions &&
                        revisions.map((revision, index) => (
                          <li className="list-group-item" key={index}>
                          
                          <Avatar>U</Avatar>
                          
                          <b>{revision.username}</b>{" : "}{revision.description}
                        </li>
                        ))}
                  </ul>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={currentUser.username}
                        onChange={this.onChangeUserName}
                        name="title"
                        disabled
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="description">Comment</label>
                    <input
                        type="textarea"
                        className="form-control"
                        id="comment"
                        required
                        value={this.state.comment}
                        onChange={this.onChangeComment}
                        name="description"
                    />
                    </div>
                    <div>
                      <button className="btn btn-primary" onClick={this.saveDrawingRevision}>Add Comment</button>
                    </div>
                </div>
              </div>
              </div>
              <div className="col-sm-3">
                <h3>File details</h3>
                <h6>Drawing Id : {id}</h6>
                <h6>Name : {title}</h6>
                <h6>Description : {description}</h6>
                <h6>Drawing Type : {category}</h6>
                <h6>Status : {status}</h6>

                <hr></hr>
                <h4>View Full Screen</h4>
                <a href={url+title+".pdf"} target="_blank" style={{'text-decoration': 'none'}}>
                
                <PdfIcon style={{ fontSize: 100 }} />
                </a>
                {/* <div>
                    <h4>Measurements</h4>
                    <p>Main measurements : Area, Distance</p>
                    <button className="btn btn-primary">Add</button>
                </div> */}
                <div>
                    <h4>Version</h4>
                    <h5>{version}{".0"}</h5>
                    
                </div> 
              </div>
            </div>
            </div>
        );
    }
}
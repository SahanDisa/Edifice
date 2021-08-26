import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";

import PdfIcon from '@material-ui/icons/PictureAsPdf';

export default class ViewSingleDrawing extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.state = {
        id: this.props.match.params.id,
        url: "http://localhost:8080/api/files/", 
        title: "",
        description: "",
        category: "",
        version: 1,
        status: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrieveDrawing(this.props.match.params.id);
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
            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,title,description,category,version,status,url } = this.state;
        return (
            <div>
              <h2>Drawing Single Page</h2>
              <p>Manage as single drawing and add measurements and versioning</p>
              <hr></hr>
              <h3>File details</h3>
              <h6>Drawing Id : {id}</h6>
              <h6>Name : {title}</h6>
              <h6>Description : {description}</h6>
              <h6>Drawing Type : {category}</h6>
              <h6>Status : {status == "Not Complete" ? "🔴 NC": "🟡 Due" }</h6>
            <hr></hr>
            <h3>View & Manage Drawing</h3>
            <p>View the particular drawing in pdf format</p>
            <div className="row">
            <div className="col-sm-9">
            
            <embed
                //src="https://vancouver.ca/files/cov/sample-drawing-package-1and2family.pdf"
                src={"http://localhost:8080/api/files/"+title+".pdf"}
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="700px"
                width="100%"
            ></embed>
            <h4>Full Screen</h4>
            <a href={url+title+".pdf"} target="_blank" style={{'text-decoration': 'none'}}>
            {/* {url+title+".pdf"} */}
            <PdfIcon style={{ fontSize: 100 }} />
            </a>
            
            </div>
            <div className="col-sm-3">
              <div>
                  <h4>Measurements</h4>
                  <p>Main measurements : Area, Distance</p>
                  <button className="btn btn-primary">Add</button>
              </div>
              <div>
                  <h4>Revisions</h4>
                  <p>Add specific notes for the drawing for the future reference</p>
                  <button className="btn btn-primary">Add Revision</button>
              </div>
              <div>
                  <h4>Versions</h4>
                  <h5>{version}{".0.0"}</h5>
                  {/* <p>Make adjustments and keep the drawing upto date</p> */}
              </div> 
              </div>
            </div>
            </div>
        );
    }
}
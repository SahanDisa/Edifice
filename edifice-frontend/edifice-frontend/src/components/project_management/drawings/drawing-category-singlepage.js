import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

export default class ViewSingleDrawingCategory extends Component {
    constructor(props) {
      super(props);
      this.retrieveCategoryDrawing = this.retrieveCategoryDrawing.bind(this);
      this.state = {
        id: this.props.match.params.id,
        drawings: [],
        name: "",
        description: "",
        drawtype: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrieveCategoryDrawing(this.props.match.params.id);
    }
    retrieveDrawing(id) {
      DrawingDataService.get(id)
        .then(response => {
          this.setState({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            drawtype: response.data.drawtype,
            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    retrieveCategoryDrawing(id) {
      DrawingDataService.getCat(id)
        .then(response => {
          this.setState({
            drawings: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,name,description,drawtype, drawings,currentIndex } = this.state;
        return (
            <div>
              <h2>Drawing Category Single Page</h2>
              <p>Manage the drawing in each drawing category</p>
              <hr></hr>
              <h3>File details</h3>
              <h6>Drawing Id : {id}</h6>
              <h6>Name : {name}</h6>
              <h6>Description : {description}</h6>
              <h6>Drawing Type : {drawtype}</h6>
              <hr></hr>
              <div className="container">
                <h4>Recent List</h4>
            {/* Drawing List */}
            <ul className="list-group">
            {drawings &&
                drawings.map((drawing, index) => (
                <div
                    className={
                    "list-group-item row" +
                    (index === currentIndex ? "active" : "")
                    }
                    // onClick={() => this.setActiveProject(project, index)}
                    key={index}
                >
                <div className="row">
                <div className="col-10">
                {drawing.name}
                    <h6>{drawing.description}</h6>
                    <p>{drawing.drawtype}</p>
                    {/* Button Group */}
                    <Link to={"/viewdrawing/"+drawing.id}>
                    <button className="btn btn-primary">View <VisibilityIcon/> </button>
                    </Link>
                    <Link to={"/viewdrawing/"+drawing.id}>
                    <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                    </Link>
                    <Link to={"/viewdrawing/"+drawing.id}>
                    <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                    </Link>
                </div>
                </div>    
                </div>
                ))}
            </ul>
            </div> 
            </div>
        );
    }
}
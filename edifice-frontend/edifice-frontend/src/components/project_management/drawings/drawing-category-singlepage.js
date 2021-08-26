import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import DrawingCategoryDataService from "./../../../services/drawing-category.service";
import Table from 'react-bootstrap/Table';
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
        title: "",
        description: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrieveCategoryDrawing(this.props.match.params.id);
      this.retriveCategoryInfo(this.props.match.params.id);
    }
    retriveCategoryInfo(id){
      DrawingCategoryDataService.getOne(id)
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
        const { id,title,description,drawings,currentIndex } = this.state;
        return (
            <div>
              <h2>Drawing Category Single Page</h2>
              <p>Manage the drawing in each drawing category</p>
              <hr></hr>
              <h3>Category details</h3>
              <h6>Name : {title}</h6>
              <h6>Description : {description}</h6>
              <hr></hr>
              
              <h3>Drawing List</h3>
              {/* Drawing List */}
              <Table striped bordered hover variant="light" responsive>
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
                {drawings &&
                    drawings.map((drawing, index) => (
                    <tr
                        // className={
                        // "list-group-item row" +
                        // (index === currentIndex ? "active" : "")
                        // }
                        // onClick={() => this.setActiveProject(project, index)}
                        key={index}
                    >
                    <td>{drawing.id}</td>
                    <td>{drawing.name}</td>
                    <td>{drawing.description}</td>
                    <td>{title}</td>
                    <td>   
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
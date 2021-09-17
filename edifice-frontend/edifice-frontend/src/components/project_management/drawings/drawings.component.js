import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import DrawingCategoryService from "../../../services/drawing-category.service";
import { Breadcrumbs } from "@material-ui/core";
import Pdfviewer from "./pdfviewer.component";
import Card from 'react-bootstrap/Card';
import drawingcover from "././../../../assets/PM/photos/drawing.jpg";
import ProgressBar from 'react-customizable-progressbar';

export default class Drawings extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.state = {
        drawings: [],
        drawingcategories: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
      };
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      this.retrieveDrawing(this.props.match.params.id);
      this.retriveDrawingCategory(this.props.match.params.id);
    }
    retrieveDrawing(id) {
      DrawingDataService.getAll(id)
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
    retriveDrawingCategory(id){
        DrawingCategoryService.getAll(id)
        .then(response => {
            this.setState({
              drawingcategories: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    render() {
        const { drawings , drawingcategories, currentIndex,id } = this.state;
        
        return (
        <div>
          <div className="container row">
            <div className="col-12">
              <h2>Drawing Home</h2>
                <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">
                  Home
                </Link>
                <Link color="inherit" to={"/projectmanagementhome/"+id}>
                  App Dashboard
                </Link>
                <Link color="textPrimary" to={"/drawing/"+id} aria-current="page">
                  Drawing Home
                </Link>
                </Breadcrumbs>
            </div>
          </div>
          <hr></hr>
          <div className="container">
          <h3>Insights</h3>
          <h6>Overview of Drawing progress</h6>
          <div className="row">
            <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
              <div className="card card-hover shadow-sm" title="Category Insights">
                <h1 className="m-2">5</h1>
                <h3 className="h5 nav-heading-title m-2">Category</h3>
                {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
              </div>
            </div>
            <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
              <div className="card card-hover shadow-sm" title="Project Insights">
                <h1 className="m-2" >7</h1>
                <h3 className="h5 nav-heading-title mb-0 m-2">Drawing</h3>
                {/* <span className="fs-sm fw-normal text-muted">Contains abstract project detail specification with analytics</span> */}
              </div>
            </div>
            <div className="col-lg-3 mb-grid-gutter pb-2 card-text-edifice">
              <div className="card card-hover shadow-sm" title="Revision Insights">
                <h1 className="m-2">14</h1>
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
                    progress={45}
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
        <div className="container">
        <h3>Drawings</h3>
        <h6>Manage the drawings,other related planning materials in here</h6>
        <Link className="btn btn-primary mb-2 mr-2" to={"/adddrawing/"+id}>
          Add New Drawing
        </Link>
        <Link className="btn btn-primary mb-2" to={"/adddrawingcategory/"+id}>
          Add Catgory
        </Link>
        <div className="container row">
            {drawingcategories &&
                drawingcategories.map((drawingcategory, index) => (
                    <div
                    className={
                    "container col-3" +
                    (index === currentIndex ? "active" : "")
                    }
                    key={index}
                >
                {/* unit data */}
                <Link to={"/viewdrawingcategory/"+drawingcategory.id}>
                        <Card
                        bg={'secondary'}
                        text={'dark'}
                        style={{ width: '15rem' }}
                        className="bg-dark mb-2"
                        >
                        <Card.Img src={drawingcover} alt="Card image" />
                        <Card.ImgOverlay>
                        <Card.Title><h4>{drawingcategory.title}</h4></Card.Title>
                        <Card.Text>
                           {drawingcategory.description == "" ? "No Description" : drawingcategory.description} 
                        </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                </Link>
                </div>
            ))}
            </div>
        </div>
        <hr></hr>
        <div className="container">
        <h3>Custom Drawing Viewer</h3>
        <p>View the drawing before use in a system and rapid file viewer</p>
        <Pdfviewer/>            
        </div>
        <hr></hr>
        <div className="container">
            {/* <h3>Recent List</h3>
            
            <ul className="list-group">
            {drawings &&
                drawings.map((drawing, index) => (
                <div
                    className={
                    "list-group-item row" +
                    (index === currentIndex ? "active" : "")
                    }
                    key={index}
                >
                <div className="row">
                <div className="col-10">
                {drawing.name}
                    <h6>{drawing.description}</h6>
                    <p>{drawing.drawtype}</p>
                    
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
            </ul> */}
          </div> 
          </div>
        );
    }
}
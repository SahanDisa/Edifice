import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import DrawingCategoryService from "../../../services/drawing-category.service";
import Card from 'react-bootstrap/Card';
import drawingcover from "././../../../assets/PM/photos/drawing.jpg";

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
                    <h2>Action Plan</h2>
                    <h6>Ensure that unique company and project specific requirements are clearly defined, centralized and organized</h6>
                </div>
            <hr></hr>
            </div>
            <div className="container">
                
                <Link className="btn btn-primary mr-2" to={"/addactionplantype/"+id}>
                Create Action Plan Type
                </Link>
                <Link className="btn btn-primary" to={"/addactionplan/"+id}>
                Create new Action Plan
                </Link>
                <hr></hr>
            </div>
        <div className="container">
        <h3>Action Plans</h3>
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
        
        </div>
        );
    }
}
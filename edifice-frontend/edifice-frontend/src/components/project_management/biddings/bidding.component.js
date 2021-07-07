import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export default class Bidding extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.state = {
        drawings: [],
        currentIndex: -1,
        content: "",
        id: this.props.match.params.id
      };
    }
  
    componentDidMount() {
      this.retrieveDrawing(this.props.match.params.id);
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
    render() {
        const { drawings ,currentIndex,id } = this.state;
        return (
            <div>
            <div className="jumbotron">
                <h2>Bidding</h2>
                <p>Manage project related biddings here</p>
            </div>
            <div className="container">
                <h4>Bid packages</h4>

            </div>
            
            
            <div>
            <div className="jumbotron">
                <h2>Drawings {id}</h2>
                <p>Manage the drawings,other related planning materials in here</p>
            </div>
            <div className="container">
                <h4>Add Drawings</h4>
                <Link to={"/adddrawing/"+id}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                </Link>
            </div>
            <div className="container">
                <h4>Drawing List</h4>
            {/* Drawing List */}
            <ul className="list-group">
            {drawings &&
                drawings.map((drawing, index) => (
                <li
                    className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                    }
                    // onClick={() => this.setActiveProject(project, index)}
                    key={index}
                >
                    {drawing.name}
                    <h6>{drawing.description}</h6>
                    <p>{drawing.drawtype}</p>
                </li>
                ))}
            </ul>
            </div> 
            </div>
            </div>
        );
    }
}

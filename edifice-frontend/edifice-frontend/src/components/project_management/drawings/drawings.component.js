import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import drawingIcon from "././../../../assets/PM/drawingsingle.png";
import Card from 'react-bootstrap/Card';
//styles classes

export default class Drawings extends Component {
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

    // makeStyles((theme) => ({
    //     button: {
    //       margin: theme.spacing(1),
    //     },
    //   }));
  
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
        // const classes = useStyles();
        return (
            <div>
            <div className="container row">
            <div className="col-12">
            <h2>Drawings</h2>
            <h6>Manage the drawings,other related planning materials in here</h6>
            </div>
            <hr></hr>
            </div>
            <div className="container">
                
                <Link className="btn btn-primary mr-2" to={"/adddrawing/"+id}>
                Add New Drawing
                </Link>
                <Link className="btn btn-primary" to={"/adddrawing/"+id}>
                Add Catgory
                </Link>
                <hr></hr>
            </div>
            
            <div className="container">
                <h4>Drawing Category</h4>
                <div className="container row">
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Insfrastructure</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Finishing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Plumbing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Electrical</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
          </div>
        <hr></hr>
            </div>
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
                    {/* <Button
                        variant="contained"
                        color="primary"
                        className="btn btn-primary"
                        endIcon={<VisibilityIcon/>}
                    >
                        View 
                    </Button>*/}
                    </Link>
                    <Link to={"/viewdrawing/"+drawing.id}>
                    <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                    </Link>
                    <Link to={"/viewdrawing/"+drawing.id}>
                    <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                    </Link>
                    
                </div>
                {/* <div className="col-2">
                <img src={drawingIcon} alt="" width="50"/>
                </div>     */}
                </div>    
                </div>
                ))}
            </ul>
            </div> 
            </div>
        );
    }
}
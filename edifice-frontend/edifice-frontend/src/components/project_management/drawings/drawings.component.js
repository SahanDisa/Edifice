import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawingDataService from "./../../../services/drawing.service";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

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
            <div className="jumbotron">
                <h2>Drawings</h2>
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
                    {/* Button Group */}
                    <div>
                    <Link to={"/viewdrawing/"+drawing.id}>
                    <Button
                        variant="contained"
                        color="primary"
                        //className={classes.button}
                        endIcon={<VisibilityIcon/>}
                    >
                        View
                    </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="default"
                        //className={classes.button}
                        startIcon={<UpdateIcon />}
                    >
                        Update
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        //className={classes.button}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                    {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                    </div>
                </li>
                ))}
            </ul>
            </div> 
            </div>
        );
    }
}
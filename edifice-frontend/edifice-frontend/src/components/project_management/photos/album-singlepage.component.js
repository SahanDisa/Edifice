import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumDataService from "./../../../services/album.service";
import PhotoDataService from "./../../../services/photo.service";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';

export default class ViewSingleAlbum extends Component {
    constructor(props) {
      super(props);
      this.retrievePhotoAlbum = this.retrievePhotoAlbum.bind(this);
      this.state = {
        id: this.props.match.params.id,
        photos: [],
        title: "",
        description: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrievePhotoAlbum(this.props.match.params.id);
      this.retriveAlbumInfo(this.props.match.params.id);
    }
    retriveAlbumInfo(id){
      AlbumDataService.getOne(id)
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
    retrievePhotoAlbum(id) {
      PhotoDataService.getCat(id)
        .then(response => {
          this.setState({
            photos: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,title,description,photos,currentIndex } = this.state;
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
              <Table striped bordered hover variant="secondary" responsive>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Resource</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* Functional for table data */}
                <tbody>
                {photos &&
                    photos.map((photo, index) => (
                    <tr
                        key={index}
                    >
                    <td>{photo.id}</td>
                    <td>{photo.title}</td>
                    <td>{photo.description}</td>
                    <td>{title}</td>
                    <td>
                      {/* Button Group */}
                      {photo.title.substring(0, 9) == "oncapture" ? 
                      <img src={"http://localhost:8080/api/capture/"+photo.title} alt="Card image" style={{'width': '200px', 'height': '200px'}}/>
                      : 
                      <img src={"http://localhost:8080/api/photos/"+photo.title+".png"} alt="Card image" style={{'width': '200px', 'height': '200px'}}/>
                      }
                    </td>
                    <td>   
                        {photo.title.substring(0,9) == "oncapture" ?
                        <a href={"http://localhost:8080/api/capture/"+photo.title} style={{'text-decoration':'none'}} target="_blank">
                        <button className="btn btn-primary">View <VisibilityIcon/></button>
                        </a>
                        :
                        <a href={"http://localhost:8080/api/photos/"+photo.title+".png"} style={{'text-decoration':'none'}} target="_blank">
                        <button className="btn btn-primary">View <VisibilityIcon/> </button>
                        </a>
                        }
                        
                        
                        <Link to={"/viewdrawing/"+photo.id}>
                        <button className="btn btn-success m-2">Update <UpdateIcon/> </button>
                        </Link>
                        {/* <Link to={"/viewdrawing/"+photo.id}>
                        <button className="btn btn-danger">Delete <DeleteIcon/> </button>
                        </Link> */}
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
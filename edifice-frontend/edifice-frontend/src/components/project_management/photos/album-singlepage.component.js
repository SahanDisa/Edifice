import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumDataService from "./../../../services/album.service";
import PhotoDataService from "./../../../services/photo.service";
import AuthService from "./../../../services/auth.service";
import Table from 'react-bootstrap/Table';
// import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import { Breadcrumbs } from "@material-ui/core";

export default class ViewSingleAlbum extends Component {
    constructor(props) {
      super(props);
      this.retrievePhotoAlbum = this.retrievePhotoAlbum.bind(this);
      this.state = {
        id: this.props.match.params.id,
        photos: [],
        title: "",
        description: "", 
        projectId: "",
        currentUser: AuthService.getCurrentUser(),
        showEngineerBoard: false,
        showManagerBoard: false,
        showAdminBoard: false,
      };
    }
  
    componentDidMount() {
      this.retrievePhotoAlbum(this.props.match.params.id);
      this.retriveAlbumInfo(this.props.match.params.id);
      const user = AuthService.getCurrentUser();
  
      if (user) {
        this.setState({
          currentUser: user,
          showEngineerBoard: user.roles.includes("ROLE_USER"),
          showManagerBoard: user.roles.includes("ROLE_MODERATOR"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        });
      }  
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
        const { id,title,description,photos,currentIndex,projectId,showManagerBoard } = this.state;
        return (
            <div>
              <h2>Album - {title}</h2>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/home">
                  Home
                </Link>
                <Link color="inherit" to={"/projectmanagementhome/"+projectId}>
                  App Dashboard
                </Link>
                <Link color="textPrimary" to={"/photos/"+projectId}>
                  Photos Home
                </Link>
                <Link color="textPrimary" to={"/viewalbum/"+projectId} aria-current="page">
                  {title}
                </Link>
              </Breadcrumbs>
              
              <hr></hr>
              <h3>Album details</h3>
              <div className="row">
                  <div className="col-9">
                  <h6>Name : {title}</h6>
                  <h6>Description : {description}</h6>
                  </div>
                  { showManagerBoard &&
                  <div className="col-3">
                  <Link className="btn btn-primary" to={"/updatealbum/"+projectId+"/"+id} style={{'text-decoration': 'none'}}>
                  ⚙️ Manage
                  </Link>
                  </div>
                  }
              </div>
              <hr></hr>
              
              <h3>Photo List</h3>
              <h6>Manage the drawing in each drawing category</h6>
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
                        
                        
                        <Link to={"/updatephoto/"+projectId+"/"+photo.id}>
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
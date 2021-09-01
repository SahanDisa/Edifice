import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectoryService from "../../../services/directory.service";
import Card from 'react-bootstrap/Card';
import UploadFiles from "./fileupload.component";
import directorycover from "././../../../assets/PM/photos/directory1.jpg";

export default class Documents extends Component {
  constructor(props) {
    super(props);
    this.retrieveDirectory = this.retriveDirectory.bind(this);
    this.state = {
      directories: [],
      currentIndex: -1,
      content: "",
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    this.retrieveDirectory(this.props.match.params.id);
  }
  retriveDirectory(id){
      DirectoryService.getAll(id)
      .then(response => {
          this.setState({
            directories: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }

  render() {
      const {id, directories, currentIndex} = this.state;
      
      return (
          <div>
          <h2>Document</h2>
          <h6>Manage project specific documents and organise with directories in here</h6>
          <Link className="btn btn-primary mr-2" to={"/directory/"+id}>
                Add Directory
          </Link>
          <Link className="btn btn-primary mr-2" to={"/adddocument/"+id}>
                Add Document
          </Link>
          <hr></hr>
          <h3>Directory</h3>
          <p>Manage your document by clicking on a directory</p>
          <div className="container">
          <div className="container row">
            {directories &&
              directories.map((directory, index) => (
                    <div
                    className={
                    "container col-3" +
                    (index === currentIndex ? "active" : "")
                    }
                    key={index}
                >
                {/* unit data */}
                <Link to={"/viewdirectory/"+id+"/"+directory.id} style={{'text-decoration': 'none'}}>
                        <Card
                        bg={'secondary'}
                        text={'dark'}
                        style={{ width: '14rem' }}
                        className="mb-2"
                        >
                        <Card.Img src={directorycover} alt="Card image" />
                        <Card.ImgOverlay>
                        {/* <Card.Title><h4>{directory.title}</h4></Card.Title> */}
                        {/* <Card.Text>
                           {directory.description == "" ? "No Description" : directory.description} 
                        </Card.Text> */}
                        </Card.ImgOverlay>
                        <Card.Title><h4>{directory.title}</h4></Card.Title>
                        </Card>
                </Link>
                </div>
            ))}
            </div>
        </div>
        <hr></hr>
        <h3>Documents</h3>
        <p>Manage your document by adding it to the system</p>
            {/* <embed
                src="https://www.pearsonhighered.com/assets/samplechapter/0/1/3/4/0134454170.pdf"
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="500px"
                width="100%"
            ></embed> */}
            {/* <Pdfviewer/> */}
            <UploadFiles/>
          </div>

      );
  }
}
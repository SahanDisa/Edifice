import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadService from "./../../../services/document.service";
import DirectoryService from "../../../services/directory.service";
import Card from 'react-bootstrap/Card';
import { AccordViewer } from "./viewdocument.component";
import Pdfviewer from "./pdfviewer.component";
import UploadFiles from "./fileupload.component";
import App from "./viewpdf.component";

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
          <p>Manage project specific documents in one place</p>
          <hr></hr>
          <h3>Directory</h3>
          <p>Manage the related documents in one place using directory</p>
          <Link className="btn btn-primary" to={"/directory/"+id}>
                Add Directory
          </Link>
          <Link className="btn btn-primary" to={"/adddocument/"+id}>
                Add Document
          </Link>
          <hr></hr>
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
                <Link to={"/viewdrawingcategory/"+id}>
                        <Card
                        bg={'secondary'}
                        text={'dark'}
                        style={{ width: '15rem' }}
                        className="mb-2"
                        >
                        <Card.Body>
                            <Card.Title><h4>{directory.title}</h4></Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Link>
                </div>
            ))}
            </div>
        </div>
            
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

            <App/>
          </div>

      );
  }
}
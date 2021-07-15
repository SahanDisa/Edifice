import React, { Component } from "react";
import DrawingDataService from "./../../../services/drawing.service";
import { Table } from "react-bootstrap";
import PdfIcon from '././../../../assets/PM/pdf.png';

export default class ViewSpec extends Component {
    constructor(props) {
      super(props);
      this.retrieveDrawing = this.retrieveDrawing.bind(this);
      this.state = {
        id: this.props.match.params.id,
        name: "",
        description: "",
        drawtype: "", 
        projectId: ""
      };
    }
  
    componentDidMount() {
      this.retrieveDrawing(this.props.match.params.id);
    }
    retrieveDrawing(id) {
      DrawingDataService.get(id)
        .then(response => {
          this.setState({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            drawtype: response.data.drawtype,
            projectId: response.data.projectId,
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    render() {
        const { id,name,description,drawtype } = this.state;
        return (
            <div>
              <h2>View Bidding Specification</h2>
              <p>view vendor/sub contractor bidding specification</p>
              <hr></hr>
              <div className="row">
              <div className="col-sm-3">
                <h3>Bidder Details</h3>
                <h6>Bidder Id : 13</h6>
                <h6>Name : City Concerete Pvt Ltd</h6>
                <h6>Tel : +112642389</h6>
                <h6>Email : cityconcrete@gmail.com</h6>
                <hr></hr>
                <h3>Specification</h3>
                
                <h5>SOV</h5>
                <p>450 cubic/LKR</p>
                <div>
                    <h4>Invitation sent:</h4>
                    <p>2021-07-15 16:14:34</p>
                </div>
                <div>
                    <h4>Invitation replied:</h4>
                    <p>2021-07-16 09:36:34</p>
                </div> 
              </div>
              <div className="col-sm-9">
                <h3>Bid Document</h3>
                <embed
                src="http://www.oas.org/juridico/PDFs/mesicic5_blz_resp_annex17.pdf"
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="700px"
                width="100%"
            ></embed>
              </div>  
              </div>
              
              
              <div className="row">
              <div className="col-sm-8">
                
              </div>
              <div className="col-sm-4">
                
              </div>
            </div>   
            </div>
        );
    }
}
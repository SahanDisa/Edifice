import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActionPlanItemsDataService from "../../../services/project_management/actionplanitem.service";
import Card from 'react-bootstrap/Card';

export default class ViewActionPlanItems extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: null,
        title: "",
        description: "",
        actionplanId: this.props.match.params.aid,
        actionsectionId: this.props.match.params.asid,
        actionplansitems: [],
        currentIndex: -1,
        content: "",

        submitted: false
      };
    }
    componentDidMount() {
      this.retriveActionPlanItems(this.props.match.params.asid);
    }

    retriveActionPlanItems(id){
      ActionPlanItemsDataService.getAll(id)
      .then(response => {
          this.setState({
            actionplanitems: response.data
          });
          console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }


    render() {
        const { actionplansitems, actionplanId, actionsectionId } = this.state;
        return (
          <div>
            <div className="container row">
                <div className="col-12">
                    <h2>Action Plan items for section {actionsectionId} and action plan {actionplanId} </h2>
                    <h6></h6>
                </div>
            </div>

            <hr/>
        </div>
        );
    }
}
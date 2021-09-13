import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default class ActionPlanSinglePage extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        id: this.props.match.params.id,
        title: "",
        description: "",
        category: "",
        projectId: "",

        currentUser: AuthService.getCurrentUser(),
      };
    }
    
    componentDidMount() {
      
    }
    
    render() {
        const { id,title,description,category,currentUser } = this.state;
        return (
            <div>
              <h2>ActionPlan Single Page</h2>
              <p>Manage a single Action Plan with sections and action items</p>
              <hr></hr>
            
            </div>
        );
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BudgetDataService from "./../../../services/budget.service";
import DirectCostDataService from "./../../../services/directcost.service";
import SovDataService from "./../../../services/sov.service";
import Table from 'react-bootstrap/Table';

export default class BudgetList extends Component {
    constructor(props) {
      super(props);
      this.getBudgetOverview  = this.getBudgetOverview.bind(this);
      this.calculateTotalDirectCosts = this.calculateTotalDirectCosts.bind(this);
      this.calculateTotalSovs = this.calculateTotalSovs.bind(this);
      this.calculateTotalEstimatedBudget = this.calculateTotalEstimatedBudget.bind(this);
      this.state = {
        id: this.props.match.params.id,
        budgets: [],
        projectId: "",
        directCostTotal:"",
        budgetTotal:"",
        sovTotal:""
      };
    }
  
    componentDidMount() {
      this.getBudgetOverview(this.props.match.params.id);
      this.calculateTotalDirectCosts(this.props.match.params.id);
      this.calculateTotalSovs(this.props.match.params.id);
      this.calculateTotalEstimatedBudget(this.props.match.params.id);
    }

    getBudgetOverview(id) {
      BudgetDataService.getBudgetOverview(id)
        .then(response => {
          this.setState({
            budgets: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    calculateTotalDirectCosts(id){
 
      DirectCostDataService.getTotalDirectCosts(id)
      .then(response => {
        this.setState({
         directCostTotal: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
    }
  
    calculateTotalSovs(id){
   
      SovDataService.getTotalSovs(id)
      .then(response => {
        this.setState({
         sovTotal: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
    }
  
    calculateTotalEstimatedBudget(id){
   
      BudgetDataService.getTotalBudget(id)
      .then(response => {
        this.setState({
          budgetTotal: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
    }


    render() {
        const { directCostTotal,budgetTotal,sovTotal,budgets,currentIndex } = this.state;
        return (
            <div>
              <h2>Budget Overview</h2>
              <p></p>
              <hr></hr>

              <div className="row" style={{alignItems: "center"}} >
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2" >
            <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Total Estimated Budget</h3>
                <span className="fs-sm fw-normal text-muted">Rs. {budgetTotal}</span>
              </div>
            </div>
<div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Total Direct Cost</h3>
                <span className="fs-sm fw-normal text-muted">Rs. {directCostTotal}</span>
              </div>
    </div>
          <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
            <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Total Commited Cost</h3>
                <span className="fs-sm fw-normal text-muted">Rs. {sovTotal} </span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-grid-gutter pb-2">
              <div className="card card-hover shadow-sm" style={{alignItems: "center"}} >
                <h3 className="h5 nav-heading-title mb-0">Total Cost</h3>
                <span className="fs-sm fw-normal text-muted">Rs. {sovTotal+directCostTotal}</span>
              </div>
            </div>
            
          </div>
          <br />
            
              {/* Drawing List */}
              <Table  className="table table-striped table-bordered" responsive>
                <thead className="Table-header">
                  <tr>
                    <th>Cost Code</th>
                    <th>Estimated Budget</th>
                    <th>Direct Cost</th>
                    <th>Commited Cost</th>
                    <th>Total Cost</th>
                    <th>Revised Amount</th>
                    <th>Over/Under</th>
                  </tr>
                </thead>
                {/* Functional for table data */}
                <tbody>
                {budgets &&
                    budgets.map((budget, index) => (
                    <tr
                        // className={
                        // "list-group-item row" +
                        // (index === currentIndex ? "active" : "")
                        // }
                        // onClick={() => this.setActiveProject(project, index)}
                        key={index}
                    >

                   
                    <td>{budget.costCode}</td>
                    <td>{budget.btotal}</td>
                    <td>{budget.dtotal}</td>
                    <td>{budget.stotal}</td>
                    <td>{budget.stotal}+{budget.dtotal}</td>
                    <td></td> 
                    <td></td>    
                    </tr>
                    ))}
                </tbody>
                {/*Ends */}
              </Table>
             
            </div>
        );
    }
}
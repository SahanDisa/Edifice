import React, { useState, useEffect, useMemo, useRef } from "react";
import BudgetDataService from "./../../../services/budget.service";
import DirectCostDataService from "./../../../services/directcost.service";
import SovDataService from "./../../../services/sov.service";
import { useTable } from "react-table";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const BudgetList = (props) => {
  const {id}= useParams();
  const [budgets, setBudgets] = useState([]);
  const [searchCostCode, setSearchCostCode] = useState("");
  const budgetsRef = useRef();
  budgetsRef.current = budgets;


  const [currentDirectCost, setCurrentDirectCost] = useState("");
  const [currentCommitedCost, setCurrentCommitedCost] = useState("");

  const [directCostTotal, setDirectCostTotal] = useState("");
  const [budgetTotal, setBudgetTotal] = useState("");
  const [sovTotal, setSovTotal] = useState("");

  /*const onChangeDirectCost = (e) => {
    const currentDirectCost = e.target.value;
    setCurrentDirectCost(currentDirectCost);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentDirectCost({ ...currentDirectCost, [name]: value });
  };*/



  useEffect(() => {
    calculateTotalDirectCosts();
    calculateTotalSovs();
    calculateTotalEstimatedBudget();
    retrieveBudgets();
    
  }, []);


  const onChangeSearchCostCode = (e) => {
    const searchCostCode = e.target.value;
    setSearchCostCode(searchCostCode);
  };

  const retrieveBudgets = () => {
    
    BudgetDataService.getAll(id)//passing project id as id
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveBudgets();
  };

  const findByCostCode = () => {
    BudgetDataService.findByCostCode(id,searchCostCode)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openBudget = (rowIndex) => {
    const id = budgetsRef.current[rowIndex].id;
    //const projectId = directcostsRef.current[rowIndex].projectId;

    props.history.push("/viewbudget/"+ id);//here id is direct cost id
  };



  const deleteBudget = (rowIndex) => {
    const id = budgetsRef.current[rowIndex].id;
    //const projectId = directcostsRef.current[rowIndex].projectId;

    BudgetDataService.remove(id)
      .then((response) => {
        
        //props.history.push("/directcost/"+id);

        let newBudgets = [...budgetsRef.current];
        newBudgets.splice(rowIndex, 1);

        setBudgets(newBudgets);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const calculateTotalDirectCosts = () => {
 
    DirectCostDataService.getTotalDirectCosts(id)
    .then((response) => {
    
    setDirectCostTotal(response.data);

    
    })
    .catch(e => {
      console.log(e);
    });
  
  }

  const calculateTotalSovs = () => {
 
    SovDataService.getTotalSovs(id)
    .then((response) => {
    
    setSovTotal(response.data);

    
    })
    .catch(e => {
      console.log(e);
    });
  
  }

  const calculateTotalEstimatedBudget= () => {
 
    BudgetDataService.getTotalBudget(id)
    .then((response) => {
    
    setBudgetTotal(response.data);

    
    })
    .catch(e => {
      console.log(e);
    });
  
  }



  const retrieveTotalCommitedCosts = (rowIndex) => {
 
    const id = budgetsRef.current[rowIndex].projectId;
    const costCode = budgetsRef.current[rowIndex].costCode;
  
    SovDataService.getSTotalOfCostCodes (id,costCode)
    .then((response) => {
    
    budgetsRef.current[rowIndex].commitedCosts=response.data;
    //setCurrentCommitedCost(response.data);
    //console.log(budgetsRef.current[rowIndex].commitedCosts);

    //let newBudgets = [...budgetsRef.current];
    //setBudgets(newBudgets);
     
    })
    .catch(e => {
      console.log(e);
    });
  
  }

  const retrieveTotalDirectCosts = (rowIndex) => {
 
    const id = budgetsRef.current[rowIndex].projectId;
    const costCode = budgetsRef.current[rowIndex].costCode;
  
    DirectCostDataService.getDTotalOfCostCodes (id,costCode)
    .then((response) => {
    
       //setCurrentDirectCost(response.data);
    budgetsRef.current[rowIndex].directCosts=response.data;
    //setCurrentResponse(response.data);
    //setCurrentDirectCost(currentResponse);
    //console.log(budgetsRef.current[rowIndex].directCosts);

    //let newBudgets = [...budgetsRef.current];
    //setBudgets(newBudgets);
     
    })
    .catch(e => {
      console.log(e);
    });
  
  }

  

  const columns = useMemo(
    () => [
      {
        Header: "Cost Code",
        accessor: "costCode",
      },
      {
        Header: "Estimated Budget Amount(Rs.)",
        accessor: "estimatedBudget",
      },
      {
        Header: "Direct Costs(Rs.)",
        accessor: "directCosts",
        Cell: (props) => {
          const rowIdx = props.row.id;
         retrieveTotalDirectCosts(rowIdx);
         return(

            <div>
{budgetsRef.current[rowIdx].directCosts}
            </div>
           
          );
        },
      },
      {
        Header: "Commited Costs(Rs.)",
        accessor: "commitedCosts",
        Cell: (props) => {
          const rowIdx = props.row.id;
         retrieveTotalCommitedCosts(rowIdx);
         return(

            // {currentDirectCost}
          
            <div>
 {budgetsRef.current[rowIdx].commitedCosts}
            </div>
           
          );
        },
      },
      {
        Header: "Total Cost(Rs.)",
        accessor: "currentBudget",
      },
      {
        Header: "Revised Budget Amount(Rs.)",
        accessor: "revisedBudget",
      },
    
      {
        Header: "↑↓",
        accessor: "overUnder",
        Cell: (props) => {
          return (
            <div>🟢</div>
          );
        },
      },
      {
        Header: "",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openBudget(rowIdx)}>
              <EditIcon></EditIcon>&nbsp;&nbsp;
              </span>

              <span onClick={() => deleteBudget(rowIdx)}>
                <DeleteIcon></DeleteIcon>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: budgets
  });

  return (
    <div>
        <h3> BUDGET</h3>
               <h6>Setup and Manage a Comprehensive Budget throughout the Life Cycle of the Project.</h6> 
                <hr /><br />
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
               <div className="form-row mt-3">
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"/addbudget/"+id}>{/*check this again*/}
                + Create
                </Link>
                <Link className="btn btn-primary mr-2" to={"/adddirectcost/"+1}>
                Import 
                </Link>
                <Link className="btn btn-primary mr-2" to={"/adddirectcost/"+1}>
                Export 
                </Link>
                </div>
      <div className="form-group col-md-4">
        <div className="input-group mb-3">
         {/* <input
            type="text"
            className="form-control"
            placeholder="Search by cost code"
            value={searchCostCode}
            onChange={onChangeSearchCostCode}
          />*/}
           <select 
                
                id="costCode"
           
                
                name="costCode"
                className="form-control"
            placeholder="Search by cost code"
            value={searchCostCode}
            onChange={onChangeSearchCostCode}
              >
              <option  selected value="">All</option>
                <option>001-Maintenance Equipment</option>
                <option>002-Sodding</option>
                <option>003-Visual Display Boards</option>
                <option>004-Site Clearing</option>
                <option>005-Dewatering</option>
             
              </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCostCode}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead className="Table-header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  </div>
  </div>
  );
};

export default BudgetList;
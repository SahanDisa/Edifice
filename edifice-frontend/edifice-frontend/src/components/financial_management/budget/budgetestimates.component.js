import React, { useState, useEffect, useMemo, useRef } from "react";
import BudgetDataService from "./../../../services/budget.service";
import { useTable } from "react-table";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


const BudgetEstimates = (props) => {
  const {id}= useParams();
  const [budgets, setBudgets] = useState([]);
  const [searchCostCode, setSearchCostCode] = useState("");
  const budgetsRef = useRef();
  budgetsRef.current = budgets;
  const [published, setPublished] = useState(false);

  useEffect(() => {
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

    BudgetDataService.budgetUnpublished(id)
    .then((response) => {
        
      //props.history.push("/directcost/"+id);

      let newBudgets = [...budgetsRef.current];
      newBudgets.splice(rowIndex, 1);

      setBudgets(newBudgets);
      retrieveBudgets();
    })
    .catch((e) => {
      console.log(e);
    });

  };

 /* const deleteBudget = (rowIndex) => {
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
  };*/

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Cost Code",
        accessor: "costCode",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Estimated Budget Amount(Rs.)",
        accessor: "estimatedBudget",
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
        
       
     <h3>BUDGET ESTIMATES</h3>
      <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">
                Home
              </Link>
              <Link color="inherit" to={"/projectmanagementhome/"+id}>
                App Dashboard
              </Link>
              <Link color="textPrimary" to={"/budgetestimates/"+id} aria-current="page">
               Budget Estimates
              </Link>
            </Breadcrumbs>
                <hr /><br />
                
               <div className="form-row mt-3">
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"/addbudget/"+id}>{/*check this again*/}
            <AddIcon/>&nbsp;Create
                </Link>
                <Link className="btn btn-import mr-2" to={"/bexcelupload/"+id}>
                < PublishIcon/>&nbsp;Import
                </Link>
                {/*<Link className="btn btn-primary mr-2" to={"/adddirectcost/"+1}>
                Export 
                </Link>*/}
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
                <option  selected value="">All Budget Estimates</option>
             {budgets &&
                budgets.map((budget, index) => (
                <option
                    value={budget.costCode}
                    onChange={onChangeSearchCostCode}
                    key={index}
                >
                {/* unit data */}
                {budget.costCode}
                </option>
                ))}

                {/*<option></option>
                <option>001-Maintenance Equipment</option>
                <option>002-Sodding</option>
                <option>003-Visual Display Boards</option>
                <option>004-Site Clearing</option>
                <option>005-Dewatering</option>*/}
             
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

export default BudgetEstimates; 
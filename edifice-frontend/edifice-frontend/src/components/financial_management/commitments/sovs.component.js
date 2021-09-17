import React, { useState, useEffect, useMemo, useRef } from "react";
import SovDataService from "./../../../services/sov.service";
import { useTable } from "react-table";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BudgetDataService from "./../../../services/budget.service";
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const SovList = (props) => {
  const {id}= useParams();
  const {pid}= useParams();
  const [sovs, setSovs] = useState([]);
  const [searchCostCode, setSearchCostCode] = useState("");
  const sovsRef = useRef();
  const [budgets, setBudgets] = useState([]);

  //const {cId}= useParams();
 
  sovsRef.current = sovs;

  useEffect(() => {
    retrieveSovs();
    retrieveBudgets();   
  }, []);

  const retrieveBudgets = () => {
    
    BudgetDataService.getAll(pid)//passing project id as id
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const onChangeSearchCostCode = (e) => {
    const searchCostCode = e.target.value;
    setSearchCostCode(searchCostCode);
  };

  const retrieveSovs = () => {
    SovDataService.getAll(id)
      .then((response) => {
        setSovs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveSovs();
  };

  const findByCostCode = () => {
    SovDataService.findByCostCode(id,searchCostCode)
      .then((response) => {
        setSovs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openSov = (rowIndex) => {
    const id = sovsRef.current[rowIndex].id;

    props.history.push("/viewsinglesov/" + id);
  };



  const deleteSov = (rowIndex) => {
    const id = sovsRef.current[rowIndex].id;

    SovDataService.remove(id)
      .then((response) => {
        //props.history.push("/sov/1");

        let newSovs = [...sovsRef.current];
        newSovs.splice(rowIndex, 1);

        setSovs(newSovs);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
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
        Header: "Amount",
        accessor: "amount",
      },
      /*{
        Header: "Billed To Date",
        accessor: "billedToDate",
      },
      {
        Header: "Ammount Remaining",
        accessor: "ammountRemaining",
      },*/
      {
        Header: "",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openSov(rowIdx)}>
              <EditIcon></EditIcon>&nbsp;&nbsp;
              </span>

              <span onClick={() => deleteSov(rowIdx)}>
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
    data: sovs,
  });

  return (
    <div>
        <h3> Schedule of Values</h3>
         <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/home">
                Home
              </Link>
              <Link color="inherit" to={"/projectmanagementhome/"+pid}>
                App Dashboard
              </Link>
              <Link color="textPrimary" to={"/viewsov/"+pid+"/"+id} aria-current="page">
               Schedule of Values
              </Link>
            </Breadcrumbs><hr />
               <div className="form-row mt-3">
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"/addsov/"+pid+"/"+id}>
                <AddIcon/>Create
                </Link>
                <Link className="btn btn-import mr-2" to={"/adddirectcost/"+1}>
                <PublishIcon/>&nbsp;Import
                </Link>
                {/*<Link className="btn btn-primary mr-2" to={"/adddirectcost/"+1}>
                Export
  </Link>*/}
                </div>
      <div className="form-group col-md-4">
        <div className="input-group mb-3">
          <select
            type="text"
            className="form-control"
            placeholder="Search by cost code"
            value={searchCostCode}
            onChange={onChangeSearchCostCode}
          >
            <option  selected value="">All</option>
             {budgets &&
                budgets.map((budget, index) => (
                <option
                    //value={budget.id}
                    //onChange={onChangeSearchCostCode}
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

export default SovList;
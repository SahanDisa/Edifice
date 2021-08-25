import React, { useState, useEffect, useMemo, useRef } from "react";
import SovDataService from "./../../../services/sov.service";
import { useTable } from "react-table";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const SovList = (props) => {
  const {id}= useParams();
  const [sovs, setSovs] = useState([]);
  const [searchCostCode, setSearchCostCode] = useState("");
  const sovsRef = useRef();

  //const {cId}= useParams();
 
  sovsRef.current = sovs;

  useEffect(() => {
    retrieveSovs();
  }, []);

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
    SovDataService.findByCostCode(searchCostCode)
      .then((response) => {
        setSovs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openSov = (rowIndex) => {
    const id = sovsRef.current[rowIndex].id;

    props.history.push("/viewsov/" + id);
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
        Header: "Ammount",
        accessor: "ammount",
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
               <h6>Track all direct costs that are not associated with commitments.</h6><hr />
               <div className="form-row mt-3">
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"/addsov/"+id}>
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
          <input
            type="text"
            className="form-control"
            placeholder="Search by cost code"
            value={searchCostCode}
            onChange={onChangeSearchCostCode}
          />
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
          <thead>
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
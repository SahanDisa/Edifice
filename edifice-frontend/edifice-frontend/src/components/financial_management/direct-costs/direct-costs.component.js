import React, { useState, useEffect, useMemo, useRef } from "react";
import DirectCostDataService from "./../../../services/directcost.service";
import { useTable } from "react-table";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const DirectCostList = (props) => {
  const {id}= useParams();
  const [directcosts, setDirectCosts] = useState([]);
  const [searchCostCode, setSearchCostCode] = useState("");
  const directcostsRef = useRef();

  
 
  directcostsRef.current = directcosts;

  useEffect(() => {
    retrieveDirectCosts();
  }, []);


  const onChangeSearchCostCode = (e) => {
    const searchCostCode = e.target.value;
    setSearchCostCode(searchCostCode);
  };

  const retrieveDirectCosts = () => {
    
    DirectCostDataService.getAll(id)//passing project id as id
      .then((response) => {
        setDirectCosts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveDirectCosts();
  };

  const findByCostCode = () => {
  

    DirectCostDataService.findByCostCode(id,searchCostCode)//searchCostCode
      .then((response) => {
        setDirectCosts(response.data);
        console.log("clicked")
        console.log(response.data)
        console.log(searchCostCode)
        console.log(id)
        console.log(response)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openDirectCost = (rowIndex) => {
    const id = directcostsRef.current[rowIndex].id;
    //const projectId = directcostsRef.current[rowIndex].projectId;

    props.history.push("/viewdirectcost/"+ id);//here id is direct cost id
  };



  const deleteDirectCost = (rowIndex) => {
    const id = directcostsRef.current[rowIndex].id;
    //const projectId = directcostsRef.current[rowIndex].projectId;

    DirectCostDataService.remove(id)
      .then((response) => {
        
        //props.history.push("/directcost/"+id);

        let newDirectCosts = [...directcostsRef.current];
        newDirectCosts.splice(rowIndex, 1);

        setDirectCosts(newDirectCosts);
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
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Vendor",
        accessor: "vendor",
      },
      {
        Header: "Employee",
        accessor: "employee",
      },

  {
        Header: "Received Date",
        accessor: "receivedDate",
      },
      
  {
    Header: "Paid Date",
    accessor: "paidDate",
  },
  {
        Header: "Ammount (Rs.)",
        accessor: "ammount",
      },
      {
        Header: "",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openDirectCost(rowIdx)}>
              <EditIcon></EditIcon>&nbsp;&nbsp;
              </span>

              <span onClick={() => deleteDirectCost(rowIdx)}>
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
    data: directcosts,
  });

  return (
    <div>
        <h3> DIRECT COSTS</h3>
               <h6>Track all direct costs that are not associated with commitments.</h6><hr />
               <div className="form-row mt-3">
            <div className="col-md-12 text-right">
            <Link className="btn btn-primary mr-2" to={"/adddirectcost/"+id}>{/*check this again*/}
                + Create
                </Link>
                
              <input type="file"/>
              <button className="btn btn-primary mr-2">
             Import
            </button>
              {/*  <Link className="btn btn-primary mr-2" to={"/adddirectcost/"+1}>
                Import 
  </Link>*/}
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
                <option>010-Maintenance Equipment</option>
                <option>924-Sodding</option>
                <option>100-Visual Display Boards</option>
                <option>230-Site Clearing</option>
                <option>240-Dewatering</option>
             
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

export default DirectCostList;
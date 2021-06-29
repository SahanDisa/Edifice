import SettingsIcon from '@material-ui/icons/Settings';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';


const Budget = () => {

  const options = {
    page: 1,
    sizePerPage: 5,
    nextPageText: '>',
    prePageText: '<',
    showTotal: true
  };

const data = [
    {id: 1, name: 'Bid Day', check:<input type='checkbox' /> ,delete:''},
    {id: 2, name: 'Breaking Ground', check: <input type='checkbox' />,delete:''},
    {id: 3, name: 'Contract Awarded', check: <input type='checkbox' />,delete:''}
  ];
  const columns = [{
    dataField: 'description',
    text: 'Description',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }, {
    dataField: 'category',
    text: 'Category',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'amount',
    text: 'Original Budget Amount',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: 'mod',
    text: 'Budget Modifications',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: 'co',
    text: 'Approved COs',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: 'revised',
    text: 'Revised Budget',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: 'changes',
    text: 'Pending Budget Changes',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: '',
    text: 'Projected Budget',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: 'commited',
    text: 'Commited Costs',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  },
  {
    dataField: 'direct',
    text: 'Directed Costs',
    headerStyle: (column, colIndex) => {
        return { width: '8.75%', textAlign: 'center' };}
  }
];

    return (
        <div>
          <ul class="nav nav-tabs">
           <a href="/settings"> <SettingsIcon /></a><h3> BUDGET </h3>
            
       
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Budget</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/changeHistory">Change History</a>
            </li>
          </ul>
          <br />
          <form>
          <div className="form-row">
          <a href="" type="submit" className="btn btn-success">Export</a>
          </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="">View</label>
                <select className="form-control" required>
                  <option value="Standardized" selected>Standardized</option>
                  <option value="Template1">Template11</option>
                  <option value="Template2">Template12</option>
                  <option value="Template3">Template13</option>
                  <option value="Template4">Template14</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Snapshot</label>
                <select className="form-control" required>
                  <option value="current" selected>current</option>
                  <option value="custom">custom</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Group</label>
                <select className="form-control" required>
                  <option value="xxx" selected>xxx</option>
                  <option value="yyy">yyy</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Filter</label>
                <select className="form-control" required>
                  <option value="Add Filter" selected>Add Filter</option>
                  <option value="yyy">yyy</option>
                </select>
              </div>
            </div>
            <div className="">
       
            </div>
            
          </form>

          <BootstrapTable 
                hover
                keyField='id'
                data={ data }
                columns={ columns } 
                pagination={ paginationFactory(options) }
 
            />
          

        </div>
    );
};

export default Budget;
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

const Roles = () => {

const options = {
    page: 1,
    sizePerPage: 5,
    nextPageText: '>',
    prePageText: '<',
    showTotal: true
  };

const data = [
    {id: 1, role: 'Project Manager', type:'' ,group:'',check:'',portfolio:'',delete:''},
    {id: 2, role: 'Project Engineer', type:'' ,group:'',check:'',portfolio:'',delete:''},
    {id: 3, role: 'Architect', type:'' ,group:'',check:'',portfolio:'',delete:''},
    {id: 4, role: 'Asistant Project Manager', type:'' ,group:'',check:'',portfolio:'',delete:''}
   
  ];
  const columns = [{
    dataField: 'id',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }, {
    dataField: 'role',
    text: 'Role',
    headerStyle: (column, colIndex) => {
        return { width: '70%', textAlign: 'center' };}
  }, {
    dataField: 'type',
    text: 'Type',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'group',
    text: 'Group',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'check',
    text: 'Add to Project Dashboard',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'portfolio',
    text: 'Portfolio Filter',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '20%', textAlign: 'center' };}
  }];

        return (
          <div>
            <h2 className="Table-header">Roles</h2>
            <hr />
             
            <BootstrapTable 
                hover
                keyField='id'
                data={ data }
                columns={ columns } 
                pagination={ paginationFactory(options) }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
 
            />
          </div>
        );
    };

export default Roles;
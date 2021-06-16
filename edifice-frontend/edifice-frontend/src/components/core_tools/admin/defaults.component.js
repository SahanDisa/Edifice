import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';


const options = {
    page: 1,
    sizePerPage: 5,
    nextPageText: '>',
    prePageText: '<',
    showTotal: true
  };

const data = [
    {name: 'Bidding', bid:'Yes' ,project:'2',delete:<button>Delete</button>},
    {name: 'Course of Construction', bid:'No' ,project:'3',delete:<button>Delete</button>},
    {name: 'Post Construction', bid:'No' ,project:'4',delete:<button>Delete</button>}
  ];
  const columns = [{
    dataField: 'name',
    text: 'Name',
    headerStyle: (column, colIndex) => {
        return { width: '60%', textAlign: 'center' };}
  }, {
    dataField: 'bid',
    text: 'Bidding Stage?',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'center' };}
  }, {
    dataField: 'project',
    text: 'Projects',
    headerStyle: (column, colIndex) => {
        return { width: '15%', textAlign: 'center' };}
  },
  {
    dataField: 'delete',
    text: '',
    headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
  }];


class Defaults extends Component {
    render() {
        return (
          <div className="Defaults">
            <h2 className="Table-header">Defaults</h2>
            <hr />
            <p><b>Default Project Settings</b></p>
            <hr />
            <p>Include store number and designated market area <input type='checkbox' /></p>
            <hr />
            <p>Prevent overbilling on all projects <input type='checkbox' /></p>
            <hr />
            <p></p>
            <hr />
            {/*<Form>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Include store number and designated market area" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Prevent overbilling on all projects" />
                </Form.Group>
            </Form>*/}

            <p><b>Project Stages</b></p>
           
             
            <BootstrapTable 
                hover
                keyField='id'
                data={ data }
                columns={ columns } 
                pagination={ paginationFactory(options) }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
 
            />

            <p><b>Project Types</b></p>
            <p><button>Edit</button> Civil</p>
            <hr />
            <p><button>Edit</button> Commercial</p>
            <hr />
            <p><button>Edit</button> Education</p>
            <hr />
            <p><button>Edit</button> Healthcare</p>
            <hr />
            <form>
                            <input type='text' placeholder='Add Type'/>
                            <button>Add Type</button>
            </form><br />

            <p><b>Departments</b></p>
            <p><button>Edit</button> Technology Services</p>
            <hr />
            <p><button>Edit</button> Sales and Marketing</p>
            <hr />
            <p><button>Edit</button> Purchasing</p>
            <hr />
            <p><button>Edit</button> Finance</p>
            <hr />
            <form>
                            <input type='text' placeholder='Add Departments'/>
                            <button>Add Departments</button>
            </form><br />

            <p><b>Bid Type Settings</b></p>
            <p><button>Edit</button> Competitive</p>
            <hr />
            <p><button>Edit</button> Negotiated</p>
            <hr />
            <p><button>Edit</button> Not Applicable</p>
            <hr />
            <form>
                            <input type='text' placeholder='Add Departments'/>
                            <button>Add Departments</button>
            </form><br />

            <p><b>Owner Type Settings</b></p>
            <form>
                            <input type='text' placeholder='Add Owner Type'/>
                            <button>Add Owner Type</button>
            </form><br />

            <button>Save Changes</button>

          </div>
        );
      }
    }

export default Defaults;
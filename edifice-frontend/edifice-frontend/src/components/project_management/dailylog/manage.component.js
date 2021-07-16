import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const data = [
    {edit: <a href="/managesmeetings/update" className="btn btn-success">Edit</a>, logdate: "15/07/202", weatherlog: "Normal", sky: "Cloudy", temp: "28", precipitation: "Light Rain", wind:"calm"}
  ];
const columns = [
    {
      dataField: 'edit',
      text: '',
      headerStyle: (column, colIndex) => {
          return { width: '5%', textAlign: 'center' };}
    }, {
      dataField: 'logdate',
      text: 'Log Date',
      headerStyle: (column, colIndex) => {
      return { width: '15%', textAlign: 'center' };}
    }, {
      dataField: 'weatherlog',
      text: 'Weather Log',
      headerStyle: (column, colIndex) => {
          return { width: '10%', textAlign: 'center' };}
    }, {
      dataField: 'sky',
      text: 'Sky',
      headerStyle: (column, colIndex) => {
      return { width: '10%', textAlign: 'center' };}
    }, {
      dataField: 'temp',
      text: 'Temp',
      headerStyle: (column, colIndex) => {
      return { width: '10%', textAlign: 'center' };}
    }, {
        dataField: 'precipitation',
        text: 'Precipitation',
        headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
    },
    // {
    //   dataField: 'calamity',
    //   text: 'Calamity',
    //   headerStyle: (column, colIndex) => {
    //       return { width: '10%', textAlign: 'center' };}
    // },
    {
      dataField: 'wind',
      text: 'Wind',
      headerStyle: (column, colIndex) => {
      return { width: '10%', textAlign: 'center' };}
    }, {
        dataField: 'comment',
        text: 'Comment',
        headerStyle: (column, colIndex) => {
        return { width: '10%', textAlign: 'center' };}
    },
    // {
    //     dataField: 'atatchment',
    //     text: 'Attachment',
    //     headerStyle: (column, colIndex) => {
    //         return { width: '10%', textAlign: 'center' };}
    // }
];

class DlConfiguration extends Component {

    render() {
        return (
            <div className="">
                <h2>Manage Daily Logs</h2><hr/>
                <div className="mb-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6"></div>
                            <div className="form-group col-md-2 form-check">
                                <input type="checkbox" className="form-check-input mt-3" id="singledayCheck" required/>
                                <label htmlFor="singledayCheck" className="form-check-label">View Single Day</label>
                            </div>
                            <div className="form-group col-md-2 form-check">
                                <input type="checkbox" className="form-check-input mt-3" id="multipledayCheck" required/>
                                <label htmlFor="multipledayCheck" className="form-check-label">View Multiple Days</label>
                            </div>
                            <div className="form-group col-md-2 form-check">
                                <a className="btn btn-primary" href="">Export PDF</a>
                            </div>
                        </div>
                        <div className="form-row mt-3">
                            <div className="form-group col-md-4">
                                <input className="form-control" type="text" />
                            </div>
                            <a href="#" className="btn btn-dark mb-3 mr-3">Search</a>
                            <a href="#" className="mt-1">Clear</a>
                        </div>
                    </form>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Weather log</button>
                            </h2>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="col-md-12 text-right mb-2">
                                        <a href="#" className="btn btn-primary">+ Create a Daily Log Item</a>
                                    </div>
                                    <BootstrapTable 
                                        hover
                                        keyField='location'
                                        data={ data }
                                        columns={ columns } 
                                        cellEdit={ false }
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Man-power Log</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body"></div>
                            </div>
                        </div>  
                    </div>
                    <a className="btn btn-primary mt-2" href="">+ Daily Log Category</a>           
                </div>
                <a className="btn btn-success" href="/projectmanagementhome/1">Done</a>           
            </div>
        );
    }

}

export default DlConfiguration;
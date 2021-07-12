import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class PrimeContracts extends Component {
  render() {
    return (
        <div>
       <h3> PRIME CONTRACT </h3><hr/>
        <ul class="nav nav-tabs">
            <li class="nav-item">  
            <a class="nav-link active" id="generalprime" data-toggle="tab" href="#status" aria-controls="status" aria-selected="true">General</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="sov" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">SoV</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="emails" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">Emails</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="paymentsreceived" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">Payments Received</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="invoices" data-toggle="tab" href="#comment" aria-controls="comment" aria-selected="true">Invoices</a>
            </li>
        </ul><br />
          <div class="tab-content" id="myTabContent">
              
              <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="general">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Vortex properties</button>  <div class="col-md-12 text-right"><a href="#" className="btn btn-dark mb-3">Edit</a></div>
                      </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="">
                          
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
              
              <div class="tab-pane fade" id="comment" role="tabpanel" aria-labelledby="recyclebin">
                
              </div>

            </div>

         
        </div>
    );
    }

}

export default PrimeContracts;


const PrimeContracts = () => {

    return (
        <div>
        <h2>New Prime Contract</h2><hr/>
        <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">General</a>
            </li>
          </ul><br />
        <div className="mb-3">
          <h5>General Information</h5>
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">#</label> 
              </div>
              <div className="form-group col-md-2">
              <input className="form-control" type="number" min="0" required/>
              </div>
              <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Title</label>
              </div>
              <div className="form-group col-md-2">
              <input className="form-control" type="text" required/>
              </div>
              </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Owner/Client</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Initialized" selected>Vartex Properties</option>
                  <option value="In progress">###</option>
                  <option value="Ready for review">###</option>
                  <option value="Closed">###</option>
                  <option value="Void">###</option>
                </select>
              </div> <div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
                <label htmlFor="">Contractor</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Assignee 1" selected>Member 1</option>
                  <option value="Assignee 2">Member 2</option>
                </select>
              </div>
              </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Architect/Engineer</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Assignee 1" selected>Member 1</option>
                  <option value="Assignee 2">Member 2</option>
                </select>
              </div>
              </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Status</label>
              </div>
              <div className="form-group col-md-2">
              <select className="form-control" required>
                  <option value="Assignee 1" selected>Draft</option>
                  <option value="Assignee 2">Member 2</option>
                </select>
              </div><div className="form-group col-md-2"></div>
              <div className="form-group col-md-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="privateCheck" />
                <label htmlFor="privateCheck" className="form-check-label">Executed</label>
              </div></div>
              </div><hr />
              <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="">Private</label>
              </div>
              <div className="form-group col-md-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="privateCheck" />
                <label htmlFor="privateCheck" className="form-check-label">Make this visible only to administrators.</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="privateCheck" />
                <label htmlFor="privateCheck" className="form-check-label">Allow these users to see SOV items.</label>
              </div>
              <select className="form-control" required>
                  <option value="Category 1">Select a person</option>
                  <option value="Category 2">Member 1</option>
                </select>
              
                </div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Default Retainange:</label>
              </div>
              <div className="form-group col-md-1">
              <input className="form-control" type="textarea"/>
              </div><div className="form-group col-md-1">%</div>
            </div><hr />
            <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="">Description</label>
              </div>
              <div className="form-group col-md-4">
              <input className="form-control" type="textarea"/>
              </div>
            </div><hr />
            <div className="form-row">
            <a href="/prime-contracts" type="submit" className="btn btn-success">Add Prime Contract</a>
            
            </div><br />
          </form>

        </div>
    );


}

export default PrimeContracts;
module.exports = app => {
    const timesheets = require("../controllers/timesheet.controller");
  
    var router = require("express").Router();
  
    // Create a new timesheets
    router.post("/", timesheets.create);
  
    // Retrieve all timesheets
    router.get("/list/:id", timesheets.findAll);
 /* 
    // Retrieve all published workers
    router.get("/published", worker.findAllPublished);
  */
    // Retrieve a single timesheet with id
    router.get("/:id", timesheets.findOne);
 /* 
    // Update a worker with id
    router.put("/:id", worker.update);
  
    // Delete a worker with id
    router.delete("/:id/", worker.delete);
  
    // Delete all workers
    router.delete("/", worker.deleteAll);
  */
    app.use('/api/timesheets', router);
  };
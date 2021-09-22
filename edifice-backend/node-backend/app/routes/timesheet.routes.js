module.exports = app => {
  const timesheets = require("../controllers/timesheet.controller");

  var router = require("express").Router();

  // Create a new timesheets
  router.post("/", timesheets.create);

  // Retrieve all timesheets
  router.get("/list/:id", timesheets.findAll);

  // Retrieve all timesheets for a date
  router.get("/", timesheets.findAllDate);

  // Retrieve a single timesheet with id
  router.get("/:id", timesheets.findOne);

  // Update a timesheet with id
  router.put("/status/:id", timesheets.update);

  //view timesheet approved user 
  router.get("/users/approved", timesheets.getUserDetails);

  app.use('/api/timesheets', router);
};
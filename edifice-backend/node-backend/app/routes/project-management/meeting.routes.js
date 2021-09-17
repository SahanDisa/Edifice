module.exports = app => {
  const meetings = require("../../controllers/project-management/meeting.controller.js");

  var router = require("express").Router();

  // Create a new meeting
  router.post("/", meetings.create);

  // Update a meeting with id
  router.put("/update/:id", meetings.update);

  // Delete a meeting with id
  router.put("/delete/:id/", meetings.delete);

  // Retrieve a single meeting with id
  router.get("/:id", meetings.findOne);

  // Retrieve all meetings
  router.get("/", meetings.findAll);

  app.use('/api/meetings', router);
};
module.exports = app => {
  const meetings = require("../../controllers/project-management/meeting.controller.js");

  var router = require("express").Router();

  // Create a new meeting
  router.post("/", meetings.create);

  // Retrieve all meetings
  router.get("/", meetings.findAll);

  // Retrieve a single meeting with id
  router.get("/:id", meetings.findOne);

  // Update a meeting with id
  router.put("/:id", meetings.update);

  // Delete a meeting with id
  router.delete("/:id/", meetings.delete);

  app.use('/api/meetings', router);
};
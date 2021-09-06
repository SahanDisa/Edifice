module.exports = app => {
  const meetingcategory = require("./../../controllers/project-management/meetingcategory.controller.js");

  var router = require("express").Router();

  // Create a new meetingcategory
  router.post("/", meetingcategory.create);

  // Retrieve all meetingcategory
  router.get("/", meetingcategory.findAll);

  // Retrieve a single meetingcategory with id
  router.get("/:id", meetingcategory.findOne);

  // Update a meetingcategory with id
  router.put("/:id", meetingcategory.update);

  // Delete a meetingcategory with id
  router.delete("/:id/", meetingcategory.delete);

  app.use('/api/meetingcategory', router);
};
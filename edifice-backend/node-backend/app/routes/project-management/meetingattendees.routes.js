module.exports = app => {
    const meetingattendees = require("../../controllers/project-management/meetingattendees.controller.js");
  
    var router = require("express").Router();
  
    // Create a new meeting
    router.post("/", meetingattendees.create);
  
    // Update a meeting with id
    router.put("/update/:id", meetingattendees.update);
  
    // Retrieve all meetingattendees
    router.get("/", meetingattendees.findAll);
  
    app.use('/api/meetingattendees', router);
  };
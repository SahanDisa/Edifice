module.exports = app => {
    const meetingagenda = require("../../controllers/project-management/meetingagenda.controller.js");
  
    var router = require("express").Router();
  
    // Create a new meeting
    router.post("/", meetingagenda.create);
  
    // Update a meeting with id
    router.put("/update/:id", meetingagenda.update);
  
    // Delete a meeting with id
    router.put("/delete/:id/", meetingagenda.delete);
  
    // Retrieve a single meeting with id
    router.get("/:id", meetingagenda.findOne);
  
    // Retrieve all meetingagenda
    router.get("/", meetingagenda.findAll);
  
    app.use('/api/meetingagenda', router);
  };
module.exports = app => {
    const meetingcategory = require("../../controllers/project-management/meetingcategory.controller.js");
  
    var router = require("express").Router();
  
    // Create a new meeting
    router.post("/", meetingcategory.create);
  
    // Update a meeting with id
    router.put("/update/:id", meetingcategory.update);
  
    // Delete a meeting with id
    router.put("/delete/:id/", meetingcategory.delete);
  
    // Retrieve a single meeting with id
    router.get("/:id", meetingcategory.findOne);
  
    // Retrieve all meetingcategory
    router.get("/all/:id", meetingcategory.findAll);
  
    app.use('/api/projects/meetingcategory', router);
  };
module.exports = app => {
    const meetingcategory = require("../../controllers/project-management/meetingcategory.controller");
  
    var router = require("express").Router();
  
    // Create a new Punch List Type
    router.post("/", meetingcategory.create);
  
    // Retrieve all Punch List Type for a project
    router.get("/:id", meetingcategory.findAll);

    // Retrive single Punch List Type for a project
    router.get("/single/:id", meetingcategory.findOne);
  
    app.use('/api/projects/meetingcategory', router);
};
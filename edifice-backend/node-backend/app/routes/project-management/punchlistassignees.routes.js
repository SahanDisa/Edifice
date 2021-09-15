module.exports = app => {
    const plassignees = require("../../controllers/project-management/punchlistassignees.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Punch List Type
    router.post("/", plassignees.create);
  
    // Retrieve all Punch List Type for a project
    router.get("/:id", plassignees.findAll);

    // Retrive single Punch List Type for a project
    router.get("/single/:id", plassignees.findOne);
  
    app.use('/api/projects/plassignees', router);
};
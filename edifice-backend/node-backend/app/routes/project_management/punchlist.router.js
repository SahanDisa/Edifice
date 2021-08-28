module.exports = app => {
    const punchlist = require("../../controllers/project_management/punchlist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new meeting
    router.post("/", punchlist.create);

    // Retrieve all punchlist for a project
    router.get("/:id", punchlist.findAll);

    // Retrieve a single meeting with id
    router.get("/single/:id", punchlist.findOne);
  
    app.use('/api/projects/punchlist', router);
  };
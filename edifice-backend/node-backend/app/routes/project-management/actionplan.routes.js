module.exports = app => {
    const actionplan = require("./../../controllers/project-management/actionplan.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", actionplan.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", actionplan.findAllSearch);
  
    // Retrieve a single Drawing with id
    router.get("/:id", actionplan.findOne);

    // project action plans
    router.get("/action/:id",actionplan.findAll);

    // get approved actions
    router.get("/approved/:id",actionplan.findAllApproved);

    // Update a Drawing with id
    router.put("/:id", actionplan.update);
    
    // Delete a Drawing with id
    router.delete("/:id/", actionplan.delete);
  
    app.use('/api/projects/actionplan', router);
  };
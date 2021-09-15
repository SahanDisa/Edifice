module.exports = app => {
    const actionplan = require("./../../controllers/project-management/actionplan.controller");
  
    var router = require("express").Router();
  
    // Create a new Action Plan
    router.post("/", actionplan.create);

    // Get all type Action plans
    router.get("/type/:id", actionplan.findAlltype);
  
    // Retrieve all Action Plans for a project
    router.get("/list/:id", actionplan.findAllSearch);
  
    // Retrieve a single Action Plan with id
    router.get("/:id", actionplan.findOne);

    // get approved actions
    router.get("/approved/:id",actionplan.findAllApproved);

    // Update a Action Plan with id
    router.put("/:id", actionplan.update);
    
    // Delete a Action Plan with id
    router.delete("/:id/", actionplan.delete);
  
    app.use('/api/projects/actionplan', router);
  };
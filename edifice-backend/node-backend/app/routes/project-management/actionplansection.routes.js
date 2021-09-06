module.exports = app => {
    const actionplansection = require("./../../controllers/project-management/actionplansection.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", actionplansection.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", actionplansection.findAllSearch);
  
    // Retrieve a single Drawing with id
    router.get("/:id", actionplansection.findOne);

    // project action plans
    router.get("/actionsection/:id",actionplansection.findAll);

    // Update a Drawing with id
    router.put("/:id", actionplansection.update);
    
    // Delete a Drawing with id
    router.delete("/:id/", actionplansection.delete);
  
    app.use('/api/projects/actionplansection', router);
  };
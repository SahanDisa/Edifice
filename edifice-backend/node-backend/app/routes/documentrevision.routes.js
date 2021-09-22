module.exports = app => {
    const documentrevision = require("./../controllers/documentrevision.controller");
  
    var router = require("express").Router();
  
    // Create a new DocumentRevision
    router.post("/", documentrevision.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", documentrevision.findAll);
  
    // Retrieve a single DocumentRevision with id
    router.get("/:id", documentrevision.findOne);

    // Get all category drawings
    router.get("/cat/:id", documentrevision.findAllCat);

    // Update a DocumentRevision with id
    router.put("/:id", documentrevision.update);
    
    // Delete a DocumentRevision with id
    router.delete("/:id/", documentrevision.delete);

  
    app.use('/api/projects/documentrevision', router);
  };
module.exports = app => {
    const drawrevision = require("./../controllers/drawrevision.controller");
  
    var router = require("express").Router();
  
    // Create a new DrawRevision
    router.post("/", drawrevision.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", drawrevision.findAll);
  
    // Retrieve a single DrawRevision with id
    router.get("/:id", drawrevision.findOne);

    // Get all category drawings
    router.get("/cat/:id", drawrevision.findAllCat);

    // Update a DrawRevision with id
    router.put("/:id", drawrevision.update);
    
    // Delete a DrawRevision with id
    router.delete("/:id/", drawrevision.delete);

  
    app.use('/api/projects/drawrevision', router);
  };
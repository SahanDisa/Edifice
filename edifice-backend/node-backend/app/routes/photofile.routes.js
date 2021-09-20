module.exports = app => {
    const projects = require("./../controllers/photo.controller");
  
    var router = require("express").Router();
  
    // Create a new Photo
    router.post("/", projects.create);
  
    // Retrieve all Photos
    router.get("/", projects.findAll);
  
    // Retrieve a single Photo with id
    router.get("/:id", projects.findOne);

    // Get all category drawings
    router.get("/cat/:id", projects.findAllCat);
  
    // Update a Photo with id
    router.put("/:id", projects.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", projects.delete);
  
    // Delete all Tutorials
    router.delete("/", projects.deleteAll);

    // // Find Last Project
    // router.get("/app/last/",projects.findLastOne);
  
    app.use('/api/photofile', router);
  };
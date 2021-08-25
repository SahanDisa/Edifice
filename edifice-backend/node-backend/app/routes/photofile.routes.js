module.exports = app => {
    const projects = require("./../controllers/photo.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", projects.create);
  
    // Retrieve all Tutorials
    router.get("/", projects.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", projects.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", projects.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", projects.delete);
  
    // Delete all Tutorials
    router.delete("/", projects.deleteAll);

    // // Find Last Project
    // router.get("/app/last/",projects.findLastOne);
  
    app.use('/api/photofile', router);
  };
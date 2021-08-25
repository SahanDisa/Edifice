module.exports = app => {
    const milestone = require("./../controllers/milestone.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", milestone.create);
  
    // Retrieve all Tutorials
    router.get("/:id", milestone.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/single/:id", milestone.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", milestone.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", milestone.delete);
  
    app.use('/api/projects/milestone', router);
  };
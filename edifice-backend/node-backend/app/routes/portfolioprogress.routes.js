module.exports = app => {
    const portfolioprogress = require("./../controllers/portfolioprogress.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", portfolioprogress.create);
  
    // Retrieve all Tutorials
    router.get("/:id", portfolioprogress.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/single/:id", portfolioprogress.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", portfolioprogress.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", portfolioprogress.delete);
  
    app.use('/api/projects/portfolioprogress', router);
  };
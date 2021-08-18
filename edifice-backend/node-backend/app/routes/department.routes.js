module.exports = app => {
    const departments = require("./../controllers/department.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", departments.create);
  
    // Retrieve all Tutorials
    router.get("/:id", departments.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/single/:id", departments.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", departments.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", departments.delete);
  
    app.use('/api/projects/department', router);
  };
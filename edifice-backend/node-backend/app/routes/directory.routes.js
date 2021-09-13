module.exports = app => {
    const directory = require("./../controllers/directory.controller");
  
    var router = require("express").Router();
  
    // Create a new Directory
    router.post("/", directory.create);
  
    // Retrieve all Directory for a project
    router.get("/:id", directory.findAll);

    // Retrive single Directory for a project
    router.get("/single/:id", directory.findOne);

    // Get recent lists
    router.get("/list/recent", directory.recent);
    
    // Update a Directory with id
    router.put("/:id", directory.update);
  
    // Delete a Directory with id
    router.delete("/:id/", directory.delete);
  
    app.use('/api/projects/directory', router);
};
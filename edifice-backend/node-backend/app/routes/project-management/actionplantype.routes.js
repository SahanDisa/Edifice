module.exports = app => {
    const actionplantype = require("./../../controllers/project-management/actionplantype.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", actionplantype.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", actionplantype.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/single/:id", actionplantype.findOne);

    // Update a Drawing with id
    router.put("/:id", actionplantype.update);
    
    // Delete a Drawing with id
    router.delete("/:id/", actionplantype.delete);
  
    app.use('/api/projects/actionplantype', router);
  };
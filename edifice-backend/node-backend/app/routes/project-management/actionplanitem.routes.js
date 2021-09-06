module.exports = app => {
    const actionplanitem = require("./../../controllers/project-management/actionplanitem.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", actionplanitem.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", actionplanitem.findAllSearch);
  
    // Retrieve a single Drawing with id
    router.get("/:id", actionplanitem.findOne);

    // project action plans
    router.get("/actionitem/:id",actionplanitem.findAll);

    // get completed action items
    router.get("/completed/:id",actionplanitem.findAllCompleted);

    // Update a Drawing with id
    router.put("/:id", actionplanitem.update);
    
    // Delete a Drawing with id
    router.delete("/:id/", actionplanitem.delete);
  
    app.use('/api/projects/actionplanitem', router);
  };
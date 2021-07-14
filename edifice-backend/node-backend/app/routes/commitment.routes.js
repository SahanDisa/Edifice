module.exports = app => {
    const commitment = require("./../controllers/commitment.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", commitment.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", commitment.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", commitment.findOne);
  
    app.use('/api/projects/commitment', router);
  };
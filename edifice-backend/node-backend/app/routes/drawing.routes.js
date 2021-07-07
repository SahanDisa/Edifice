module.exports = app => {
    const drawing = require("./../controllers/drawing.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", drawing.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", drawing.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", drawing.findOne);
  
    app.use('/api/projects/drawing', router);
  };
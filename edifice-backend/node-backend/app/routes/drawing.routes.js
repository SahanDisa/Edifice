module.exports = app => {
    const drawing = require("./../controllers/drawing.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", drawing.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", drawing.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", drawing.findOne);

    // Get all category drawings
    router.get("/cat/:id", drawing.findAllCat);

    //Get Complete/Pending/Incomplete drawings
    router.get("/status/:pid/:status",drawing.findAllbyStatus);

    // Update a Drawing with id
    router.put("/:id", drawing.update);
    
    // Delete a Drawing with id
    router.delete("/:id/", drawing.delete);

    router.get("/maxversion/version", drawing.findMaxVersion);
  
    app.use('/api/projects/drawing', router);
  };
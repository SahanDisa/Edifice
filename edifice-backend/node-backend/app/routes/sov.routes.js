module.exports = app => {
    const sov = require("./../controllers/sov.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", sov.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", sov.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", sov.findOne);
  
    app.use('/api/commitments/sov', router);
  };
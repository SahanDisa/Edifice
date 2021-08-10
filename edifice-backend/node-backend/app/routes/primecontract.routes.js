module.exports = app => {
    const primecontract = require("./../controllers/primecontract.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", primecontract.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", primecontract.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", primecontract.findOne);
  
    app.use('/api/projects/primecontract', router);
  };
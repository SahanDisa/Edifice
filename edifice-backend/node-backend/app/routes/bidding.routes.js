module.exports = app => {
    const bidding = require("./../controllers/bidding.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", bidding.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", bidding.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", bidding.findOne);
  
    app.use('/api/projects/bidding', router);
  };
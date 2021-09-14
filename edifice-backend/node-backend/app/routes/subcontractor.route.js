module.exports = app => {
    const sub = require("./../controllers/subcontractor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Subcontractor
    router.post("/", sub.create);
  
    // Retrieve all Subcontractors
    router.get("/", sub.findAll);
  
    // Retrieve a single Subcontractor with id
    router.get("/:id", sub.findOne);
  
    // Update a Subcontractor with id
    router.put("/:id", sub.update);
  
    // Delete a Subcontractor with id
    router.delete("/:id/", sub.delete);
  
    // Delete all Subcontractors
    router.delete("/", sub.deleteAll);

    // Find Last Subcontractor
    router.get("/app/last/",sub.findLastOne);
  
    app.use('/api/subcontractor', router);
  };
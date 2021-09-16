module.exports = app => {
    const crews = require("./../controllers/crew.controller.js");
  
    var router = require("express").Router();
  
    // Create a new crew
    router.post("/", crews.create);
  
    // Retrieve all crews
    router.get("/list/:id", crews.findAll);
/*  
    // Retrieve all published crews
    router.get("/published", crew.findAllPublished);
  */
    // Retrieve a single crew with id
    // router.get("/:id", crew.findOne);
 /* 
    // Update a crew with id
    router.put("/:id", crew.update);
  
    // Delete a crew with id
    router.delete("/:id/", crew.delete);
  
    // Delete all crews
    router.delete("/", crew.deleteAll);
  */
    app.use('/api/crews', router);
  };
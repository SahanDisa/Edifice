module.exports = app => {
    const designation = require("./../controllers/designation.controller.js");
  
    var router = require("express").Router();

    // Create a new job role
    router.post("/", designation.create);
  
    // Retrieve all job roles
    router.get("/", designation.findAllDesignations);
  
    // Retrieve a single job roles with id
    router.get("/:id", designation.findOne);
  
    app.use('/api/designation', router);
  };
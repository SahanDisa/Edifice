module.exports = app => {
    const designation = require("./../controllers/designation.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all job roles
    router.get("/", designation.findAll);
  
    // Retrieve a single job roles with id
    router.get("/:id", designation.findOne);
  
    app.use('/api/designation', router);
  };
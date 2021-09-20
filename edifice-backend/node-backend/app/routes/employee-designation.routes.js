module.exports = app => {
    const empdes = require("./../controllers/employee-designation.controller.js");
  
    var router = require("express").Router();
  
    // Create a new empdes
    router.post("/", empdes.create);
  
    // Retrieve all empdes
    router.get("/", empdes.findAll);
  
    // Retrieve des for given emp
    router.get("/:employeeid", empdes.findDesforEmployee);
  
    app.use('/api/empdes', router);
  };
module.exports = app => {
    const plphotos = require("../../controllers/project-management/punchlistphotos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new pl photos
    router.post("/", plphotos.create);
  
    // Retrieve all pl photoss
    router.get("/:id", plphotos.findAll);
  
    // Retrieve a single pl photos with id
    router.get("/single/:id", plphotos.findOne);
  
    app.use('/api/projects/plphotos', router);
  };
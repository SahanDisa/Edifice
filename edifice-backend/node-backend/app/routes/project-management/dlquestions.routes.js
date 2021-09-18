module.exports = app => {
    const dlquestions = require("../../controllers/project-management/dlquestions.controller");
  
    var router = require("express").Router();
  
    // Create a new daily log - accident
    router.post("/", dlquestions.create);
  
    // Retrieve all daily log - accident for a project
    router.get("/:id", dlquestions.findAll);
  
    app.use('/api/projects/dlquestions', router);
};
module.exports = app => {
    const dailylogtypes = require("../../controllers/project-management/dailylogtypes.controller");
  
    var router = require("express").Router();
  
    // Create a new Punch List Type
    router.post("/", dailylogtypes.create);
  
    // Retrieve all Punch List Type for a project
    router.get("/:id", dailylogtypes.findAll);

    // Retrive single Punch List Type for a project
    router.get("/single/:id", dailylogtypes.findOne);
  
    app.use('/api/projects/dailylogtypes', router);
};
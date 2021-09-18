module.exports = app => {
    const pltypes = require("../../controllers/project-management/punchlisttypes.controller");
  
    var router = require("express").Router();
  
    // Create a new Punch List Type
    router.post("/", pltypes.create);
  
    // Retrieve all Punch List Type for a project
    router.get("/:id", pltypes.findAll);

    // Retrive single Punch List Type for a project
    router.get("/single/:id", pltypes.findOne);
  
    app.use('/api/projects/pltypes', router);
};
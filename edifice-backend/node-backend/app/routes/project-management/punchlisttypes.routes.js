module.exports = app => {
    const punchlisttypes = require("../../controllers/project-management/punchlisttypes.controller");
  
    var router = require("express").Router();
  
    // Create a new Punch List Type
    router.post("/", punchlisttypes.create);
  
    // Retrieve all Punch List Type for a project
    router.get("/:id", punchlisttypes.findAll);

    // Retrive single Punch List Type for a project
    router.get("/single/:id", punchlisttypes.findOne);
  
    app.use('/api/projects/punchlisttypes', router);
};
module.exports = app => {
    const punchlist = require("../../controllers/project-management/punchlisttypes.controller");
  
    var router = require("express").Router();
  
    // Create a new Punch List Type
    router.post("/", punchlist.create);
  
    // Retrieve all Punch List Type for a project
    router.get("/:id", punchlist.findAll);

    // Retrive single Punch List Type for a project
    router.get("/single/:id", punchlist.findOne);
  
    app.use('/api/projects/punchlisttypes', router);
};
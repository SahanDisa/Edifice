module.exports = app => {
    const directory = require("./../controllers/directory.controller");
  
    var router = require("express").Router();
  
    // Create a new Album
    router.post("/", directory.create);
  
    // Retrieve all Albums for a project
    router.get("/:id", directory.findAll);

    // Retrive single Directory for a project
    router.get("/single/:id", directory.findOne);
  
    app.use('/api/projects/directory', router);
};
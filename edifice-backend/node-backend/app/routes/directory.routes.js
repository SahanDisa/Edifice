module.exports = app => {
    const drawingcategory = require("./../controllers/directory.controller");
  
    var router = require("express").Router();
  
    // Create a new Album
    router.post("/", drawingcategory.create);
  
    // Retrieve all Albums for a project
    router.get("/:id", drawingcategory.findAll);
  
    app.use('/api/projects/directory', router);
};
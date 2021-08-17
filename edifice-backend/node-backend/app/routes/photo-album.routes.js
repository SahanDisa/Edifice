module.exports = app => {
    const drawingcategory = require("./../controllers/photo-album.controller");
  
    var router = require("express").Router();
  
    // Create a new Album
    router.post("/", drawingcategory.create);
  
    // Retrieve all Albums for a project
    router.get("/:id", drawingcategory.findAll);
  
    app.use('/api/projects/photo-album', router);
};
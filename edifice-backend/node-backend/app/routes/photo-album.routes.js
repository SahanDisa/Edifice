module.exports = app => {
    const album = require("./../controllers/photo-album.controller");
  
    var router = require("express").Router();
  
    // Create a new Album
    router.post("/", album.create);
  
    // Retrieve all Albums for a project
    router.get("/:id", album.findAll);

    // Get a single album
    router.get("/single/:id", album.findOne);

    // Get recent data
    router.get("/data/recent", album.recent);

    // Update a Tutorial with id
    router.put("/:id", album.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", album.delete);
  
    app.use('/api/projects/photo-album', router);
};
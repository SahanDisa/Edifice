module.exports = app => {
    const photos = require("./../controllers/photo.controller");
  
    var router = require("express").Router();
  
    // Create a new Photo
    router.post("/", photos.create);
  
    // Retrieve all Photos
    router.get("/", photos.findAll);

    // Retrive project photos
    router.get("/list/:id",photos.getAll);
  
    // Retrieve a single Photo with id
    router.get("/:id", photos.findOne);

    // Get all category drawings
    router.get("/cat/:id", photos.findAllCat);
  
    // Update a Photo with id
    router.put("/:id", photos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", photos.delete);
  
    // Delete all Tutorials
    router.delete("/", photos.deleteAll);

    // // Find Last Project
    // router.get("/app/last/",photos.findLastOne);
  
    app.use('/api/photofile', router);
  };
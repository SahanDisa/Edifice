module.exports = app => {
    const drawingcategory = require("./../controllers/drawing-category.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing Category
    router.post("/", drawingcategory.create);
  
    // Retrieve all Drawings category for a project
    router.get("/:id", drawingcategory.findAll);

    // Retrive single Drawing Category for a project
    router.get("/single/:id", drawingcategory.findOne);

    // Get recent data
    router.get("/data/recent", drawingcategory.recent);

    // Update a Drawing Category with id
    router.put("/:id", drawingcategory.update);
  
    // Delete a DrawingCategory with id
    router.delete("/:id/", drawingcategory.delete);
  
    app.use('/api/projects/drawing-category', router);
};
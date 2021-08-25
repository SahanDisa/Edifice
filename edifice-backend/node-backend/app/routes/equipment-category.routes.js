module.exports = app => {
    const categorys = require("./../controllers/equipment-category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new equipment
    router.post("/", categorys.create);
 
    // Retrieve all equipments for a project
    router.get("/list/:id", categorys.findAll);
 /*  
    // Retrieve all published equipments
    router.get("/published", equipment.findAllPublished);
  
    // Retrieve a single equipment with id
    router.get("/:id", equipment.findOne);
  
    // Update a equipment with id
    router.put("/:id", equipment.update);
  
    // Delete a equipment with id
    router.delete("/:id/", equipment.delete);
  
    // Delete all equipments
    router.delete("/", equipment.deleteAll);
  */
    app.use('/api/categorys', router);
  };
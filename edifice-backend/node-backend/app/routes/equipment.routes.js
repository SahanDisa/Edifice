 module.exports = app => {
    const equipments = require("./../controllers/equipment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new equipment
    router.post("/", equipments.create);
  
    // Retrieve all equipments
    router.get("/list/", equipments.findAll);
/*  
    // Retrieve all published equipments
    router.get("/published", equipment.findAllPublished);
 */ 
    // Retrieve a single equipment with id
    router.get("/:id", equipments.findOne);
  
    // Update a equipment with id
    router.put("/update/:id", equipments.update);
  
    // Delete a equipment with id
    router.delete("/delete/:id/", equipments.delete);
 /* 
    // Delete all equipments
    router.delete("/", equipment.deleteAll);
  */
    app.use('/api/equipments', router);
  };
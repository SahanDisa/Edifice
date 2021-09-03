module.exports = app => {
    const vendor = require("./../controllers/vendor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Vendor
    router.post("/", vendor.create);
  
    // Retrieve all Vendor
    router.get("/", vendor.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", vendor.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", vendor.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", vendor.delete);
  
    // Delete all Tutorials
    router.delete("/", vendor.deleteAll);

    // Find Last Vendor
    router.get("/app/last/",vendor.findLastOne);
  
    app.use('/api/vendor', router);
  };
module.exports = app => {
    const sov = require("./../controllers/sov.controller");
  
    var router = require("express").Router();
  
    // Create a new sov
    router.post("/", sov.create);
  
    // Retrieve all sovs for a commitment
    router.get("/list/:id", sov.findAll);
  
    // Retrieve a single sov with id
    router.get("/:id", sov.findOne);

    
        // Update a sov with id
  router.put("/:id", sov.update);

  // Delete a sov with id
  router.delete("/:id", sov.delete);

  router.get("/list/:id/:costCode", sov.findByCostCode);
  
    app.use('/api/commitments/sov', router);
  };
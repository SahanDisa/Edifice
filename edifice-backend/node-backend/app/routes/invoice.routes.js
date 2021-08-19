module.exports = app => {
    const invoice = require("./../controllers/invoice.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", invoice.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", invoice.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", invoice.findOne);

    // Update a Commitment with id
  router.put("/:id", invoice.update);

  // Delete a Commitment with id
  router.delete("/:id", invoice.delete);
  
    app.use('/api/commitments/invoice', router);
  };
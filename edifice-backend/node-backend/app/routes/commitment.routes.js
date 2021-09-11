module.exports = app => {
    const commitment = require("./../controllers/commitment.controller");
  
    var router = require("express").Router();
  
    // Create a new Commitment
    router.post("/", commitment.create);
  
    // Retrieve all Commitments for a project
    router.get("/list/:id", commitment.findAll);
  
    // Retrieve a single Commitment with id
    router.get("/:id", commitment.findOne);

     // Update a Commitment with id
  router.put("/:id", commitment.update);

  // Delete a Commitment with id
  router.delete("/:id", commitment.delete);

  router.get("/list/:id/:ongoing/status",commitment.findByStatusOngoing);

  router.get("/list/:id/:contractCompany", commitment.findByContractCompany);

  
  
    app.use('/api/projects/commitment', router);
  };
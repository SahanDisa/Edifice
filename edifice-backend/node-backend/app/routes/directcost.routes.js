module.exports = app => {
    const directcost = require("./../controllers/directcost.controller");
  
    var router = require("express").Router();
  
    // Create a new Budget
    router.post("/", directcost.create);
  
    // Retrieve all Budgets for a project
    router.get("/list/:id", directcost.findAll);
  
    // Retrieve a single Budget with id
    router.get("/:id", directcost.findOne);

        // Update a Commitment with id
  router.put("/:id", directcost.update);

  // Delete a Commitment with id
  router.delete("/:id", directcost.delete);
  
    app.use('/api/projects/directcost', router);
  };
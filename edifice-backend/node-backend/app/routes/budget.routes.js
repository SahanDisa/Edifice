module.exports = app => {
    const budget = require("./../controllers/budget.controller");
  
    var router = require("express").Router();
  
    // Create a new Budget
    router.post("/", budget.create);
  
    // Retrieve all Budgets for a project
    router.get("/list/:id", budget.findAll);
  
    // Retrieve a single Budget with id
    router.get("/:id", budget.findOne);

 /* Retrieve a single direct cost with id
    router.get("/:projectId/:id", directcost.findOne);*/

        // Update a direct cost with id
        router.put("/:id", budget.update);

        // Delete a direct cost with id
        router.delete("/:id", budget.delete);


  
    app.use('/api/projects/budget', router);
  };
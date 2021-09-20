module.exports = app => {
    const costcode = require("./../controllers/costcode.controller");
  
    var router = require("express").Router();
  
    // Create a new Budget
    router.post("/", costcode.create);
  
    // Retrieve all Budgets for a project
    router.get("/list/:id", costcode.findAll);
    
    // Retrieve a single direct cost with id
    router.get("/:id", costcode.findOne);

        // Update a direct cost with id
  router.put("/:id", costcode.update);

 


    app.use('/api/projects/costcode', router);
  };
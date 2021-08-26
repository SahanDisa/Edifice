module.exports = app => {
    const directcost = require("./../controllers/directcost.controller");
  
    var router = require("express").Router();

    // Create a new direct cost
    router.post("/", directcost.create);
  
    // Retrieve all direct costs for a project
    router.get("/list/:id", directcost.findAll);

     // Retrieve all direct costs for a project
     //router.get("/list/:id?costCode=[keyword]", directcost.findByCode);
     router.get("/list/:id/:costCode", directcost.findByCostCode);
     //router.get("/list/:id?:costCode", directcost.findByCode);
    
    // Retrieve a single direct cost with id
    router.get("/:id", directcost.findOne);

    /* Retrieve a single direct cost with id
    router.get("/:projectId/:id", directcost.findOne);*/

        // Update a direct cost with id
  router.put("/:id", directcost.update);

  // Delete a direct cost with id
  router.delete("/:id", directcost.delete);
  
    app.use('/api/projects/directcost', router);
  };
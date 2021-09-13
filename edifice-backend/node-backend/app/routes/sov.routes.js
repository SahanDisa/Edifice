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

  // get all total sovs of a project
  router.get("/:id/total", sov.getTotalSovs);

  // get total according to cost code
  //router.get("/list/:id/:costCode", directcost.getDTotalOfCostCodes);
  router.get("/:id/:costCode/total", sov.getSTotalOfCostCodes);
  
    app.use('/api/commitments/sov', router);
  };
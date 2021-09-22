module.exports = app => {
    const actionplan = require("./../../controllers/project-management/actionplan.controller");
  
    var router = require("express").Router();
  
    // Create a new Action Plan
    router.post("/", actionplan.create);

    // Update a Action Plan with id
    router.put("/update/:id", actionplan.update);
    
    // Delete a Action Plan with id
    router.put("/delete/:id", actionplan.delete);

    // Search Action Plan
    router.get("/search/:id", actionplan.SearchAll);

    // Retrieve a single punch list with id
    router.get("/single/:id", actionplan.findOne);

    // project action plans
    router.get("/action/:id",actionplan.findAll);

    // Get all type Action plans
    router.get("/type/:id", actionplan.findAlltype);

    // get approved actions
    router.get("/approved/:id",actionplan.findAllApproved);
  
    app.use('/api/projects/actionplan', router);
  };
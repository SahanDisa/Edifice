module.exports = app => {
    const actionplansection = require("./../../controllers/project-management/actionplansection.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", actionplansection.create);
  
    // Update a Drawing with id
    router.put("/update/:id", actionplansection.update);
    
    // Delete a Drawing with id
    router.put("/delete/:id/", actionplansection.delete);
  
    // Retrieve a single Drawing with id
    router.get("/:id", actionplansection.findOne);

    // project action plans
    router.get("/all/:id",actionplansection.findAll);
  
    app.use('/api/projects/actionplansection', router);
  };
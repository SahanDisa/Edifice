module.exports = app => {
    const actionplantype = require("./../../controllers/project-management/actionplantype.controller");
  
    var router = require("express").Router();
  
    // Create a new action plan type
    router.post("/", actionplantype.create);

    // Update a action plan type with id
    router.put("/update/:id", actionplantype.update);
    
    // Delete a action plan type with id
    router.delete("/delete/:id/", actionplantype.delete);

    // Retrieve a single action plan type with id
    router.get("/single/:id", actionplantype.findOne);
  
    // Retrieve all action plan types for a project
    router.get("/all/:id", actionplantype.findAll);
  
    app.use('/api/projects/actionplantype', router);
  };
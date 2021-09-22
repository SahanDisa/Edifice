module.exports = app => {
    const dlgeneral = require("../../controllers/project-management/dlgeneral.controller");
  
    var router = require("express").Router();
  
    // Create a new daily log - accident
    router.post("/", dlgeneral.create);

    // Update a daily log - accident with id
    router.put("/update/:id", dlgeneral.update);
    
    // Delete a daily log - accident with id
    router.put("/delete/:id", dlgeneral.delete);

    // Retrive single daily log - accident for a project
    router.get("/single/:id", dlgeneral.findOne);
  
    // Retrieve all daily log - accident for a project
    router.get("/:id", dlgeneral.findAllweek);

    // Retrieve all daily log - accident for a project
    router.get("/all/:id", dlgeneral.findAll);

    // Retrieve all daily log - accident for a project
    router.get("/today/:id", dlgeneral.findToday);
  
    app.use('/api/projects/dlgeneral', router);
};
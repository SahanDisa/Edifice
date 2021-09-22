module.exports = app => {
    const dlcall = require("../../controllers/project-management/dlcall.controller");
  
    var router = require("express").Router();
  
    // Create a new daily log - accident
    router.post("/", dlcall.create);

    // Update a daily log - accident with id
    router.put("/update/:id", dlcall.update);
    
    // Delete a daily log - accident with id
    router.put("/delete/:id", dlcall.delete);

    // Retrive single daily log - accident for a project
    router.get("/single/:id", dlcall.findOne);
  
    // Retrieve all daily log - accident for a project
    router.get("/:id", dlcall.findAllweek);

    // Retrieve all daily log - accident for a project
    router.get("/all/:id", dlcall.findAll);

    // Retrieve all daily log - accident for a project
    router.get("/today/:id", dlcall.findToday);
  
    app.use('/api/projects/dlcall', router);
};
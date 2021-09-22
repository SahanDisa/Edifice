module.exports = app => {
    const dlaccident = require("../../controllers/project-management/dlaccident.controller");
  
    var router = require("express").Router();
  
    // Create a new daily log - accident
    router.post("/", dlaccident.create);

    // Update a daily log - accident with id
    router.put("/update/:id", dlaccident.update);
    
    // Delete a daily log - accident with id
    router.put("/delete/:id", dlaccident.delete);

    // Retrive single daily log - accident for a project
    router.get("/single/:id", dlaccident.findOne);

    // Retrieve all daily log - accident for a project
    router.get("/list/:id", dlaccident.findAllweek);

    // Retrieve all daily log - accident for a project
    router.get("/list/all/:id", dlaccident.findAll);

    // Retrieve all daily log - accident for a project
    router.get("/today/:id", dlaccident.findToday);
    
    app.use('/api/projects/dlaccident', router);
};
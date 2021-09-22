module.exports = app => {
    const dlweather = require("../../controllers/project-management/dlweather.controller");
  
    var router = require("express").Router();
  
    // Create a new daily log - accident
    router.post("/", dlweather.create);

    // Update a daily log - accident with id
    router.put("/update/:id", dlweather.update);
    
    // Delete a daily log - accident with id
    router.put("/delete/:id", dlweather.delete);

    // Retrive single daily log - accident for a project
    router.get("/single/:id", dlweather.findOne);
  
    // Retrieve all daily log - accident for a project
    router.get("/:id", dlweather.findAllweek);

    // Retrieve all daily log - accident for a project
    router.get("/all/:id", dlweather.findAll);

    // Retrieve all daily log - accident for a project
    router.get("/today/:id", dlweather.findToday);
  
    app.use('/api/projects/dlweather', router);
};
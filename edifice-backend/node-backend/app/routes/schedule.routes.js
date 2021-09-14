module.exports = app => {
    const schedules = require("./../controllers/schedule.controller");
  
    var router = require("express").Router();
  
    // Create a new schedule
    router.post("/", schedules.create);

    // Retrieve all schedule
    router.get("/list/:id", schedules.findAll);

    // Update a schedule with id
    router.put("/:id", schedules.update);

    // Delete a schedule with id
    router.delete("/:id", schedules.delete);
  
    app.use('/api/schedules', router);
  };
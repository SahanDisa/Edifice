module.exports = app => {
  const workedHours = require("./../controllers/worked-hours.controller");

  var router = require("express").Router();

  // Create a new workedHours
  router.post("/", workedHours.create);

  //view timesheet detils 
  router.get("/list/:id", workedHours.getTimesheetDetails);

  // Update a worker with id
  router.put("/:tid/:wid", workedHours.update);
  /*  
      // Retrieve all workedHours
      router.get("/list/", workedHours.findAll);
    
      // Retrieve all published workers
      router.get("/published", worker.findAllPublished);
    
      // Retrieve a single worker with id
      router.get("/:id", worker.findOne);
        
      // Delete a worker with id
      router.delete("/:id/", worker.delete);
    
      // Delete all workers
      router.delete("/", worker.deleteAll);
    */
  app.use('/api/workedHours', router);
};



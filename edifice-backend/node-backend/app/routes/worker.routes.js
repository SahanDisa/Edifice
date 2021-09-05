module.exports = app => {
    const workers = require("./../controllers/worker.controller");
  
    var router = require("express").Router();
  
    // Create a new worker
    router.post("/", workers.create);
  
    // Retrieve all workers
    router.get("/list/", workers.findAll);
/*  
    // Retrieve all published workers
    router.get("/published", worker.findAllPublished);
  
    // Retrieve a single worker with id
    router.get("/:id", worker.findOne);*/
  
    // Update a worker with id
    router.put("/update/:id", workers.update);
  
 /*   // Delete a worker with id
    router.delete("/:id/", worker.delete);
  
    // Delete all workers
    router.delete("/", worker.deleteAll);
  */
    app.use('/api/workers', router);
  };
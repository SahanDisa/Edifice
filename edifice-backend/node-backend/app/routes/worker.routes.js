module.exports = app => {
  const workers = require("./../controllers/worker.controller");

  var router = require("express").Router();

  // Create a new worker
  router.post("/", workers.create);

  // Retrieve all workers
  router.get("/list/", workers.findAll);

  // chedk the worker NIC availability
  router.get("/validNIC", workers.findValidNIC);

  // chedk the worker mobile availability
  router.get("/validMobile", workers.findValidMobile);

  // Update a worker with id
  router.put("/update/:id", workers.update);

  // Delete a worker with id
  router.delete("/delete/:id/", workers.delete);

  /*    // Delete all workers
     router.delete("/", worker.deleteAll);
   */
  app.use('/api/workers', router);
};
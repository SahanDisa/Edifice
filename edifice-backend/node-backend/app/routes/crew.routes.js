module.exports = app => {
  const crews = require("./../controllers/crew.controller.js");

  var router = require("express").Router();

  // Create a new crew
  router.post("/", crews.create);

  // Retrieve all crews
  router.get("/list/:id", crews.findAll);

  // Retrieve all crews for a name
  router.get("/", crews.findAllName);

  // chedk the crew name availability
  router.get("/valid", crews.findValidName);

  // Update a crew with id
  /*     router.put("/:id", crew.update);
    
      // Delete a crew with id
      router.delete("/:id/", crew.delete);
    
      // Delete all crews
      router.delete("/", crew.deleteAll);
    */
  app.use('/api/crews', router);
};
module.exports = app => {
    const punchlist = require("../../controllers/project-management/punchlist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new punch list
    router.post("/", punchlist.create);

    // Retrieve all punchlist for a project
    router.get("/:id", punchlist.findAll);

    // Retrieve a single punch list with id
    router.get("/single/:id", punchlist.findOne);

    // Get all punch list in that type
    router.get("/type/:id", punchlist.findAllintype);

    // Find Last punch list item
    router.get("/last/",punchlist.findLastOne);

    // Update a equipment with id
    router.put("/update/:id", punchlist.update);
  
    app.use('/api/projects/punchlist', router);
  };
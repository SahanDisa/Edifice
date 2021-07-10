module.exports = app => {
    const projectuser = require("./../controllers/projectuser.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", projectuser.create);
  
    // Retrieve all Project Ids for a user
    router.get("/list/:id", projectuser.findAll);
  
    // Retrieve a single project user with id
    router.get("/:id", projectuser.findOne);

    // Retrieve projects of user involved in
    router.get("/detail/:id", projectuser.findProjects);

    // Add projects to users
    router.post("/:id/:pid",projectuser.addProject);
  
    app.use('/api/projects/user', router);
  };
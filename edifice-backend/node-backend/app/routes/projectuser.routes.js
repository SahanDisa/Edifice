module.exports = app => {
    const projectuser = require("./../controllers/projectuser.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", projectuser.create);
  
    // Retrieve all Project Ids for a user
    router.get("/list/:id", projectuser.findAll);
  
    // Retrieve a single project user with id
    router.get("/:id", projectuser.findOne);

    // Retrive users of a particular project
    router.get("/project/:id",projectuser.findProjectUsers);

    // Get Accounts
    router.get("/accounts/list/",projectuser.getAllAccounts);

    // Get users project details as an array
    router.get("/projectdata/user/:id", projectuser.getProjectUserDetails);

    // Get users project details as an array
    router.get("/projectdata/users/search/:id", projectuser.searchUser);

    // Update a Tutorial with id
    router.put("/:id", projectuser.update);
  
    // Delete a Tutorial with id
    router.delete("/:id/", projectuser.delete);
  
    app.use('/api/projects/user', router);
  };
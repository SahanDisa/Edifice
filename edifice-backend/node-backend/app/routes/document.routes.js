module.exports = app => {
    const documents = require("./../controllers/documentfile.controller");
  
    var router = require("express").Router();
  
    // Create a new Doc
    router.post("/", documents.create);
  
    // Retrieve all Doc for a project
    router.get("/list/:id", documents.findAll);
  
    // Retrieve a single Doc with id
    router.get("/:id", documents.findOne);

    // Get all category Docs
    router.get("/cat/:id", documents.findAllCat);

    //Get Complete/Pending/Incomplete drawings
    router.get("/status/:status",documents.findAllbyStatus);

    // Update a Drawing with id
    router.put("/:id", documents.update);
    
    // Delete a Drawing with id
    router.delete("/:id/", documents.delete);

  
    app.use('/api/projects/documents', router);
  };
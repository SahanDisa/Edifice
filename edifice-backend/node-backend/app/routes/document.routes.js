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
  
    app.use('/api/projects/documents', router);
  };
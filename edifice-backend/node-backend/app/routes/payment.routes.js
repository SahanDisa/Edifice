module.exports = app => {
    const payment= require("./../controllers/payment.controller");
  
    var router = require("express").Router();
  
    // Create a new Drawing
    router.post("/", payment.create);
  
    // Retrieve all Drawings for a project
    router.get("/list/:id", payment.findAll);
  
    // Retrieve a single Drawing with id
    router.get("/:id", payment.findOne);
  
    app.use('/api/commitments/payment', router);
  };
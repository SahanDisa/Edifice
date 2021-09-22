module.exports = app => {
    const actionplanitem = require("./../../controllers/project-management/actionplanitem.controller");
  
    var router = require("express").Router();
  
    // Create a new Action plan item
    router.post("/", actionplanitem.create);

    // Update a Action plan item with id
    router.put("/update/:id", actionplanitem.update);
    
    // Delete a Action plan item with id
    router.put("/delete/:id", actionplanitem.delete);
  
    // Retrieve a single Action plan item with id
    router.get("/:id", actionplanitem.findOne);

    // project action plans
    router.get("/all/:id",actionplanitem.findAll);

    // get completed action items
    router.get("/completed/:id",actionplanitem.findAllCompleted);

    // project action plans
    router.get("/section/:id",actionplansection.findSection);
  
    app.use('/api/projects/actionplanitem', router);
  };
module.exports = app => {
    const directcost = require("./../controllers/directcost.controller");
    const excelController = require("./../controllers/excel.controller");
  
    var router = require("express").Router();



  //export
  router.get("/:id/download", excelController.download);

 
  
    app.use('/api/excel', router);
  };
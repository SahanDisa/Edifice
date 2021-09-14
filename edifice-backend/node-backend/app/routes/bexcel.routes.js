/*module.exports = app => {
    const directcost = require("./../controllers/directcost.controller");
    const excelController = require("./../controllers/excel.controller");
  
    var router = require("express").Router();



  //export
  router.get("/:id/download", excelController.download);

 
  
    app.use('/api/excel', router);
  };*/

  const express = require("express");
const router = express.Router();
const budget = require("./../controllers/budget.controller");
const bexcelController = require("./../controllers/bexcel.controller");
const upload = require("./../middleware/uploadExcel");

let routes = (app) => {
  router.post("/upload", upload.single("file"), bexcelController.upload);
  router.get("/budgets", bexcelController.getBudgets);
  //router.get("/download", bexcelController.download);

  app.use("/api/excel", router);
};

module.exports = routes;
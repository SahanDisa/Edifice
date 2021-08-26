module.exports = app => {
    const reports = require("./../controllers/report.controller.js");

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/report", reports.generate);

}
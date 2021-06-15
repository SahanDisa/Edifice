const express = require("express");
const router = express.Router();
const controller = require("./../controllers/document.controller.js");

let routes = (app) => {
  router.post("/api/upload", controller.upload);
  router.get("/api/files", controller.getListFiles);
  router.get("/api/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;
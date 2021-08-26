const express = require("express");
const router = express.Router();
const controller = require("./../controllers/uploadphoto.controller.js");

let routes = (app) => {
  router.post("/api/imageupload", controller.upload);
  router.get("/api/photos", controller.getListFiles);
  router.get("/api/photos/:name", controller.download);

  app.use(router);
};

module.exports = routes;
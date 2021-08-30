const express = require("express");
const router = express.Router();
const controller = require("./../controllers/uploadphoto.controller.js");

let routes = (app) => {
  router.post("/api/imageupload", controller.upload);
  router.post("/api/imagecapture", controller.capture);
  router.get("/api/photos", controller.getListFiles);
  router.get("/api/capture", controller.getListCapture);
  router.get("/api/photos/:name", controller.download);
  router.get("/api/capture/:name", controller.getCapture);

  app.use(router);
};

module.exports = routes;
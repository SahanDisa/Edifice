const express = require("express");
const router = express.Router();
const homeController = require("./../controllers/home.js");
const uploadController = require("./../controllers/imageupload.controller.js");
const upload = require("./../middleware/imageUpload.js");

let routes = (app) => {
  router.get("/api/photo/", homeController.getHome);

  router.post("/api/photo/upload", upload.single("file"), uploadController.uploadFiles);

  app.use(router);
};

module.exports = routes;
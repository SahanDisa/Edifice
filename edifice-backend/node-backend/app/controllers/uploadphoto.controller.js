const uploadFile = require("./../middleware/uploadImage");
const uploadCapture = require("./../middleware/uploadCapture");
const fs = require('fs');
const baseUrl = "http://localhost:8080/api/photos/";
const baseCaptureUrl = "http://localhost:8080/api/capture/";

const upload = async (req, res) => {
  try {
    //console.log(req.title);
    console.log("In image upload");
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 5MB!",
      });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const capture = async (req, res) => {
  try {
    //console.log(req.title);
    console.log("In image capture upload");
    await uploadCapture(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 5MB!",
      });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/photos/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    
    res.status(200).send(fileInfos);
  });
};

const getListCapture = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/capture";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseCaptureUrl + file,
      });
    });
    
    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/photos/";
  res.sendFile(directoryPath+fileName);
};

const getCapture = (req, res) => {
  
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/capture/";
  res.sendFile(directoryPath+fileName);
};

module.exports = {
  upload,
  capture,
  getListFiles,
  getListCapture,
  download,
  getCapture
};
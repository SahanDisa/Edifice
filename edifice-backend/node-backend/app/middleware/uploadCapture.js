const util = require("util");
const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/capture/");
  },
  filename: (req, file, cb) => {
    console.log("capture the name");
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadCapture = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadCaptureMiddleware = util.promisify(uploadCapture);
module.exports = uploadCaptureMiddleware;
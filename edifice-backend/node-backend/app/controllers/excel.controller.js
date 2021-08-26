const db = require("./../models/index");
const Project = db.projects;
const DirectCost = db.directcosts;

const readXlsxFile = require("read-excel-file/node");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      let directcosts = [];

      rows.forEach((row) => {
        let directcost = {
          id: row[0],
          costCode: row[1],
          description: row[2],
          category: row[3],
          vendor: row[4],
          employee: row[5],
          receivedDate: row[6],
          paidDate: row[7],
          ammount: row[8],
        };

        directcosts.push(directcost);
      });

      DirectCost.bulkCreate(directcosts)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getDirectCosts = (req, res) => {
  DirectCost.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = {
  upload,
  getDirectCosts,
};

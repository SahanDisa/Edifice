const db = require("./../models/index.js");
const Project = db.projects;
const Budget = db.budgets;

const readXlsxFile = require("read-excel-file/node");
const excel = require("exceljs");

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

      let budgets = [];

      rows.forEach((row) => {
        let budget = {
          //id: row[0],
          costCode: row[0],
          description: row[1],
          date: row[2],
          estimatedBudget: row[3],
          projectId:row[4],
        };

        budgets.push(budget);
      });

      Budget.bulkCreate(budgets)
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

const getBudgets = (req, res) => {
  Budget.findAll()
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
/*------------------------------------------------------------------------------------------------------------------------------ */



/*------------------------------------------------------------------------------------------------------------------------------ */

module.exports = {
  upload,
  //download,
  getBudgets,
};

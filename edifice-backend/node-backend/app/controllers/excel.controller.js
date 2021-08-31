const db = require("./../models/index");
const Project = db.projects;
const DirectCost = db.directcosts;

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

/*------------------------------------------------------------------------------------------------------------------------------ */
const download = (req, res) => {
  const id = req.params.id;
  DirectCost.findAll({ where: {
    projectId: id
  
  }}).then((objs) => {
    let directcosts = [];

    objs.forEach((obj) => {
      directcosts.push({
        id: obj.id,
        costCode:  obj.costCode,
        description:  obj.description,
        category:  obj.category,
        vendor:  obj.vendor,
        employee:  obj.employee,
        receivedDate:  obj.receivedDate,
        paidDate:  obj.paidDate,
        amount:  obj.amount
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("DirectCost");

    worksheet.columns = [
      { header: "Id", key: "id", width: 5 },
      { header: "Cost Code", key: "costCode", width: 25 },
      { header: "Description", key: "description", width: 25 },
      { header: "Category", key: "category", width: 10 },
      { header: "Vendor", key: "vendor", width: 10 },
      { header: "Employee", key: "employee", width: 10 },
      { header: "Received Date", key: "receivedDate", width: 10 },
      { header: "Paid Date", key: "paidDate", width: 10 },
      { header: "Amount", key: "amount", width: 10 },
    ];

    // Add Array Rows
    worksheet.addRows(directcosts);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "directcosts.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
};


/*------------------------------------------------------------------------------------------------------------------------------ */

module.exports = {
  upload,
  download,
  getDirectCosts,
};

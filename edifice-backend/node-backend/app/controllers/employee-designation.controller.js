const db = require("../models/index.js");
const EmployeeDesignation = db.employeedesignation;
const Op = db.Sequelize.Op;

// create a empdes
exports.create = (req, res) => {
    // Validate request
    if (!req.body.employeeid && !req.body.designationid && !req.body.designation) {
      res.status(400).send({
        message: "Assigning incorrect! Check employeeid and designationid!"
      });
      return;
    }
  
    // Create a ProjectUser
    const empdes = {
        employeeid: req.body.employeeid,
        designationid: req.body.designationid,
        designation: req.body.designation
    };
  
    // Save ProjectUser in the database
    EmployeeDesignation.create(empdes)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the employeedesignations."
        });
      });
};

// Get drawings for a given project
exports.findAll = (req, res) => {

    EmployeeDesignation.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving EmployeeDesignations"
        });
    });  
};

//Find the designations of a single guy
exports.findDesforEmployee = (req, res) => {
    const id = req.params.employeeid;

    EmployeeDesignation.findAll({
        attributes: ['designation'],
        where: {
            employeeid: id
          }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Employee designations for id=" + id
        });
    });  
};


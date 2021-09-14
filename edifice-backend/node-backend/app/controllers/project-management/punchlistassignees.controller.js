const db = require("../../models/index.js");
const PLAssignees = db.plassignees;
const Op = db.Sequelize.Op;

// create a new punch list types
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Punch List Types
    const pla = {
        name: req.body.name,
        role: req.body.role,
        punchlistNo: req.body.punchlistNo
    };
    // Save Punch List Type in the database
    PLAssignees.create(pla)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the punch list types."
        });
    });
};

// Get punch list types for a given project
exports.findAll = (req, res) => {
    const id = req.params.id;
    PLAssignees.findAll({ where: {
        punchlistNo: id
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Project Punch List Types with id=" + id
        });
      });  
  };

// Find a single punch list by Id
exports.findOne = (req, res) => {
    const id = req.params.id;
    PLAssignees.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
    res.status(500).send({
            message: "Error retrieving Punch List Types with id=" + id
        });
    });  
};
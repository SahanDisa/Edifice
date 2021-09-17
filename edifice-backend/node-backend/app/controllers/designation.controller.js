const db = require("./../models/index.js");
const Designation = db.designations;
const Op = db.Sequelize.Op;

// Retrieve all designations from the database.
exports.findAll = (req, res) => {
    Designation.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving job roles."
        });
      });
};

// Find a single sub with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Designation.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Designation with id=" + id
        });
      });  
};

const db = require("./../models/index.js");
const Equipment = db.equipments;
const Op = db.Sequelize.Op;

// Create and Save a new equipment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a equipment
  const equipment = {
    code: req.body.code,
    date: req.body.date,
    condition: req.body.condition,
    equipmentCategoryId: req.body.category,
    description: req.body.description,
    projectId: req.body.projectId
  };

  // Save equipment in the database
  Equipment.create(equipment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the equipment."
      });
    });
};

// Retrieve all equipments
exports.findAll = (req, res) => {


  Equipment.findAll({
    where: {
      isDeleted: 0
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

// Find a single equipment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;


  // db.sequelize.query(
  //   'SELECT equipments.code,equipments.date,equipments.condition,equipments.description,equipments.equipmentCategoryId,equipments.projectId,projects.id FROM equipments LEFT JOIN projects WHERE equipments.code=:id',
  //   { replacements: { id: req.params.id }, type: db.sequelize.QueryTypes.SELECT })

  Equipment.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving equipment with id=" + id
      });
    });
};

// Update a equipment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Equipment.update(req.body, {
    where: { code: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "equipment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update equipment with id=${id}. Maybe equipment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating equipment with id=" + id
      });
    });
};

// Delete a equipment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Equipment.update({ isDeleted: 1 }, {
    where: { code: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "equipment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete equipment with id=${id}. Maybe equipment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete equipment with id=" + id
      });
    });
};

exports.getAllProjects = (req, res) => {

  db.sequelize.query(
    'SELECT projects.id,projects.title from projects',
    { replacements: {}, type: db.sequelize.QueryTypes.SELECT })
    .then(data => {
      res.send(data);
    })
}
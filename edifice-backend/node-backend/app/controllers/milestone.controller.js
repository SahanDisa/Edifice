const db = require("./../models/index.js");
const Milestone = db.milestones;
const Op = db.Sequelize.Op;

// Create and Save a new Milestone 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.description) {
    res.status(400).send({
      message: "Milestone content can't be empty!"
    });
    return;
  }

  // Create a Milestone
  const milestone = {
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    projectId: req.body.projectId
  }

  // Save Milestone in the database
  Milestone.create(milestone)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Milestone."
      });
    });
};

// Retrieve all Departments from the database for a certain project.
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    Milestone.findAll({ where: {
      projectId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Project Departments with id=" + id
        });
      });  
  };

// Find a single Milestone with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Milestone.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Milestone with id=" + id
        });
      });  
};

// Update a Milestone by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Milestone.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Milestone was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Milestone with id=${id}. Maybe Milestone was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Milestone with id=" + id
        });
      });
};

// Delete a Milestone with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Milestone.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Milestone was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Milestone with id=${id}. Maybe Milestone was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Milestone with id=" + id
        });
      });
};

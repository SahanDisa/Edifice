const db = require("./../models/index.js");
const Progress = db.portfolioprogress;
const Op = db.Sequelize.Op;

// Create and Save a new Progress 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Progress Point Time content can't be empty!"
    });
    return;
  }

  // Create a Progress
  const milestone = {
    name: req.body.name,
    progress: req.body.progress,
    projectId: req.body.projectId,
  }

  // Save Progress in the database
  Progress.create(milestone)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Progress."
      });
    });
};

// Retrieve all Departments from the database for a certain project.
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    Progress.findAll({ where: {
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

// Find a single Progress with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Progress.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Progress with id=" + id
        });
      });  
};

// Update a Progress by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Progress.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Progress was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Progress with id=${id}. Maybe Progress was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Progress with id=" + id
        });
      });
};

// Delete a Progress with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Progress.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Progress was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Progress with id=${id}. Maybe Progress was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Progress with id=" + id
        });
      });
};

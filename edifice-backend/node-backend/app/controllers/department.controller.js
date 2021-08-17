const db = require("./../models/index.js");
const Department = db.departments;
const Op = db.Sequelize.Op;

// Create and Save a new Department 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Department content can't be empty!"
    });
    return;
  }

  // Create a Department
  const department = {
    title: req.body.title,
    description: req.body.description,
    purpose: req.body.purpose,
    projectId: req.body.projectId
  }

  // Save Department in the database
  Department.create(department)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Department."
      });
    });
};

// Retrieve all Departments from the database for a certain project.
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    Department.findAll({ where: {
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

// Find a single Department with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Project.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Department with id=" + id
        });
      });  
};

// Update a Department by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Department.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Department was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Department with id=${id}. Maybe Department was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Department with id=" + id
        });
      });
};

// Delete a Department with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Department.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Department was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Department with id=${id}. Maybe Department was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Department with id=" + id
        });
      });
};

const db = require("./../models/index");
const Project = db.projects;
const DrawingCategory = db.drawingcategory;

// create a new drawing category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Project
  const drawingcategory = {
    title: req.body.title,
    description: req.body.description,
    projectId: req.body.projectId,
  };

  // Save Project in the database
  DrawingCategory.create(drawingcategory)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};
// Get drawings category for a given project
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    DrawingCategory.findAll({ where: {
      projectId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Project Drawings Ctaegory with id=" + id
        });
      });  
  };

//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  DrawingCategory.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Drawing Category with id=" + id
      });
    });  
};


// Update a DrawingCategory by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  DrawingCategory.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DrawingCategory was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update DrawingCategory with id=${id}. Maybe DrawingCategory was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating DrawingCategory with id=" + id
      });
    });
};

// Delete a DrawingCategory with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DrawingCategory.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DrawingCategory was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete DrawingCategory with id=${id}. Maybe DrawingCategory was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete DrawingCategory with id=" + id
      });
    });
};

// Find recent drawing category
exports.recent = (req, res) => {
  const id = req.params.id;

  DrawingCategory.findAll({order: [['id', 'DESC']], limit: 5})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving recent drawingcategory"
      });
    });  
};


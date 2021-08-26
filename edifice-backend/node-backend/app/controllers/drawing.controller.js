const db = require("./../models/index");
const Drawing = db.drawings;

// create a drawing
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Drawing
  const drawing = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    version: req.body.version,
    status: req.body.status,
    projectId: req.body.projectId,
  };

  // Save Drawing in the database
  Drawing.create(drawing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Drawing."
      });
    });
};

// Get drawings for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  Drawing.findAll({ where: {
    projectId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Drawing Drawings with id=" + id
      });
    });  
};

// Get drawings for a given category
exports.findAllCat = (req, res) => {
  const id = req.params.id;

  Drawing.findAll({ where: {
    category: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Drawing Drawings with id=" + id
      });
    });  
};
//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Drawing.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Drawing with id=" + id
      });
    });  
};

// Update a Drawing by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Drawing.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Drawing was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Drawing with id=${id}. Maybe Drawing was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Drawing with id=" + id
      });
    });
};

// Delete a Drawing with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Drawing.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Drawing was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Drawing with id=${id}. Maybe Drawing was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Drawing with id=" + id
      });
    });
};
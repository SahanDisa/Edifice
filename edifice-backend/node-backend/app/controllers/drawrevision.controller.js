const db = require("./../models/index");
const DrawRevision = db.drawrevision;

// create a drawrevision
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a DrawRevision
  const drawrevision = {
    username: req.body.username,
    description: req.body.description,
    drawingId: req.body.drawingId,
  };

  // Save DrawRevision in the database
  DrawRevision.create(drawrevision)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the DrawRevision."
      });
    });
};

// Get drawings for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  DrawRevision.findAll({ where: {
    drawingId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving DrawRevision Drawings with id=" + id
      });
    });  
};

// Get drawings for a given category
exports.findAllCat = (req, res) => {
  const id = req.params.id;

  DrawRevision.findAll({ where: {
    category: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving DrawRevision Drawings with id=" + id
      });
    });  
};
//Find a single drawrevision by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  DrawRevision.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving DrawRevision with id=" + id
      });
    });  
};

// Update a DrawRevision by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  DrawRevision.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DrawRevision was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update DrawRevision with id=${id}. Maybe DrawRevision was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating DrawRevision with id=" + id
      });
    });
};

// Delete a DrawRevision with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DrawRevision.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DrawRevision was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete DrawRevision with id=${id}. Maybe DrawRevision was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete DrawRevision with id=" + id
      });
    });
};
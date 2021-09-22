const db = require("./../models/index");
const DocumentRevision = db.documentrevision;

// create a documentrevision
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a DocumentRevision
  const documentrevision = {
    username: req.body.username,
    description: req.body.description,
    documentId: req.body.documentId,
  };

  // Save DocumentRevision in the database
  DocumentRevision.create(documentrevision)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the DocumentRevision."
      });
    });
};

// Get revisions for a given document
exports.findAll = (req, res) => {
  const id = req.params.id;

  DocumentRevision.findAll({ where: {
    documentId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving DocumentRevision Drawings with id=" + id
      });
    });  
};

// Get drawings for a given category
exports.findAllCat = (req, res) => {
  const id = req.params.id;

  DocumentRevision.findAll({ where: {
    category: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving DocumentRevision Drawings with id=" + id
      });
    });  
};
//Find a single documentrevision by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  DocumentRevision.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving DocumentRevision with id=" + id
      });
    });  
};

// Update a DocumentRevision by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  DocumentRevision.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DocumentRevision was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update DocumentRevision with id=${id}. Maybe DocumentRevision was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating DocumentRevision with id=" + id
      });
    });
};

// Delete a DocumentRevision with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DocumentRevision.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DocumentRevision was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete DocumentRevision with id=${id}. Maybe DocumentRevision was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete DocumentRevision with id=" + id
      });
    });
};
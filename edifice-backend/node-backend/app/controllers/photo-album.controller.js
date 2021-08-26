const db = require("./../models/index");
const Album = db.album;

// create a new album
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Album
  const album = {
    title: req.body.title,
    description: req.body.description,
    projectId: req.body.projectId,
  };

  // Save Project in the database
  Album.create(album)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the album."
      });
    });
};
// Get all albums for a given project
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    Album.findAll({ where: {
      projectId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Albums with id=" + id
        });
      });  
  };

//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Album.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Directory with id=" + id
      });
    });  
};


// Update a Photo by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Album.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Photo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Photo with id=${id}. Maybe Photo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Photo with id=" + id
      });
    });
};

// Delete a Photo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Album.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Photo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Photo with id=${id}. Maybe Photo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Photo with id=" + id
      });
    });
};

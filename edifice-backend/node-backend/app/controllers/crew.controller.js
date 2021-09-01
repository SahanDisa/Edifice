const db = require("./../models/index.js");
const Crew = db.crews;
const Op = db.Sequelize.Op;

// Create and Save a new crew
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a crew
  const crew = {
    name: req.body.name,
    total: req.body.total,
    projectId: req.body.projectId
  };
  // Save crew in the database
  Crew.create(crew)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the crew."
      });
    });
};

// Retrieve all crews from a given project
exports.findAll = (req, res) => {
    //const id = req.query.id;
      
    Crew.findAll(/*{ where: {
      projectId: id
    }}*/)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data"
        });
      });
};
/*
// Find a single crew with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    crew.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving crew with id=" + id
        });
      });  
};*/
/*
// Update a crew by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    crew.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "crew was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update crew with id=${id}. Maybe crew was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating crew with id=" + id
        });
      });
};*/
/*
// Delete a crew with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    crew.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "crew was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete crew with id=${id}. Maybe crew was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete crew with id=" + id
        });
      });
};*/

/*
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    crew.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};*/
/*
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    equipment.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};*/
///////////////////////////////////
// Improve for pagination as well
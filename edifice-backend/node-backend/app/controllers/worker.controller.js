const db = require("./../models/index.js");
const Worker = db.workers;
const Op = db.Sequelize.Op;

// Create and Save a new worker
exports.create = (req, res) => {
  // Validate request
  if (!req.body.wId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a worker
  const worker = {
    wId: req.body.wId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
    crewId: req.body.crewId
  };
  // Save worker in the database
  Worker.create(worker)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the worker."
      });
    });
};

// Retrieve all workers from a given project
exports.findAll = (req, res) => {
    //const id = req.query.id;
      
    Worker.findAll(/*{ where: {
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

// Update a worker by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Worker.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "worker was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update crew with id=${id}. Maybe worker was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err
        });
      });
};

// Delete a worker with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Worker.destroy({
      where: { wId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "worker was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete worker with id=${id}. Maybe worker was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete worker with id=" + id
        });
      });
};

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
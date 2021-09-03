const db = require("./../models/index.js");
const WorkedHours = db.workedHours;
const Op = db.Sequelize.Op;

// Create and Save a new workedhours
exports.create = (req, res) => {
  // Validate request
  if (!req.body.timesheetId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a workedHours
  const workedHours = {
    start: req.body.date,
    lunch_start: req.body.lunch_start,
    lunch_stop: req.body.lunch_stop,
    tea_start: req.body.tea_start,
    tea_end: req.body.tea_end,
    stop: req.body.stop,
    timeshhetId: req.body.timeshhetId

  };
  // Save workedHours in the database
  WorkedHours.create(workedHours)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the workedHours."
      });
    });
};
/*
// Retrieve all workers from a given project
exports.findAll = (req, res) => {
    //const id = req.query.id;
      
    Worker.findAll(/*{ where: {
      projectId: id
   // }}*/ /*)
     .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data"
        });
      });
};*/
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
const db = require("./../models/index.js");
const Schedule = db.schedule;

// Create and Save a new schedule
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a schedule
  const schedule = {
    title: req.body.title,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    userId: req.body.userId,
  };
  // Save schedule in the database
  Schedule.create(schedule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the schedule."
      });
    });
};

// Retrieve all schedules from a given user
exports.findAll = (req, res) => {
    const id = req.params.id;
      
    Schedule.findAll({ where: {
      userId: id
    }})
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

// Update a schedules by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Schedule.update(req.body, {
      where: { id:id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Schedule was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Schedule with id=${id}. Maybe Schedule was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Schedule with id=" + id
        });
      });
};

// Delete a schedule with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Schedule.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Schedule was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Schedule with id=${id}. Maybe Schedule was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Schedule with id=" + id
        });
      });
};
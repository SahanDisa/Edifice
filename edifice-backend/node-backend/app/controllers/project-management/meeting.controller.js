const db = require("../../models/index.js");
const Meeting = db.meetings;
const Op = db.Sequelize.Op;

// Create and Save a new Meeting
exports.create = (req, res) => {
    // Validate request
    if (!req.body.overview) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Meeting
    const Meeting = {
        overview: req.body.overview,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        noofitems: req.body.noofitems,
        status: req.body.status
    };

    // Save Meeting in the database
    Meeting.create(Meeting)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Meeting."
        });
    });
};

// Retrieve all meetings from the database.
exports.findAll = (req, res) => {
    const overview = req.query.overview;
    var condition = overview ? { overview: { [Op.like]: `%${overview}%` } } : null;
  
    Meeting.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving meetings."
        });
    });
};

// Find a single Meeting with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Meeting.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Meeting with id=" + id
        });
    });  
};

// Update a Meeting by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Meeting.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Meeting was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Meeting with id=${id}. Maybe Meeting was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Meeting with id=" + id
        });
      });
};

// Delete a Meeting with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Meeting.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Meeting was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Meeting with id=${id}. Maybe Meeting was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Meeting with id=" + id
        });
      });
};

// Find all location meetings
exports.findAlllocation = (req, res) => {
    Meeting.findAll({ where: { location: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving meetings."
      });
    });
};
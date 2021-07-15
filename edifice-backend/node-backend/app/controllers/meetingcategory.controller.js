const db = require("./../models/index.js");
const Meetingcategory = db.meetingcategory;
const Op = db.Sequelize.Op;

// Create and Save a new Meeting category
exports.create = (req, res) => {
    // Validate request
    if (!req.body.overview) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Meeting category
    const Meetingcategory = {
        overview: req.body.overview,
        description: req.body.description
    };

    // Save Meeting category in the database
    Meetingcategory.create(Meetingcategory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Meeting category."
        });
    });
};

// Retrieve all meeting category from the database.
exports.findAll = (req, res) => {
    const overview = req.query.overview;
    var condition = overview ? { overview: { [Op.like]: `%${overview}%` } } : null;
  
    Meetingcategory.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving meeting category."
        });
    });
};

// Find a single Meeting category with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Meetingcategory.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Meeting category with id=" + id
        });
    });  
};

// Update a Meeting category by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Meetingcategory.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Meeting Category was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Meeting Category with id=${id}. Maybe Meetingcategory was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Meeting Category with id=" + id
        });
      });
};

// Delete a Meeting category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Meetingcategory.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Meeting Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Meeting Category with id=${id}. Maybe Meetingcategory was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Meeting Category with id=" + id
        });
      });
};

// Find all location meeting category
exports.findAlllocation = (req, res) => {
    Meetingcategory.findAll({ where: { location: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving meeting category."
      });
    });
};
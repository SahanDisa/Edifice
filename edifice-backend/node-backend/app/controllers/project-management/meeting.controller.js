const db = require("../../models/index.js");
const Meeting = db.meetings;
const Op = db.Sequelize.Op;

// Create and Save a new Meeting
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Meeting
  const mt = {
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    time: req.body.time,
    location: req.body.location,
    status: req.body.status,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
    projectId: req.body.projectId
  };
  // Save Meeting in the database
  Meeting.create(mt)
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
  Meeting.update(req.body, {
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

// Find all meetings
exports.findAll = (req, res) => {
  Meeting.findAll({ where: { 
    isDeleted: 0
  }})
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

exports.findMetinCategory = (req, res) => {
  const id = req.params.id;
  db.sequelize.query('select * from meetings where projectId = '+id+' and isDeleted = 0 order by id desc limit 1;',
  { type: db.sequelize.QueryTypes.SELECT})
  // Meeting.findAll({
  //   limit: 1,
  //   order: [['id', 'DESC']]
  // },{ where: {
  //   category: id,
  //   isDeleted: 0,
  // }})
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
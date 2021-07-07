const db = require("./../models/index");
const Bidding = db.biddings;

// create a bidding
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Bidding
  const bidding = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate,
    published: req.body.published ? req.body.published : false,
    projectId: req.body.projectId,
  };

  // Save Bidding in the database
  Bidding.create(bidding)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project."
      });
    });
};

// Get Biddings for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  Bidding.findAll({ where: {
    projectId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project Drawings with id=" + id
      });
    });  
};

//Find a single bidding by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bidding.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });  
};

const db = require("../../models/index.js");
const pltypes = db.pltypes;

// create a new punch list types
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Punch List Types
  const plt = {
    title: req.body.title,
    description: req.body.description,
    projectId: req.body.projectId
  };
  // Save Punch List Type in the database
  pltypes.create(plt)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the punch list types."
    });
  });
};

// Get punch list types for a given project
exports.findAll = (req, res) => {
    const id = req.params.id;
    pltypes.findAll({ where: {
      projectId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Project Punch List Types with id=" + id
        });
      });  
  };

// Find a single punch list by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  pltypes.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Punch List Types with id=" + id
      });
    });  
};
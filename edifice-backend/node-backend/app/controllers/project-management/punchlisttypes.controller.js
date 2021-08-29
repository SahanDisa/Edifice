const db = require("../../models/index");
const PunchListTypes = db.punchlisttypes;

// create a new punch list types
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Project
  const punchlisttypes = {
    title: req.body.title,
    description: req.body.description,
    projectId: req.body.projectId,
  };

  // Save Project in the database
  PunchListTypes.create(punchlisttypes)
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
// Get drawings category for a given project
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    PunchListTypes.findAll({ where: {
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

//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PunchListTypes.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Punch List Types with id=" + id
      });
    });  
};

const db = require("./../models/index");
const Commitment = db.commitments;
const Sov = db.sovs;

// create a drawing
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ammount) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Project
  const sov = {
    costCode: req.body.costCode,
    description:req.body.description,
    ammount:req.body.ammount,
    billedToDate:req.body.billedToDate,
    //executed:req.body.executed,
    ammountRemaining:req.body.ammountRemaining,

    commitmentId: req.body.commitmentId,
  };

  // Save Project in the database
  Sov.create(sov)
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

// Get drawings for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  Sov.findAll({ where: {
    commitmentId: id
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

//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sov.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });  
};

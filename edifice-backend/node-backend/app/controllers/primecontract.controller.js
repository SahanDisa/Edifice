const db = require("./../models/index");
const Project = db.projects;
const PrimeContract = db.primecontracts;

// create a drawing
exports.create = (req, res) => {
  // Validate request
  if (!req.body.hash) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Project
  const primecontract = {
    hash: req.body.hash,
    owner: req.body.owner,
    contractor: req.body.contractor,
    engineer: req.body.engineer,
    title:req.body.title,
    status:req.body.status,
    //executed:req.body.executed,
    defaultRetainage:req.body.defaultRetainage,
    description:req.body.description,
    startDate:req.body.startDate,
    estimatedCompletionDate:req.body.estimatedCompletionDate,
    actualCompletionDate:req.body.actualCompletionDate,
    signedContractReceivedDate:req.body.signedContractReceivedDate,
    inclusions:req.body.inclusions,
    exclusions:req.body.exclusions,


    projectId: req.body.projectId,
  };

  // Save Project in the database
  PrimeContract.create(primecontract)
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

  PrimeContract.findAll({ where: {
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

//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PrimeContract.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });  
};

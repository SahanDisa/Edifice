const db = require("./../models/index");
const Project = db.projects;
const DirectCost = db.directcosts;

// create a budget 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.date) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Budget Line Item
  const directcost = {
    date: req.body.date,
    vendor: req.body.vendor,
    type: req.body.type,
    invoice: req.body.invoice,
    status: req.body.status,
    ammount: req.body.ammount,
    receivedDate: req.body.receivedDate,
    paidDate: req.body.paidDate,
    projectId: req.body.projectId,
  };

  // Save Budget Line in the database
  DirectCost.create(directcost)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Budget Line Item."
      });
    });
};

// Get budget line items for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  DirectCost.findAll({ where: {
    projectId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project Budget with id=" + id
      });
    });  
};

//Find a single budget by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  DirectCost.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id
      });
    });  
};

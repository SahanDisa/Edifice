const db = require("./../models/index");
const Project = db.projects;
const CostCode = db.costcodes;
const sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

// create a cost code 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.costCode) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Budget Line Item
  const costcode = {
    costCode: req.body.costCode,
    // category: req.body.category,
    date: req.body.date,
    published: req.body.published,
    //directCosts:req.body.directCosts,
    //commitedCosts:req.body.commitedCosts,
    //currentBudget: req.body.currentBudget,
    //revisedBudget: req.body.revisedBudget,
   
    projectId: req.body.projectId,
  };

  // Save Budget Line in the database
  CostCode.create(costcode)
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
  const published = true;

  CostCode.findAll({where: {
    projectId: id,
    published: published
  }}
  )
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

  CostCode.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project Budget with id=" + id
      });
    });  
};

//update a budget

exports.update = (req, res) => {

  const id = req.params.id;

  CostCode.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Budget Line Item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Budget Line Item with id=${id}. Maybe Budget Line Item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Budget Line Item with id=" + id
      });
    });
};

exports.findEverything = (req, res) => {
  const published = true;

  CostCode.findAll({where: {
    published: published
  }}
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project Budget"
      });
    });  
};


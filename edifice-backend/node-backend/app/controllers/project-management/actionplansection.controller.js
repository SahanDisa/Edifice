const db = require("./../../models/index.js");
const ActionPlanSection = db.actionplansection;
const Op = db.Sequelize.Op;

// Create and Save a new ActionPlanSection
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ActionPlanSection
  const actionplansection = {
    title: req.body.title,
    acceptance: req.body.acceptance,
    duedate: req.body.duedate,
    reftype: req.body.reftype,
    refid: req.body.refid,
    actionplanId: req.body.actionplanId
  };

  // Save ActionPlanSection in the database
  ActionPlanSection.create(actionplansection)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ActionPlanSection."
      });
    });
};

// Retrieve all ActionPlanSection from the database.
exports.findAllSearch = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    ActionPlanSection.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving projects."
        });
      });
};

// Find a single ActionPlanSection with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ActionPlanSection.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ActionPlanSection with id=" + id
        });
      });  
};

//get the ActionPlanSection action
exports.findAll= (req, res) => {
    const id = req.params.id;
  
    ActionPlanSection.findAll({ where: {
      actionplanId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ActionPlanSection Drawings with id=" + id
        });
      });  
  };

// Update a ActionPlanSection by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ActionPlanSection.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ActionPlanSection was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ActionPlanSection with id=${id}. Maybe ActionPlanSection was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ActionPlanSection with id=" + id
        });
      });
};

// Delete a ActionPlanSection with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ActionPlanSection.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ActionPlanSection was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ActionPlanSection with id=${id}. Maybe ActionPlanSection was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ActionPlanSection with id=" + id
        });
      });
};

// Delete all ActionPlanSection from the database.
exports.deleteAll = (req, res) => {
    ActionPlanSection.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ActionPlanSection were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};
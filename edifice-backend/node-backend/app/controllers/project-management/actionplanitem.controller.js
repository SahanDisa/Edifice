const db = require("./../models/index.js");
const ActionPlanItem = db.actionplanitem;
const Op = db.Sequelize.Op;

// Create and Save a new ActionPlanItem
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.assigner) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ActionPlanItem
  const actionplanitem = {
    title: req.body.title,
    description: req.body.description,
    assigner: req.body.assigner,
    iscompleted: req.body.iscompleted ? req.body.iscompleted : false,
    actionplansectionId: req.body.actionplansectionId
  };

  // Save ActionPlanItem in the database
  ActionPlanItem.create(actionplanitem)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ActionPlanItem."
      });
    });
};

// Retrieve all ActionPlanItem from the database.
exports.findAllSearch = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    ActionPlanItem.findAll({ where: condition })
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

// Find a single ActionPlanItem with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ActionPlanItem.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ActionPlanItem with id=" + id
        });
      });  
};

//get the ActionPlanItem action
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    ActionPlanItem.findAll({ where: {
      projectId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ActionPlanItem Drawings with id=" + id
        });
      });  
  };

// Update a ActionPlanItem by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ActionPlanItem.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ActionPlanItem was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ActionPlanItem with id=${id}. Maybe ActionPlanItem was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ActionPlanItem with id=" + id
        });
      });
};

// Delete a ActionPlanItem with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ActionPlanItem.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ActionPlanItem was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ActionPlanItem with id=${id}. Maybe ActionPlanItem was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ActionPlanItem with id=" + id
        });
      });
};

// Delete all ActionPlanItem from the database.
exports.deleteAll = (req, res) => {
    ActionPlanItem.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ActionPlanItem were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Find all published ActionPlanItem
exports.findAllCompleted = (req, res) => {
    const id = req.params.id;
    
    ActionPlanItem.findAll({ where: { iscompleted: true , actionplansectionId: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
/////////////////////////////////
// Improve for pagination as well
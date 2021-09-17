const db = require("./../../models/index.js");
const ActionPlanItem = db.actionplanitem;
const Op = db.Sequelize.Op;

// Create and Save a new ActionPlanItem
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
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
    isCompleted: req.body.isCompleted ? req.body.isCompleted : false,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
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

// Update a Action Plan Item by the id in the request
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

// Delete a Action Plan Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  ActionPlanItem.update({isDeleted: 1}, {
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

// Find a single ActionPlanItem with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  ActionPlanItem.findByPk({id}, { where:
    {
      isDeleted: 0
    }
  })
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
    projectId: id,
    isDeleted: 0
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

// Find all published ActionPlanItem
exports.findAllCompleted = (req, res) => {
    const id = req.params.id;
    ActionPlanItem.findAll({ where: {
      isCompleted: true,
      isDeleted: 0,
      actionplansectionId: id } })
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
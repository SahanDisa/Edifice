const db = require("./../../models/index.js");
const ActionPlan = db.actionplan;
const Op = db.Sequelize.Op;

// Create and Save a new ActionPlan
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.planmanager) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ActionPlan
  const actionplan = {
    title: req.body.title,
    planmanager: req.body.planmanager,
    actiontype: req.body.actiontype,
    location: req.body.location,
    description: req.body.description,
    isapprove: req.body.isapprove ? req.body.isapprove : false,
    projectId: req.body.projectId
  };

  // Save ActionPlan in the database
  ActionPlan.create(actionplan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ActionPlan."
      });
    });
};

// Retrieve all Projects from the database.
exports.findAllSearch = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    ActionPlan.findAll({ where: condition })
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

// Find a single ActionPlan with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ActionPlan.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ActionPlan with id=" + id
        });
      });  
};

//get the ActionPlan action
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    ActionPlan.findAll({ where: {
      projectId: id
    }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ActionPlan Drawings with id=" + id
        });
      });  
  };

// Update a ActionPlan by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ActionPlan.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ActionPlan was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ActionPlan with id=${id}. Maybe ActionPlan was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ActionPlan with id=" + id
        });
      });
};

// Delete a ActionPlan with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ActionPlan.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ActionPlan was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ActionPlan with id=${id}. Maybe ActionPlan was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ActionPlan with id=" + id
        });
      });
};

// Delete all ActionPlan from the database.
exports.deleteAll = (req, res) => {
    ActionPlan.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ActionPlan were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Get action plan for a given category
exports.findAlltype = (req, res) => {
  const id = req.params.id;
  ActionPlan.findAll({ where: {
    category: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving acltion plan items with aid=" + id
      });
    });  
};

// Find all published ActionPlan
exports.findAllApproved = (req, res) => {
  const id = req.params.id;
    ActionPlan.findAll({ where: { isapprove: true }, projectId: id })
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
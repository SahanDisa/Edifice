const db = require("./../models/index");
const Project = db.projects;
const DirectCost = db.directcosts;

// create a budget 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Budget Line Item
  const directcost = {
    costCode: req.body.costCode,
    description:req.body.description,
    category: req.body.category,
    vendor: req.body.vendor,
    employee: req.body.employee,
    receivedDate: req.body.receivedDate,
    paidDate: req.body.paidDate,
    ammount: req.body.ammount,
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

/*-------------------------------------------------------------- */

//delete a commitment

exports.delete = (req, res) => {
  const id = req.params.id;

  DirectCost.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Commitment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Commitment with id=${id}. Maybe Commitment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Commitment with id=" + id
      });
    });
};

//update a commitment

exports.update = (req, res) => {
  const id = req.params.id;

  DirectCost.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Commitment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Commitment with id=${id}. Maybe Commitment  was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Commitment with id=" + id
      });
    });
};

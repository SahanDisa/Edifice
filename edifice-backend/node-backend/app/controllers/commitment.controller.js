const db = require("./../models/index");
const Project = db.projects;
const Commitment = db.commitments;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.hash) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a commitment
  const commitment = {
    hash: req.body.hash,
    title:req.body.title,
    contractCompany:req.body.contractCompany,
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

  // Save commitment in the database
  Commitment.create(commitment)
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

// Get commitments for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  Commitment.findAll({ where: {
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

//Find a single commitment by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Commitment.findByPk(id)
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

  Commitment.destroy({
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

  Commitment.update(req.body, {
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
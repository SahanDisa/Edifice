const db = require("./../models/index");
const Commitment = db.commitments;
const Invoice = db.invoices;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.from) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an invoice
  const invoice = {
    hash: req.body.hash,
    date:req.body.date,
    to: req.body.to,
    from: req.body.from,
    description: req.body.description,
    workCompleted: req.body.workCompleted,
    ammountDue: req.body.ammountDue,

    commitmentId: req.body.commitmentId,
  };

  // Save invoice in the database
  Invoice.create(invoice)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the invoice."
      });
    });
};

// Get invoies for a given contract
exports.findAll = (req, res) => {
  const id = req.params.id;

  Invoice.findAll({ where: {
    commitmentId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Invoice with id=" + id
      });
    });  
};

//Find a single invoice by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Invoice.findByPk(id)
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

//delete a direct cost

exports.delete = (req, res) => {
  const id = req.params.id;

  Invoice.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Invoice was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Invoice with id=${id}. Maybe Invoice was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Invoice with id=" + id
      });
    });
};

//update a direct cost

exports.update = (req, res) => {
  const id = req.params.id;

  Invoice.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Invoice was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Invoice with id=${id}. Maybe Invoice  was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Invoice with id=" + id
      });
    });
};

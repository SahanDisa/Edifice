const db = require("./../models/index.js");
const Employee = db.employee;
const Op = db.Sequelize.Op;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!",
      //cat:req.body
    });
    return;
  }

  // Create Employee
  const employee = {
    id:req.body.id,
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    mobile: req.body.mobile,
    projCount:req.body.projCount,
    other:req.body.other,
    userid:req.body.id,
    hasAccount:0
  };

  // Save Employee in database
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    //const id = req.query.id;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Employee.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving employees."
        });
      });
};

exports.findUsers = (req, res) => {
  //const id = req.query.id;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Employee.findAll({
    where: {
      hasAccount: 1
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find single Employee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Employee with id=" + id
        });
      });  
};

//get the last employee 
exports.findLastOne = (req,res) =>{
    Employee.findAll({
     limit: 1,
     order: [['id', 'DESC']]
   })
   .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Employees."
    });
  });
}

// Update an Employee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Employee with id=" + id
        });
      });
};

//update employee as to account created
exports.updateAccountStatus = (req, res) => {
  const id = req.params.id;

  Employee.update({ hasAccount: 1 }, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Account status for Employee changed."
        });
      } else {
        res.send({
          message: `Cannot update Account status forEmployee with id=${id}. `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Account status for Employee with id=" + id
      });
    });
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Employee with id=" + id
        });
      });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
    Employee.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Employees were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Employees."
          });
        });
};
///////////////////////////////////
// Improve for pagination as well
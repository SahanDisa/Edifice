const db = require("./../models/index.js");
const Category = db.categorys;
const Op = db.Sequelize.Op;

// Create and Save a new category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a category
  const category = {
    name: req.body.name,
    total: req.body.total,
  };

  // Save category in the database
  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the category."
      });
    });
};

// Retrieve all categorys from a given project
exports.findAll = (req, res) => {
  const id = req.params.id;
  
    category.findAll({ where: {
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
/*
// Find a single category with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving category with id=" + id
        });
      });  
};*/
/*
// Update a category by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "category was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update category with id=${id}. Maybe category was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating category with id=" + id
        });
      });
};*/
/*
// Delete a category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete category with id=${id}. Maybe category was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete category with id=" + id
        });
      });
};*/

/*
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    category.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};*/
/*
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    category.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};*/
///////////////////////////////////
// Improve for pagination as well
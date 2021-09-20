const db = require("./../models/index");
const ProjectUser = db.projectuser;

// create a user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.userId && !req.body.projectId) {
    res.status(400).send({
      message: "Assigning incorrect! Check projectuserId and userId!"
    });
    return;
  }

  // Create a ProjectUser
  const projectuser = {
    userId: req.body.userId,
    department: req.body.department,
    position: req.body.position,
    projectId: req.body.projectId,
  };

  // Save ProjectUser in the database
  ProjectUser.create(projectuser)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProjectUser."
      });
    });
};

// Get drawings for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  ProjectUser.findAll({ where: {
    userId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProjectUser Aassigned for user with id=" + id
      });
    });  
};

//Find a single drawing by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProjectUser.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProjectUser with id=" + id
      });
    });  
};

// Get drawings for a given project
exports.findProjectUsers = (req, res) => {
  const id = req.params.id;

  ProjectUser.findAll({ where: {
    projectId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Users for project id=" + id
      });
    });  
};


// Update a ProjectUser by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ProjectUser.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProjectUser was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update ProjectUser with id=${id}. Maybe ProjectUser was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ProjectUser with id=" + id
      });
    });
};

// Delete a ProjectUser with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ProjectUser.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProjectUser was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete ProjectUser with id=${id}. Maybe ProjectUser was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProjectUser with id=" + id
      });
    });
};


exports.getProjectUserDetails = (req,res)=>{
  id = req.params.id;

  db.sequelize.query('select projectuser.id, projectuser.userId, projectuser.department, projectuser.position, projectuser.projectId, projects.title, projects.description, projects.location, projects.startdate, projects.enddate, projects.progressValue, projects.published FROM projectuser INNER JOIN projects ON projectuser.projectId = projects.id AND projectuser.userId = '+id+';',
   { type: db.sequelize.QueryTypes.SELECT})
  .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not get the project user project details=" + id
      });
    });
}

exports.getUserDetails = (req,res)=>{
  id = req.params.id;

  db.sequelize.query('select projectuser.*, users.* FROM projectuser, users where projectuser.userId = users.id AND projectuser.projectId = '+id+' AND projectuser.position = "Engineer";',
   { type: db.sequelize.QueryTypes.SELECT})
  .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not get the project user project details=" + id
      });
    });
}
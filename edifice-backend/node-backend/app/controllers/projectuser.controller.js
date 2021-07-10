const db = require("./../models/index");
const ProjectUser = db.projectuser;
const Project = db.projects;

// create a user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstname && !req.body.lastname && !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if(!req.body.projectuserId && !req.body.userId){
    res.status(400).send({
        message: "Assigning incorrect! Check projectuserId and userId!"
      });
      return; 
  }

  // Create a Project
  const projectuser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    email: req.body.email,
    position: req.body.position,
    drawtype: req.body.drawtype,
    projectuserId: req.body.projectuserId,
    userId: req.body.userId
  };

  // Save Project in the database
  ProjectUser.create(projectuser)
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
        message: "Error retrieving Project Aassigned for user with id=" + id
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

//Find project Details of a particular user
exports.findProjects = (req,res) =>{
    const id = req.params.id;

    ProjectUser.findAll({
        include: [{
            model: Project,
            as: "projectusers",
            attributes: ["id", "title", "description"],
            through: {
              attributes: [],
            }
        }]
    }).then(data => {
        res.send(data);
      })
      .catch((err) => {
        console.log(">> Error while retrieving Tags: ", err);
      });  
};
//Add project to a user
exports.addProject = (req,res) => {
    userId = req.params.id,
    projectId = req.params.pid

    return ProjectUser.findByPk(userId)
      .then((projectuser) => {
        if (!projectuser) {
          console.log("User not found!");
          return null;
        }
        return Project.findByPk(projectId).then((project) => {
          if (!project) {
            console.log("Tutorial not found!");
            return null;
          }
  
          projectuser.setProjects(project);
          console.log(`>> added Project id=${project.id} to User id=${projectuser.id}`);
          return projectuser;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding Project to User: ", err);
      });
  };
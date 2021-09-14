const db = require("../../models/index.js");
const PLPhotos = db.plphotos;
const Op = db.Sequelize.Op;

// Create and Save a new PL Photos 
exports.create = (req, res) => {
  // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "PLPhotos content can't be empty!"
        });
        return;
    }

    // Create a PL Photos
    const plphoto = {
        name: req.body.name,
        description: req.body.description,
        punchlistNo: req.body.punchlistNo
    }

    // Save PL Photos in the database
    PLPhotos.create(plphoto)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the PL Photos."
        });
    });
};

// Retrieve all PL Photoss from the database for a certain project.
exports.findAll = (req, res) => {
    const id = req.params.id;
  
    PLPhotos.findAll({ where: {
        projectId: id
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Project PL Photoss with id=" + id
        });
    });  
};

// Find a single PLPhotos with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Project.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving PL Photos with id=" + id
        });
    });  
};
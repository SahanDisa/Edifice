const db = require("./../../models/index.js");
const DLQuestions = db.dlquestions;
const Op = db.Sequelize.Op;

// Create and Save a new DLQuestions
exports.create = (req, res) => {
    // Validate request
    if (!req.body.question) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a DLQuestions
    const dlquestions = {
        question: req.body.question,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
        projectId: req.body.projectId
    };
    // Save DLQuestions in the database
    DLQuestions.create(dlquestions)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the DLQuestions."
        });
    });
};

//get the DLQuestions action
exports.findAll = (req, res) => {
    const id = req.params.id;
    DLQuestions.findAll({ where: {
        projectId: id,
        isDeleted: 0
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving DLQuestions Drawings with id=" + id
        });
    });  
};
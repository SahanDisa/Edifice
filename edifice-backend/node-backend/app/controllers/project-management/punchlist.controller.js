const db = require("../../models/index.js");
const Punchlist = db.punchlist;

// Create and Save a new Punchlist
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Punchlist
    const pl = {
        status: req.body.status,
        duedate: req.body.duedate,
        title: req.body.title,
        type: req.body.type,
        location: req.body.location,
        // punchmanager: req.body.punchmanager,
        // assignee: req.body.assignee,
        description: req.body.description,
        projectId: req.body.id
    };

    // Save Punchlist in the database
    Punchlist.create(pl)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Punch list."
        });
    });
};

// Retrieve all punchlist from the database.
exports.findAll = (req, res) => {
    const no = req.query.no;
  
    Punchlist.findAll({ where: { projectId: id }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Project Punch List Items Ctaegory with id=" + id
        });
    });
};

// Get punch list for a given type
exports.findAllintype = (req, res) => {
    const id = req.params.id;
    Punchlist.findAll({ where: {
        type: id
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving punch lists with id=" + id
        });
    });  
};

// Find a single Punchlist with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Punchlist.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving punch list with no=" + id
        });
    });  
};
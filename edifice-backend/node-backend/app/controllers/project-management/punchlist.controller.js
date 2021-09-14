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
            message: "Error retrieving Punch List Items with category type=" + id
        });
    });
};

// Get punch list types for a given project
exports.findAll = (req, res) => {
    const id = req.params.id;
    Punchlist.findAll({ where: {
        projectId: id
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Punch List Items with id=" + id
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

exports.findLastOne = (req,res) =>{
    Punchlist.findAll({
        limit: 1,
        order: [['id', 'DESC']]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
    res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving punch lists."
        });
    });
}

// Update a equipment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Punchlist.update(req.body, {
      where: { no: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "equipment was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update equipment with id=${id}. Maybe equipment was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating equipment with id=" + id
        });
    });
};
const db = require("../../models/index.js");
const AccidentLog = db.dlaccident;

// Create and Save a new AccidentLog
exports.create = (req, res) => {
    // Validate request
    if (!req.body.date && !req.body.time) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a AccidentLog
    const dla = {
        date: req.body.date,    
        time: req.body.time,
        partyinvolved: req.body.partyinvolved,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
        projectId: req.body.projectId
    };
    // Save AccidentLog in the database
    AccidentLog.create(dla)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the AccidentLog."
        });
    });
};

// Update a AccidentLog by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    AccidentLog.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "AccidentLog was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update AccidentLog with id=${id}. Maybe AccidentLog was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating AccidentLog with id=" + id
        });
    });
};

// Delete a AccidentLog with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    AccidentLog.update({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "AccidentLog was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete AccidentLog with id=${id}. Maybe AccidentLog was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete AccidentLog with id=" + id
        });
    });
};

// Find a single AccidentLog with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    AccidentLog.findByPk({id}, { where:
        {
        isDeleted: 0
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving AccidentLog with id=" + id
        });
    });  
};

//get the AccidentLog action
exports.findAll = (req, res) => {
    const id = req.params.id;
    AccidentLog.findAll({ where: {
        projectId: id,
        isDeleted: 0
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving AccidentLog Drawings with id=" + id
        });
    });  
};
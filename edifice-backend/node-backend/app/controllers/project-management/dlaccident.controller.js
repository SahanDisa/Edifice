const db = require("./../../models/index.js");
const DLAccident = db.dlaccident;
const Op = db.Sequelize.Op;

// Create and Save a new DLAccident
exports.create = (req, res) => {
    // Validate request
    if (!req.body.date && !req.body.time) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a DLAccident
    const dlaccident = {
        date: req.body.date,    
        time: req.body.time,
        partyinvolved: req.body.partyinvolved,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
        projectId: req.body.projectId
    };
    // Save DLAccident in the database
    DLAccident.create(dlaccident)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the DLAccident."
        });
    });
};

// Update a DLAccident by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    DLAccident.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "DLAccident was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update DLAccident with id=${id}. Maybe DLAccident was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating DLAccident with id=" + id
        });
    });
};

// Delete a DLAccident with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    DLAccident.update({isDeleted = 1}, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "DLAccident was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete DLAccident with id=${id}. Maybe DLAccident was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete DLAccident with id=" + id
        });
    });
};

// Find a single DLAccident with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    DLAccident.findByPk({id}, { where:
        {
        isDeleted: 0
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving DLAccident with id=" + id
        });
    });  
};

//get the DLAccident action
exports.findAll = (req, res) => {
    const id = req.params.id;
    DLAccident.findAll({ where: {
        projectId: id,
        isDeleted: 0
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving DLAccident Drawings with id=" + id
        });
    });  
};
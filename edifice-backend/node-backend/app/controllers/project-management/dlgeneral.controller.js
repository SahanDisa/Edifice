const db = require("./../../models/index.js");
const DLGeneral = db.dlgeneral;
const Op = db.Sequelize.Op;

// Create and Save a new DLGeneral
exports.create = (req, res) => {
    // Validate request
    if (!req.body.date) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a DLGeneral
    const dlgeneral = {
        date: req.body.date,   
        question: req.body.question,
        isHappended: req.body.isHappended ? req.body.isHappended : false,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
        projectId: req.body.projectId
    };
    // Save DLGeneral in the database
    DLGeneral.create(dlgeneral)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the DLGeneral."
        });
    });
};

// Update a DLGeneral by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    DLGeneral.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "DLGeneral was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update DLGeneral with id=${id}. Maybe DLGeneral was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating DLGeneral with id=" + id
        });
    });
};

// Delete a DLGeneral with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    DLGeneral.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "DLGeneral was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete DLGeneral with id=${id}. Maybe DLGeneral was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete DLGeneral with id=" + id
        });
    });
};

// Find a single DLGeneral with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    DLGeneral.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving DLGeneral with id=" + id
        });
    });  
};

//get the DLGeneral action
exports.findAll = (req, res) => {
    const id = req.params.id;
    DLGeneral.findAll({ where: {
        projectId: id,
        isDeleted: 0
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
         message: "Error retrieving DLGeneral Drawings with id=" + id
        });
    });  
};
const db = require("./../../models/index.js");
const DLWeather = db.dlweather;
const Op = db.Sequelize.Op;

// Create and Save a new DLWeather
exports.create = (req, res) => {
    // Validate request
    if (!req.body.date && !req.body.time) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a DLWeather
    const dlweather = {
        date: req.body.date,   
        time: req.body.time,
        temperature: req.body.temperature,
        weather: req.body.weather,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
        projectId: req.body.projectId
    };
    // Save DLWeather in the database
    DLWeather.create(dlweather)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the DLWeather."
        });
    });
};

// Update a DLWeather by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    DLWeather.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "DLWeather was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update DLWeather with id=${id}. Maybe DLWeather was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating DLWeather with id=" + id
        });
    });
};

// Delete a DLWeather with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    DLWeather.update({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "DLWeather was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete DLWeather with id=${id}. Maybe DLWeather was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete DLWeather with id=" + id
        });
    });
};

// Find a single DLWeather with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    DLWeather.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving DLWeather with id=" + id
        });
    });  
};

//get the DLWeather action
exports.findAll = (req, res) => {
    const id = req.params.id;
    DLWeather.findAll({ where: {
        projectId: id,
        isDeleted: 0
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
         message: "Error retrieving DLWeather Drawings with id=" + id
        });
    });  
};
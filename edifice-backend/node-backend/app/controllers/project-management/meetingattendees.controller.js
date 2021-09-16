const db = require("../../models/index.js");
const MeetingAttendees = db.meetingattendees;
const Op = db.Sequelize.Op;

// Create and Save a new MeetingAttendees
exports.create = (req, res) => {
    // Validate request
    if (!req.body.overview) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a MeetingAttendees
    const MeetingAttendees = {
        overview: req.body.overview,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        status: req.body.status,
        isDeleted: req.body.isDeleted ? req.body.isDeleted : false,
        projectId: req.body.projectId
    };
    // Save MeetingAttendees in the database
    MeetingAttendees.create(MeetingAttendees)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the MeetingAttendees."
        });
    });
};

// Update a MeetingAttendees by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    MeetingAttendees.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "MeetingAttendees was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update MeetingAttendees with id=${id}. Maybe MeetingAttendees was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating MeetingAttendees with id=" + id
        });
    });
};

// Find all meetingattendees
exports.findAll = (req, res) => {
    MeetingAttendees.findAll({ where: { 
        isDeleted: 0
    }})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving meetingattendees."
        });
    });
};
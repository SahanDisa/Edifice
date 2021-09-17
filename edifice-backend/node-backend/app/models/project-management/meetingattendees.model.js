module.exports = (sequelize, Sequelize) => {
    const MeetingAttendees = sequelize.define("meetingattendees", {
      date: {
        type: Sequelize.DATEONLY
      },
      isAttended: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
        freezeTableName: true,
    });
  
    return MeetingAttendees;
  };
module.exports = (sequelize, Sequelize) => {
    const MeetingAgenda = sequelize.define("meetingagenda", {
      activity: {
        type: Sequelize.STRING
      },
      starttime: {
        type: Sequelize.DATEONLY
      },
      endtime: {
        type: Sequelize.TIME  
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
        freezeTableName: true,
    });
  
    return MeetingAgenda;
  };
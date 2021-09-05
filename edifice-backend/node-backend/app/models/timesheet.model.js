module.exports = (sequelize, Sequelize) => {
    const timesheet = sequelize.define("timesheet", {
      code: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      date: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING
      }},{
        freezeTableName: true,
    });
  
    return timesheet;
  };
  
  
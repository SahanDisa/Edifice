module.exports = (sequelize, Sequelize) => {
  const timesheet = sequelize.define("timesheet", {
    date: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING
    }
  }, {
      freezeTableName: true,
    });

  return timesheet;
};


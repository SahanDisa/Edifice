module.exports = (sequelize, Sequelize) => {
  const timesheet = sequelize.define("timesheet", {
    date: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING
    },
    aprrovedId: {
      type: Sequelize.INTEGER
    }
  }, {
    freezeTableName: true,
  });

  return timesheet;
};


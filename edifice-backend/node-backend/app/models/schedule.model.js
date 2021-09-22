module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("schedule", {
    title: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    endDate: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING,
    }
  }, {
    freezeTableName: true,
  });

  return Schedule;
};

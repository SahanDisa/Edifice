module.exports = (sequelize, Sequelize) => {
  const DailyLogTypes = sequelize.define("dailylogtypes", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  }, {
      freezeTableName: true,
  });

  return DailyLogTypes;
};
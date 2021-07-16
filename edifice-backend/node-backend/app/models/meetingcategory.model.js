module.exports = (sequelize, Sequelize) => {
  const Meetingcategory = sequelize.define("meetingcategory", {
    overview: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  }, {
      freezeTableName: true,
  });

  return Meetingcategory;
};
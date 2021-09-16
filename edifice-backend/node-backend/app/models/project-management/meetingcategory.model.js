module.exports = (sequelize, Sequelize) => {
  const Meetingcategory = sequelize.define("meetingcategory", {
    overview: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0
    }
  }, {
      freezeTableName: true,
  });

  return Meetingcategory;
};
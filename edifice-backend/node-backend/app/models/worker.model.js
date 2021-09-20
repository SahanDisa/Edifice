module.exports = (sequelize, Sequelize) => {
  const Worker = sequelize.define("worker", {
    wId: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.INTEGER
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0
    }
  }, {
    freezeTableName: true,
  });

  return Worker;
};


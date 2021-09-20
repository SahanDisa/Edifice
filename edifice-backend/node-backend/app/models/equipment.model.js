module.exports = (sequelize, Sequelize) => {
  const Equipment = sequelize.define("equipments", {
    code: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE
    },
    condition: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
  });

  return Equipment;
};


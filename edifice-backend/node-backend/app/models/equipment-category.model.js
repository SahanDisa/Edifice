module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("equipment_category", {
    name: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {
    freezeTableName: true,
  });

  return Category;
};

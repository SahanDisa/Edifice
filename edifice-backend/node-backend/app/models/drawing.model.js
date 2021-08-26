module.exports = (sequelize, Sequelize) => {
    const Drawing = sequelize.define("drawing", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      status: {
        type: Sequelize.STRING
      }}, {
        freezeTableName: true,
    });
  
    return Drawing;
};
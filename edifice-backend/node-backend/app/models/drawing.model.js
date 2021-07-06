module.exports = (sequelize, Sequelize) => {
    const Drawing = sequelize.define("drawing", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      drawtype: {
        type: Sequelize.STRING
      }}, {
        freezeTableName: true,
    });
  
    return Drawing;
};
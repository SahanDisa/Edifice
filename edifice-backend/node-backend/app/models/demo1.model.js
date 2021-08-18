const { drawingcategory } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Demo1 = sequelize.define("demo1", {
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
  
    return Demo1;
};
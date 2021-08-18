module.exports = (sequelize, Sequelize) => {
    const Demo2 = sequelize.define("demo2", {
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
  
    return Demo2;
};

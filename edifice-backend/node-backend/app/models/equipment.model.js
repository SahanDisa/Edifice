module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define("equipment", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      location:{
        type: Sequelize.STRING    
      },
      published: {
        type: Sequelize.BOOLEAN
      }}, {
        freezeTableName: true,
    });
  
    return Equipment;
  };
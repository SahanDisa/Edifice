module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define("equipments", {
      code: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      date_issued:{
        type: Sequelize.DATE    
      },
      condition: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }},{
        freezeTableName: true,
    });
  
    return Equipment;
  };
  
  
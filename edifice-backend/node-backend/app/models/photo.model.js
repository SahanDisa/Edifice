module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("photos", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category:{
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING  
      }
        }, {
        freezeTableName: true,
    });
  
    return Photo;
};
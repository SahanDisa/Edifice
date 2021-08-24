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
      data: {
        type: Sequelize.BLOB("long"),
      },
        }, {
        freezeTableName: true,
    });
  
    return Photo;
};
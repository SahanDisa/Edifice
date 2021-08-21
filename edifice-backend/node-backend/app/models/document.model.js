module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("documents", {
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
  
    return Document;
};
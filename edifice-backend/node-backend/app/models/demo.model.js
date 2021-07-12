module.exports = (sequelize, Sequelize) => {
    const Demo = sequelize.define("demo", {
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
  
    return Demo;
  };
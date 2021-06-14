module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
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
  
    return Project;
  };
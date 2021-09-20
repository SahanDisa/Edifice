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
      startdate:{
        type: Sequelize.STRING  
      },
      enddate:{
        type: Sequelize.STRING  
      },
      progressValue:{
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      published: {
        type: Sequelize.BOOLEAN
      }}, {
        freezeTableName: true,
    });
  
    return Project;
  };
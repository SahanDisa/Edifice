module.exports = (sequelize, Sequelize) => {
    const Milestone = sequelize.define("milestones", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration:{
        type: Sequelize.STRING    
      }}, {
        freezeTableName: true,
    });
  
    return Milestone;
  };
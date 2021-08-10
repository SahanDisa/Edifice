module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define("departments", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      purpose:{
        type: Sequelize.STRING    
      }}, {
        freezeTableName: true,
    });
  
    return Department;
  };
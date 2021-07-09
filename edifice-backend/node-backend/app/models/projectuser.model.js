module.exports = (sequelize, Sequelize) => {
    const ProjectUser = sequelize.define("projectuser", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING  
      },
      position:{
        type: Sequelize.STRING  
      }
      }, {
        freezeTableName: true,
    });
  
    return ProjectUser;
};
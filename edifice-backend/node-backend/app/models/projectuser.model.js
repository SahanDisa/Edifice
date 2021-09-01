module.exports = (sequelize, Sequelize) => {
    const ProjectUser = sequelize.define("projectuser", {
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      department: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      }}, {
        freezeTableName: true,
    });
  
    return ProjectUser;
};
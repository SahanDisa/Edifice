module.exports = (sequelize, Sequelize) => {
    const Directory = sequelize.define("directory", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }}, {
        freezeTableName: true,
    });
  
    return Directory;
};
module.exports = (sequelize, Sequelize) => {
    const ProgressPoints = sequelize.define("progresspoints", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      progress: {
        type: Sequelize.FLOAT
      }}, {
        freezeTableName: true,
    });
  
    return ProgressPoints;
};
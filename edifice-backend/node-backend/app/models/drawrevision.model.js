module.exports = (sequelize, Sequelize) => {
    const DrawRevision = sequelize.define("drawrevision", {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      }}, {
        freezeTableName: true,
    });
  
    return DrawRevision;
};
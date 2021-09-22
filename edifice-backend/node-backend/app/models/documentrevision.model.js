module.exports = (sequelize, Sequelize) => {
    const DocumentRevision = sequelize.define("documentrevision", {
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
  
    return DocumentRevision;
};
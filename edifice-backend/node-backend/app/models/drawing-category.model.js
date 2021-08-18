module.exports = (sequelize, Sequelize) => {
    const DrawingCategory = sequelize.define("drawingcategory", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }}, {
        freezeTableName: true,
    });
  
    return DrawingCategory;
};
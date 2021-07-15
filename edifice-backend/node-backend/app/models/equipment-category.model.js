module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categorys", {
      name: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      }},{
        freezeTableName: true,
    });
  
    return Category;
  };

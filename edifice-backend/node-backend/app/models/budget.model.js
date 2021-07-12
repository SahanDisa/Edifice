module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
      costCode: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      originalBudget: {
        type: Sequelize.DECIMAL(10, 2)
      }}, {
        freezeTableName: true,
    });
  
    return Budget;
};
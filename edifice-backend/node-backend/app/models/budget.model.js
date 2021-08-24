module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
      costCode: {
        type: Sequelize.STRING
      },
      estimatedBudget: {
        type: Sequelize.DECIMAL(10, 2)
      }
      ,
      revisedBudget: {
        type: Sequelize.DECIMAL(10, 2)
      },
      currentBudget: {
        type: Sequelize.DECIMAL(10, 2)
      }
    
    }, {
        freezeTableName: true,
    });
  
    return Budget;
};
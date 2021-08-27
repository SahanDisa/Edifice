module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
      costCode: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      estimatedBudget: {
        type: Sequelize.DECIMAL(10, 2)
      }
      ,
      directCosts: {
        type: Sequelize.DECIMAL(10, 2)
      }
      ,
      commitedCosts: {
        type: Sequelize.DECIMAL(10, 2)
      }
      ,
      currentBudget: {
        type: Sequelize.DECIMAL(10, 2)
      },
      revisedBudget: {
        type: Sequelize.DECIMAL(10, 2)
      }
   
    
    }, {
        freezeTableName: true,
    });
  
    return Budget;
};
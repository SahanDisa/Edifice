module.exports = (sequelize, Sequelize) => {
    const ActionPlanItem = sequelize.define("actionplanitem", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      assigner: {
        type: Sequelize.STRING, 
      },
      isCompleted: {
         type: Sequelize.BOOLEAN 
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
      freezeTableName: true,
    });
  
    return ActionPlanItem;
  };
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
      iscompleted: {
         type: Sequelize.BOOLEAN 
      }
      }, {
        freezeTableName: true,
    });
  
    return ActionPlanItem;
  };
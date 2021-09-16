module.exports = (sequelize, Sequelize) => {
    const ActionPlanSection = sequelize.define("actionplansection", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      acceptance: {
        type: Sequelize.STRING
      },
      duedate: {
        type: Sequelize.STRING
      },
      reftype: {
        type: Sequelize.STRING
      },
      refid:{
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
      freezeTableName: true,
    });
  
    return ActionPlanSection;
};
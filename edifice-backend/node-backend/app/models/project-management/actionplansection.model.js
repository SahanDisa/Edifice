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
      }}, {
        freezeTableName: true,
    });
  
    return ActionPlanSection;
};
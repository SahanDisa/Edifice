module.exports = (sequelize, Sequelize) => {
    const ActionPlanType = sequelize.define("actionplantype", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      }}, {
        freezeTableName: true,
    });

    return ActionPlanType;
  };
module.exports = (sequelize, Sequelize) => {
    const ActionPlan = sequelize.define("actionplan", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      planmanager: {
        type: Sequelize.STRING,
        allowNull: false
      },
      actiontype: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isapprove: {
        type: Sequelize.BOOLEAN
      }}, {
        freezeTableName: true,
    });
  
    return ActionPlan;
  };
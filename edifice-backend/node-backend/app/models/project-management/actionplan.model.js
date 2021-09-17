module.exports = (sequelize, Sequelize) => {
    const ActionPlan = sequelize.define("actionplan", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      actiontype: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      planmanager: {
        type: Sequelize.STRING
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
        freezeTableName: true,
    });
  
    return ActionPlan;
  };
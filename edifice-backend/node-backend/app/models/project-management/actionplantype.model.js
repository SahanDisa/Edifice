module.exports = (sequelize, Sequelize) => {
    const ActionPlanType = sequelize.define("actionplantype", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
      freezeTableName: true,
    });

    return ActionPlanType;
  };
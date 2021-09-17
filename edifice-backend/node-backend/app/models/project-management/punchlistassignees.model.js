module.exports = (sequelize, Sequelize) => {
    const PunchListAssignees = sequelize.define("plassignees", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isDeleted: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
  
    return PunchListAssignees;
};
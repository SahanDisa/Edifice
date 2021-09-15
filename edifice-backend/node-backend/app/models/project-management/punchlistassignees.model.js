module.exports = (sequelize, Sequelize) => {
    const PunchListAssignees = sequelize.define("plassignees", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
    });
  
    return PunchListAssignees;
};
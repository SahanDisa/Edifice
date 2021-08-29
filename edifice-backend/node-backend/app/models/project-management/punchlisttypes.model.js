module.exports = (sequelize, Sequelize) => {
    const PunchListTypes = sequelize.define("punchlisttypes", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
    });
  
    return PunchListTypes;
};
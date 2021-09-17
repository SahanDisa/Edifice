module.exports = (sequelize, Sequelize) => {
    const PLBasic = sequelize.define("plbasic", {
        title: {
            type: Sequelize.STRING
        },
        count: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
    return PLBasic;
};
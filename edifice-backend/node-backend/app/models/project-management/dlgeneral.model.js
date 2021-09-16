module.exports = (sequelize, Sequelize) => {
    const DLgeneral = sequelize.define("dlgeneral", {
        date: {
            type: Sequelize.DATEONLY
        },
        questions: {
            type: Sequelize.INTEGER
        },
        isHappened: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        description: {
            type: Sequelize.TIME
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
  
    return DLgeneral;
};
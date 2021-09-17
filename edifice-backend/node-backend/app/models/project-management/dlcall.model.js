module.exports = (sequelize, Sequelize) => {
    const DLcall = sequelize.define("dlcall", {
        date: {
            type: Sequelize.DATEONLY
        },
        callfrom: {
            type: Sequelize.STRING
        },
        callto: {
            type: Sequelize.STRING
        },
        starttime: {
            type: Sequelize.TIME
        },
        endtime: {
            type: Sequelize.TIME
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
  
    return DLcall;
};
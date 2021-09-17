module.exports = (sequelize, Sequelize) => {
    const DLweather = sequelize.define("dlweather", {
        date: {
            type: Sequelize.DATEONLY
        },
        time: {
            type: Sequelize.TIME
        },
        tempterature: {
            type: Sequelize.INTEGER
        },
        weather: {
            type: Sequelize.TIME
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
  
    return DLweather;
};
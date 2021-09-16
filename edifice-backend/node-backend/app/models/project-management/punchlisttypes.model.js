module.exports = (sequelize, Sequelize) => {
    const pltypes = sequelize.define("pltypes", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
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
  
    return pltypes;
};
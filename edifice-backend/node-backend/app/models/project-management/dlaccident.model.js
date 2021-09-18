module.exports = (sequelize, Sequelize) => {
    const DLaccident = sequelize.define("dlaccident", {
      date: {
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.TIME  
      },
      partyinvolved: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      }
    }, {
      freezeTableName: true
    });
  
    return DLaccident;
};
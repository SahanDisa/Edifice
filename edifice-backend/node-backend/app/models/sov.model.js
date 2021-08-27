module.exports = (sequelize, Sequelize) => {
    const Sov = sequelize.define("sov", {
      costCode : {
        type: Sequelize.STRING
      },
      description : {
        type: Sequelize.STRING
      },
      amount : {
        type: Sequelize.DECIMAL(10,2)
      },
      date : {
        type: Sequelize.DATEONLY
      },
    }, {
        freezeTableName: true,
    });
  
    return Sov;
};
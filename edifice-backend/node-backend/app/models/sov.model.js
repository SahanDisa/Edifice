module.exports = (sequelize, Sequelize) => {
    const Sov = sequelize.define("sov", {
      costCode : {
        type: Sequelize.STRING
      },
      description : {
        type: Sequelize.STRING
      },
      amount : {
        type: Sequelize.DECIMAL(20,2)
      },
      date : {
        type: Sequelize.DATEONLY
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },  
    }, {
        freezeTableName: true,
    });
  
    return Sov;
};
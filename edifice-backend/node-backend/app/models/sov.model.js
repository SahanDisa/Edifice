module.exports = (sequelize, Sequelize) => {
    const Sov = sequelize.define("sov", {
      costCode : {
        type: Sequelize.STRING
      },
      description : {
        type: Sequelize.STRING
      },
      ammount : {
        type: Sequelize.DECIMAL(10,2)
      },
      /*billedToDate : {
        type: Sequelize.DATEONLY
      },
      ammountRemaining : {
        type: Sequelize.DECIMAL(10,2)
      }*/
    
    }, {
        freezeTableName: true,
    });
  
    return Sov;
};
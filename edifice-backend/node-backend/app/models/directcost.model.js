module.exports = (sequelize, Sequelize) => {
    const DirectCost = sequelize.define("directcost", {
      costCode: {
        type:Sequelize.STRING   
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      employee: {
        type: Sequelize.STRING
      },
      receivedDate: {
        type: Sequelize.DATEONLY
      },
      paidDate: {
        type: Sequelize.DATEONLY
      },
      ammount: {
        type: Sequelize.DECIMAL(10, 2) 
      },
    }, {
        freezeTableName: true,
    });
  
    return DirectCost;
};
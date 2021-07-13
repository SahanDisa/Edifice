module.exports = (sequelize, Sequelize) => {
    const DirectCost = sequelize.define("directcost", {
      date: {
        type:Sequelize.DATEONLY    
      },
      vendor: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      invoice: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      ammount: {
        type: Sequelize.DECIMAL(10, 2) 
      },
      receivedDate: {
        type: Sequelize.DATEONLY    
      },
      paidDate: {
        type: Sequelize.DATEONLY    
      },
    }, {
        freezeTableName: true,
    });
  
    return DirectCost;
};
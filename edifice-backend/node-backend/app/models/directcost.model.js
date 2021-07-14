module.exports = (sequelize, Sequelize) => {
    const DirectCost = sequelize.define("directcost", {
      costCode: {
        type:Sequelize.STRING   
      },
      category: {
        type: Sequelize.STRING
      },
      date: {
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
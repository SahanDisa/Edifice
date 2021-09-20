module.exports = (sequelize, Sequelize) => {
    const CostCode = sequelize.define("costcode", {
      costCode: {
        type: Sequelize.STRING
      },
      // category: {
      //   type: Sequelize.STRING
      // },
      date: {
        type: Sequelize.DATEONLY
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },  

    
    }, {
        freezeTableName: true,
    });
  
    return CostCode;
};
module.exports = (sequelize, Sequelize) => {
    const Worker = sequelize.define("worker", {
      wId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName:{
        type: Sequelize.STRING    
      },
      mobile: {
        type: Sequelize.INTEGER
      }},{
        freezeTableName: true,
    });
  
    return Worker;
  };
  
  
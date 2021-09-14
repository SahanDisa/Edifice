module.exports = (sequelize, Sequelize) => {
    const workedHours = sequelize.define("worked_hours", {
      location: {
        type: Sequelize.STRING,
      },
      start: {
        type: Sequelize.STRING,
      },
      lunch_start: {
        type: Sequelize.STRING
      },
      lunch_stop:{
        type: Sequelize.STRING    
      },
      tea_start: {
        type: Sequelize.STRING
      },
      tea_stop: {
        type: Sequelize.STRING
      },
      stop: {
        type: Sequelize.STRING
      }},{
        freezeTableName: true,
    });
  
    return workedHours;
  };
  
  
module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
      title: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.STRING,
      },
      endDate:{
        type: Sequelize.STRING,
      },
      status:{
        type: Sequelize.STRING,
      }},{
        freezeTableName: true,
    });
  
    return Schedule;
  };

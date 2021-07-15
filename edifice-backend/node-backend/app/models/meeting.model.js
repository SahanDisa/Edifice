module.exports = (sequelize, Sequelize) => {
  const Meetings = sequelize.define("meetings", {
    overview: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    time: {
      type: Sequelize.TIME  
    },
    location: {
      type: Sequelize.STRING
    },
    noofitems:{
      type: Sequelize.INTEGER    
    },
    status: {
      type: Sequelize.STRING
    }
  }, {
      freezeTableName: true,
  });

  return Meetings;
};
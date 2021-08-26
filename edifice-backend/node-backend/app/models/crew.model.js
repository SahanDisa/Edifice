module.exports = (sequelize, Sequelize) => {
    const Crew = sequelize.define("crew", {
      name: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }},{
        freezeTableName: true,
    });
  
    return Crew;
  };

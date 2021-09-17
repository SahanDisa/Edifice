module.exports = (sequelize, Sequelize) => {
    const Designation = sequelize.define("deisgnation", {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true   
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
    }, {
        freezeTableName: true,
    });
  
    return SubContractor;
};
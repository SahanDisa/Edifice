module.exports = (sequelize, Sequelize) => {
    const Designation = sequelize.define("designation", {
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
  
    return Designation;
};
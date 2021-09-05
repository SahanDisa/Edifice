module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true   
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      projCountt:{
          type:Sequelize.INTEGER
      },
      other: {
        type: Sequelize.STRING
      },
    }, {
        freezeTableName: true,
    });
  
    return Employee;
};
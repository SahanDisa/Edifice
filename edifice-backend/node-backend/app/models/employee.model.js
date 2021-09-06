module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true, 
        allowNull: false  
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
      projCount:{
          type:Sequelize.INTEGER
      },
      other: {
        type: Sequelize.STRING
      },
      username:{
        type: Sequelize.STRING
        
      }
    }, {
        freezeTableName: true,
    });
  
    return Employee;
};
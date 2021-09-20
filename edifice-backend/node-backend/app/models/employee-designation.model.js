module.exports = (sequelize, Sequelize) => {
    const EmployeeDesignation = sequelize.define("employeedesignation", {
      employeeid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      designationid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      designation: {
        type: Sequelize.STRING
      }},{
        freezeTableName: true,
    });
  
    return EmployeeDesignation;
};
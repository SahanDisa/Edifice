module.exports = (sequelize, Sequelize) => {
    const EmployeeDirectory = sequelize.define("employeedirectory", {
      emloyeeid: {
        type: Sequelize.STRING
      },
      designationid: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      }},{
        freezeTableName: true,
    });
  
    return EmployeeDirectory;
};
module.exports = (sequelize, Sequelize) => {
    const Vendor = sequelize.define("vendor", {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true   
      },
      companyName: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      contactNo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      
      contactPersonName: {
        type: Sequelize.STRING
      },
    }, {
        freezeTableName: true,
    });
  
    return Vendor;
};
module.exports = (sequelize, Sequelize) => {
    const Commitment = sequelize.define("commitment", {
      title: {
        type: Sequelize.STRING
      },
      contractCompany: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      /*executed: {
        type: Sequelize.STRING
      },
      defaultRetainage: {
        type: Sequelize.DECIMAL(10,2)
      },*/
      description: {
        type: Sequelize.STRING
      },
      /*attachments: {
        type: Sequelize.BLOB("long")
      },*/
      startDate: {
        type: Sequelize.DATEONLY
      },
      estimatedCompletionDate: {
        type: Sequelize.DATEONLY
      },
      actualCompletionDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      
      signedContractReceivedDate: {
        type: Sequelize.DATEONLY
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },  
},{
        freezeTableName: true,
    });
  
    return Commitment;
};
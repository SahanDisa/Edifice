module.exports = (sequelize, Sequelize) => {
    const PrimeContract = sequelize.define("primecontract", {
      hash: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      contractor: {
        type: Sequelize.STRING
      },
      engineer: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      /*executed: {
        type: Sequelize.STRING
      },*/
      defaultRetainage: {
        type: Sequelize.DECIMAL(10,2)
      },
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
        type: Sequelize.DATEONLY
      },
      signedContractReceivedDate: {
        type: Sequelize.DATEONLY
      },
     inclusions: {
        type: Sequelize.STRING
      },
      exclusions: {
        type: Sequelize.STRING
      }}, {
        freezeTableName: true,
    });
  
    return PrimeContract;
};
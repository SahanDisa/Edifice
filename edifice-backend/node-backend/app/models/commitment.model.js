module.exports = (sequelize, Sequelize) => {
    const Commitment = sequelize.define("commitment", {
      hash: {
        type: Sequelize.STRING
      },
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
      },*/
      defaultRetainage: {
        type: Sequelize.STRING
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
  
    return Commitment;
};
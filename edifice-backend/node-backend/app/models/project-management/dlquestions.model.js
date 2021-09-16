module.exports = (sequelize, Sequelize) => {
    const DLgeneral = sequelize.define("dlquestions", {
        questions: {
            type: Sequelize.DATEONLY
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
  
    return DLgeneral;
};
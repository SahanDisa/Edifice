module.exports = (sequelize, Sequelize) => {
    const Punchlists = sequelize.define("punchlist", {
        no: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: "Initiated"
        },
        duedate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        punchmanager: {
            type: Sequelize.INTEGER
        },
        assignee: {
            type: Sequelize.STRING
        },
        finalapprover: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
    });
    return Punchlists;
};
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
        punchmanager: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        assignee: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        finalapprover: {
            type: Sequelize.INTEGER,
        },
        description: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
    });
    return Punchlists;
};
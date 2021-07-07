module.exports = (sequelize, Sequelize) => {
    const Bidding = sequelize.define("bidding", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      dueDate:{
        type: Sequelize.DATEONLY  
      },
      published: {
        type: Sequelize.BOOLEAN
      }}, {
        freezeTableName: true,
    });
  
    return Bidding;
};
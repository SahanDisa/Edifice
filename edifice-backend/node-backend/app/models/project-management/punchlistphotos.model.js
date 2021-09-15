module.exports = (sequelize, Sequelize) => {
    const plPhotos = sequelize.define("plphotos", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
    });
  
    return plPhotos;
  };
module.exports = (sequelize, Sequelize) => {
    const plPhotos = sequelize.define("plphotos", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        isDeleted: {
          type: Sequelize.BOOLEAN,
          defaultValue: 0
        }
    }, {
        freezeTableName: true,
    });
  
    return plPhotos;
  };
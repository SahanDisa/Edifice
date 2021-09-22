// module.exports = (sequelize, Sequelize) => {
//     const Invoice = sequelize.define("invoice", {
//       hash: {
//         type:Sequelize.STRING   
//       },
//       date: {
//         type: Sequelize.DATEONLY
//       },
//       to: {
//         type: Sequelize.STRING
//       },
//       from: {
//         type: Sequelize.STRING
//       },
//       description: {
//         type: Sequelize.STRING
//       },
//       workCompleted: {
//         type: Sequelize.DECIMAL(10, 2) 
//       },
//       ammountDue: {
//         type: Sequelize.DECIMAL(10, 2) 
//       },
//     }, {
//         freezeTableName: true,
//     });
  
//     return Invoice;
// };
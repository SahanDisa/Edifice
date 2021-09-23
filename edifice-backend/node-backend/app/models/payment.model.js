// module.exports = (sequelize, Sequelize) => {
//     const Payment = sequelize.define("payment", {
//       invoice : {
//         type: Sequelize.STRING
//       },
//       paymentMethod : {
//         type: Sequelize.STRING
//       },
//       date : {
//         type: Sequelize.DATEONLY
//       },
//       paymentHash : {
//         type: Sequelize.STRING
//       },
//       invoiceHash : {
//         type: Sequelize.STRING
//       },
//       note : {
//         type: Sequelize.STRING
//       },
//       ammount : {
//         type: Sequelize.DECIMAL(10,2)
//       }
    
//     }, {
//         freezeTableName: true,
//     });
  
//     return Payment;
// };
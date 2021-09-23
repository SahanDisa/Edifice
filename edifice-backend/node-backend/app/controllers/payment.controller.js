// const db = require("./../models/index");
// const Commitment = db.commitments;
// const Payment = db.payments;

// // create a drawing
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.note) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   // Create a Payment
//   const payment = {
//     invoice: req.body.invoice,
//     paymentMethod:req.body.paymentMethod,
//     date:req.body.date,
//     paymentHash:req.body.paymentHash,
//     invoiceHash:req.body.invoiceHash,
//     note:req.body.note,
//     ammount:req.body.ammount,

//     commitmentId: req.body.commitmentId,
//   };

//   // Save Project in the database
//   Payment.create(payment)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Payment."
//       });
//     });
// };

// // Get drawings for a given project
// exports.findAll = (req, res) => {
//   const id = req.params.id;

//  Payment.findAll({ where: {
//     commitmentId: id
//   }})
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Contract Payments with id=" + id
//       });
//     });  
// };

// //Find a single drawing by Id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Payment.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Payment with id=" + id
//       });
//     });  
// };

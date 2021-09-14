const db = require("./../models/index");
const Project = db.projects;
const Budget = db.budgets;
const DirectCost = db.directcosts;
const Sov = db.sovs;
const sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

// create a budget 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.costCode) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Budget Line Item
  const budget = {
    costCode: req.body.costCode,
    description: req.body.description,
    date: req.body.date,
    estimatedBudget: req.body.estimatedBudget,
    //directCosts:req.body.directCosts,
    //commitedCosts:req.body.commitedCosts,
    //currentBudget: req.body.currentBudget,
    //revisedBudget: req.body.revisedBudget,
   
    projectId: req.body.projectId,
  };

  // Save Budget Line in the database
  Budget.create(budget)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Budget Line Item."
      });
    });
};

// Get budget line items for a given project
exports.findAll = (req, res) => {
  const id = req.params.id;

  Budget.findAll({ where: {
    projectId: id
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project Budget with id=" + id
      });
    });  
};

//Find a single budget by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Budget.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Project Budget with id=" + id
      });
    });  
};


/*-------------------------------------------------------------- */

//delete a direct cost

exports.delete = (req, res) => {
  const id = req.params.id;
 

  Budget.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Budget Line Item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Budget Line Item with id=${id}. Maybe Budget Line Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Budget Line Item with id=" + id
      });
    });
};

//update a budget

exports.update = (req, res) => {
  const id = req.params.id;


  Budget.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Budget Line Item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Budget Line Item with id=${id}. Maybe Budget Line Item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Budget Line Item with id=" + id
      });
    });
};

/*********************************************** */
exports.findByCostCode= (req, res) => {
  const id = req.params.id;
  //const costCode = req.query.costCode;
  const costCode = req.params.costCode;
    //var condition = costCode ? { costCode: { [Op.like]: `%${costCode}%` } } : null;

  Budget.findAll({ where: {
    projectId: id,
    //condition:condition
    costCode:costCode
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Budget Line Items with id=" + id
      });
    });  
};

// total of all estimated budget according to project id
exports.getTotalBudget = (req,res)=>{
const id = req.params.id;
Budget.findAll({
where: {projectId:id },
attributes: [[sequelize.fn('sum', sequelize.col('estimatedBudget')), 'total']],
raw: true,
}).then(data => {
res.send(data[0].total);
//console.log(data[0].total)
})
.catch(err => {
res.status(500).send({
  message: "Error retrieving total  "
});
});  
}

exports.getBudgetOverview = (req,res)=>{

  //db.budgets.projectId  = req.params.id;
  
  db.sequelize.query('SELECT budget.costCode, SUM(budget.estimatedBudget) as btotal,SUM(directcost.amount) as dtotal,  SUM(sov.amount) as stotal FROM budget LEFT JOIN directcost ON directcost.costCode=budget.costCode LEFT JOIN sov   ON sov.costCode=budget.costCode  WHERE budget.projectId=:id GROUP BY budget.costCode',
   {  replacements: { id: req.params.id },type: db.sequelize.QueryTypes.SELECT})
  .then(data => {
      res.send(data);
    })


  }

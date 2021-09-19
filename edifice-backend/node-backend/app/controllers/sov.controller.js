const db = require("./../models/index");
const Project = db.projects;
const Commitment = db.commitments;
const Sov = db.sovs;
const sequelize = require("sequelize");

// create a sov
exports.create = (req, res) => {
  // Validate request
  if (!req.body.amount) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a sov
  const sov = {
    costCode: req.body.costCode,
    description:req.body.description,
    amount:req.body.amount,
    date:req.body.date,
    published: req.body.published,
  
    commitmentId: req.body.commitmentId,
    projectId: req.body.projectId,
  };

  // Save sov in the database
  Sov.create(sov)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SoV."
      });
    });
};

// Get sovs for a given commitment
exports.findAll = (req, res) => {
  const id = req.params.id;
  const published = true;

  Sov.findAll({ where: {
    commitmentId: id,
    published: published

  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SoVs with id=" + id 
      });
    });  
};

//Find a single sov by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sov.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SoV with id=" + id
      });
    });  
};

/*-------------------------------------------------------------- */

//delete a sov

exports.delete = (req, res) => {
  const id = req.params.id;
 

  Sov.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SoV was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SoV with id=${id}. Maybe SoV was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SoV with id=" + id
      });
    });
};

//update a sov

exports.update = (req, res) => {
  const id = req.params.id;


  Sov.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SoV was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SoV with id=${id}. Maybe SoV  was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SoV with id=" + id
      });
    });
};

/*********************************************** */
exports.findByCostCode= (req, res) => {
  const id = req.params.id;
  const published = true;
  //const costCode = req.query.costCode;
  const costCode = req.params.costCode;
    //var condition = costCode ? { costCode: { [Op.like]: `%${costCode}%` } } : null;

  Sov.findAll({ where: {
    commitmentId: id,
    published : published,
    //condition:condition
    costCode:costCode
  }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SoVs with id=" + id
      });
    });  
};

// total of all sovss according to project id
exports.getTotalSovs = (req,res)=>{
  const id = req.params.id;
Sov.findAll({
where: {projectId:id ,published:true},
attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'total']],
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

// total of sovs according to cost code
exports.getSTotalOfCostCodes = (req,res)=>{
  const id = req.params.id;
  const costCode = req.params.costCode;
Sov.findAll({
where: { costCode:costCode,projectId:id,published:true },
attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'total']],
raw: true,
}).then(data => {
res.send(data[0].total);
console.log(data[0].total)
})
.catch(err => {
res.status(500).send({
  message: "Error retrieving total  "
});
});  
}


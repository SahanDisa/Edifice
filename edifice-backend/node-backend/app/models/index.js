const config = require("./../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
// Project Component Model Classes
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.departments = require("./department.model.js")(sequelize, Sequelize);
db.milestones = require("./milestone.model.js")(sequelize, Sequelize);
db.projectuser = require("./projectuser.model")(sequelize, Sequelize);
// Drawing Component Model Classes
db.drawingcategory = require("./drawing-category.model")(sequelize, Sequelize);
db.drawings = require("./drawing.model.js")(sequelize, Sequelize);
// Bidding Component Model Classes
db.biddings = require("./bidding.model")(sequelize, Sequelize);
// Photo component Model Classes
db.album = require("./photo-album.model")(sequelize, Sequelize);
// Document component Model Classes
db.directory = require("./directory.model")(sequelize, Sequelize);
db.document = require("./document.model")(sequelize, Sequelize);

db.budgets = require("./budget.model.js")(sequelize, Sequelize);
db.demo = require("./demo.model")(sequelize, Sequelize);
db.directcosts = require("./directcost.model.js")(sequelize, Sequelize);
db.commitments = require("./commitment.model.js")(sequelize, Sequelize);
db.sovs = require("./sov.model.js")(sequelize, Sequelize);
db.primecontracts = require("./primecontract.model.js")(sequelize, Sequelize);
db.invoices = require("./invoice.model.js")(sequelize, Sequelize);
db.payments = require("./payment.model.js")(sequelize, Sequelize);

//resource management
db.equipments = require("./equipment.model")(sequelize, Sequelize);
db.categorys = require("./equipment-category.model")(sequelize, Sequelize);

db.meetings = require("./project_management/meeting.model")(sequelize, Sequelize);
db.meetingcategory = require("./project_management/meetingcategory.model")(sequelize, Sequelize);

//This section is for testing purposes
db.demo1 = require("./demo1.model")(sequelize, Sequelize);
db.demo2 = require("./demo2.model")(sequelize, Sequelize);

db.demo1.hasOne(db.demo2,{as: "demo2"});
db.demo2.belongsTo(db.demo1,{
  foreignKey: "demo1Id",
  as: "demo1"
})
//Testing section ends

// One project has many departments
db.projects.hasMany(db.departments, { as: "departments" });
db.departments.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});
// One project has many milestones
db.projects.hasMany(db.milestones, { as: "milestones" });
db.milestones.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});
// One user has one project profile
db.users.hasOne(db.projectuser, { as: "projectuser" });
db.projectuser.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});
// One construction project can have many users
db.projectuser.belongsToMany(db.projects, {
  through: "project_user",
  as: "projectusers",
  foreignKey: "project_id",
});
// One user can involve with many projects
db.projects.belongsToMany(db.projectuser, {
  through: "project_user",
  as: "projects",
  foreignKey: "user_id",
});

// One project has many drawing categories & one category has only one project
db.projects.hasMany(db.drawings, { as: "drawingcategory" });
db.drawingcategory.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

// One project has many drawings 
db.projects.hasMany(db.drawings, { as: "drawings" });
db.drawings.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

// One drawing has one drawing category

// One project has many albums
db.projects.hasMany(db.album,{as: "albums"});
db.album.belongsTo(db.projects,{
  foreignKey: "projectId",
  as: "project",
});
// One album has many photos

// One project can has many directories
db.projects.hasMany(db.directory,{as: "directory"});
db.directory.belongsTo(db.projects,{
  foreignKey: "projectId",
  as: "project",
});

// One directory has many documents
db.projects.hasMany(db.document, { as: "documents" });
db.document.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

//One project has many biddings
db.projects.hasMany(db.biddings, { as: "biddings" });
db.biddings.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});
// One project has one budget-should correct this
db.projects.hasOne(db.budgets, { as: "budgets" });
db.budgets.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//One project has many direct costs
db.projects.hasMany(db.directcosts, { as: "directcosts" });
db.directcosts.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});


/* One project has many commitments*/
db.projects.hasMany(db.commitments, { as: "commitments" });
db.commitments.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});


// One commitment has many sovs
db.commitments.hasMany(db.sovs, { as: "sovs" });
db.sovs.belongsTo(db.commitments, {
  foreignKey: "commitmentId",
  as: "commitment",
});

// One commitment has many sovs
db.commitments.hasMany(db.payments, { as: "payments" });
db.payments.belongsTo(db.commitments, {
  foreignKey: "commitmentId",
  as: "commitment",
});

//One category has many equipments
db.categorys.hasMany(db.equipments, { as: "equipments" });
db.equipments.belongsTo(db.categorys, {
  foreignKey: "name",
  as: "categories",
});

//One project has many meetings
db.projects.hasMany(db.meetings, { as: "meetings" });
db.meetings.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

//One project has many meeting categories
db.projects.hasMany(db.meetingcategory, { as: "meetingcategory" });
db.meetingcategory.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

// One meeting category has many meetings
db.meetingcategory.hasMany(db.meetings, { as: "meetings" });
db.meetings.belongsTo(db.meetingcategory, {
  foreignKey: "mcId",
  as: "mcategory",
});

// One project has many drawings
db.projects.hasOne(db.primecontracts, { as: "primecontracts" });
db.primecontracts.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});

// One commitment has many invoices
db.commitments.hasMany(db.invoices, { as: "invoices" });
db.invoices.belongsTo(db.commitments, {
  foreignKey: "commitmentId",
  as: "commitment",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
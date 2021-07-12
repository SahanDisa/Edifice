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
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.drawings = require("./drawing.model.js")(sequelize, Sequelize);
db.biddings = require("./bidding.model")(sequelize, Sequelize);
db.projectuser = require("./projectuser.model")(sequelize, Sequelize);
db.budget = require("./budget.model.js")(sequelize, Sequelize);
db.demo = require("./demo.model")(sequelize, Sequelize);

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

// One project has many drawings
db.projects.hasMany(db.drawings, { as: "drawings" });
db.drawings.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});
//One project has many biddings
db.projects.hasMany(db.biddings, { as: "biddings" });
db.biddings.belongsTo(db.projects, {
  foreignKey: "projectId",
  as: "project",
});
// One project has many budget line items
db.projects.hasMany(db.budgets, { as: "budgets" });
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

// 

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
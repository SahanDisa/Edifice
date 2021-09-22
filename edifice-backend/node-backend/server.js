const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

global.__basedir = __dirname;

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
var corsOptions = {
  origin: ["https://edifice-reactapp.herokuapp.com","http://localhost:8081"]
}


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

const db = require("./app/models/index.js");
const Role = db.roles;

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
db.sequelize.sync();

// include routes for listening for requests
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/project.routes")(app);
require('./app/routes/department.routes')(app);
require("./app/routes/milestone.routes")(app);
require("./app/routes/portfolioprogress.routes")(app);
require("./app/routes/drawing.routes")(app);
require("./app/routes/drawing-category.routes")(app);
require("./app/routes/drawrevision.routes")(app);
require("./app/routes/bidding.routes")(app);
require("./app/routes/photo-album.routes")(app);
// require("./app/routes/photo.routes")(app);
require("./app/routes/photofile.routes")(app);
require("./app/routes/uploadphoto.routes")(app);
require('./app/routes/file.routes')(app);
require('./app/routes/directory.routes')(app);
require('./app/routes/document.routes')(app);
require('./app/routes/documentrevision.routes')(app);
require('./app/routes/projectuser.routes')(app);

require('./app/routes/budget.routes')(app);
require('./app/routes/directcost.routes')(app);
require('./app/routes/commitment.routes')(app);
require('./app/routes/sov.routes')(app);
require('./app/routes/primecontract.routes')(app);
require('./app/routes/invoice.routes')(app);
require('./app/routes/payment.routes')(app);
require('./app/routes/excel.routes')(app);
//require('./app/routes/bexcel.routes')(app);

require('./app/routes/equipment.routes')(app);
require('./app/routes/equipment-category.routes')(app);
require('./app/routes/crew.routes')(app);
require('./app/routes/worker.routes')(app);
require('./app/routes/worked-hours.routes')(app);
require('./app/routes/timesheet.routes')(app);
require('./app/routes/employee.routes')(app);
require('./app/routes/employee-designation.routes')(app);
require('./app/routes/schedule.routes')(app);

require('./app/routes/primecontract.routes')(app);
require('./app/routes/invoice.routes')(app);
require('./app/routes/payment.routes')(app);

require('./app/routes/project-management/meeting.routes')(app);
require('./app/routes/project-management/meetingcategory.routes')(app);
require('./app/routes/project-management/meetingagenda.routes')(app);
require('./app/routes/project-management/meetingattendees.routes')(app);

require('./app/routes/project-management/punchlist.routes')(app);
require('./app/routes/project-management/punchlisttypes.routes')(app);
require('./app/routes/project-management/punchlistphotos.routes')(app);
require('./app/routes/project-management/punchlistassignees.routes')(app);

require('./app/routes/project-management/dlaccident.routes')(app);
require('./app/routes/project-management/dlcall.routes')(app);
require('./app/routes/project-management/dlgeneral.routes')(app);
require('./app/routes/project-management/dlweather.routes')(app);
require('./app/routes/project-management/dlquestions.routes')(app);

require('./app/routes/project-management/actionplantype.routes')(app);
require('./app/routes/project-management/actionplan.routes')(app);
require('./app/routes/project-management/actionplansection.routes')(app);
require('./app/routes/project-management/actionplanitem.routes')(app);

require('./app/routes/vendor.routes')(app);
require('./app/routes/subcontractor.routes')(app);
require('./app/routes/employee.routes')(app);
require('./app/routes/designation.routes')(app);
require('./app/routes/costcode.routes')(app);

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to edifice backend"
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`-------------------Welcome to Edifice Backend--------------------`)
  console.log(`---------------Server is running on port ${PORT}-----------------`);
});

// initial data
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}
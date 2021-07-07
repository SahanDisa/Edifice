const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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
require("./app/routes/drawing.routes")(app);
require("./app/routes/bidding.routes")(app);
require('./app/routes/file.routes')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to edifice backend" });
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
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./app/models");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./app/controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  });
});
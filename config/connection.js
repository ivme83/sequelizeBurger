// Set up MySQL connection.
var mysql = require("mysql");

// var connection1 = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Aura*6983",
//   database: "burgers_db"
// });

// // Make connection.
// connection1.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection1.threadId);
// });

var connection = mysql.createConnection({
  port: 3306,
  host: "mysql.iv-design.net",
  user: "rolwil3",
  password: "Aura*6983",
  database: "iv_design_database"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;

Table.findAll({
  where: {
    [Op.lte]: [{authorId: 13}]
  }
});
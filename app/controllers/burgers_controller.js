const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/", function(req, res) {

  db.burger.findAll({}).then(function(results){
    let data = [];

    results.forEach(element => {
      data.push(element.dataValues)
    });

    let hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
    
  });

});

router.post("/api/burgers", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name,
    onMenu: req.body.onMenu
  }).then(function(results) {
    res.end();
  });

});

router.put("/api/burgers/:id", function(req, res) {

  let data = {id: req.params.id, onMenu: req.body.onMenu};

  db.burger.upsert(data).then(function(results){
    //test returned here as true or false how can i get the inserted id here so i can insert data in other tables using this new id?
    console.log("RESULTS OF UPDATE " + results);

    res.end();
  });

});

router.delete("/api/burgers/:id", function(req, res) {
  let id = req.params.id;

  db.burger.destroy({
    where: {
      id: id
    }
  }).then(function(results){
    res.end();
  });
});

// Export routes for server.js to use.
module.exports = router;

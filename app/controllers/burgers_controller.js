const express = require("express");

const router = express.Router();

const db = require("../models");
var Sequelize = require('sequelize');

const Op = Sequelize.Op;

router.get("/", function(req, res) {

  db.burger.findAll({
      include: [db.user],
    }).then(function(results){

      let data = results.map(e => e.get({plain: true}));
      let votedIn = data.filter(e => e.votes > 99);
      let notVotedIn = data.filter(e => e.votes < 100);

      let hbsObject = {
        votedIn: votedIn,
        notVotedIn: notVotedIn
      };

      res.render("index", hbsObject);
    
  });

});

router.post("/api/burgers", function(req, res) {
  let data = {customer_name: req.body.user};

  db.user.findOrCreate({
    where: {customer_name: req.body.user},
  }).then(function(results){

    let id = results[0].dataValues.customer_id;
    
    db.burger.create({
      burger_name: req.body.burger_name,
      userCustomerId: id
    }).then(function(results) {
      res.end();
    });
  });
});

router.put("/api/burgers/:id", function(req, res) {

  db.burger.increment('votes', { where: { id: req.params.id }}).then(function(results){
    res.end();
  })

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

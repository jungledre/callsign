var express = require('express');
var Game = require('../models/game');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Game.find(function(err, games) {
      if (err) return res.status(500).send(err);
      res.send(games);
    });
  })
  .post(function(req, res) {
    Game.create(req.body, function(err, game) {
      if (err) return res.status(500).send(err);
      res.send(game);
    });
  });

router.route('/:id') 
  .get(function(req, res) {
    Game.findById(req.params.id, function(err, game) {
      if (err) return res.status(500).send(err);
      res.send(game);
    });
  })
  .put(function(req, res) {
    Game.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Game.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;

var mongoose = require('mongoose');

var GameSchema = mongoose.Schema({
  played: Date,
  createdBy: mongoose.Schema.Types.ObjectId,
  blueMgr: mongoose.Schema.Types.ObjectId,
  redMgr: mongoose.Schema.Types.ObjectId,
  players: [mongoose.Schema.Types.ObjectId],
  words:[String]
});

module.exports = mongoose.model('Game', GameSchema);

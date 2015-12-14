var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var moongoose = require('mongoose');

moongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/callsign');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000)
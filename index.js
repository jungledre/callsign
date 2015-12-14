var express = require('express');
var path = require('path');
var app = express();
var request = require('request');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000)
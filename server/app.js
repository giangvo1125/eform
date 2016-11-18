var express = require('express');
var app = express();
var path = require('path');
var server  = require('http').createServer(app);

app.use('/images', express.static(path.join(__dirname, 'images')));

server.listen(4000);
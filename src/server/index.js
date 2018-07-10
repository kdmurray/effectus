const http      = require('http')
const express   = require('express');

var app = express();

module.exports = http.createServer(app);

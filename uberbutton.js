#!/usr/bin/env node

var express = require('express');
var http = require('http');
var path = require('path');
var debug = require('debug')('templates:server');
var app = require('./api/api');

app.use('/', express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/web', express.static(__dirname + '/web'));
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/api', express.static(__dirname + '/api'));
app.use('/docs', express.static(__dirname + '/apidocs'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/checkout', express.static(__dirname + '/checkout'));
app.use('/productdetail', express.static(__dirname + '/productdetail'));
app.use('/profile', express.static(__dirname + '/profile'));
app.use('/addproduct', express.static(__dirname + '/addproduct'));
app.use('/signin', express.static(__dirname + '/signin'));


// Create HTTP server.
var server = http.createServer(app);

server.listen(normalizePort(process.env.PORT || '18000'));
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
}
// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') throw error;

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
// Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on: ' + bind);
}

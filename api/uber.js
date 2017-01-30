var express = require('express');
var mysql = require('mysql');
var CRUD = require('mysql-crud');
var async = require("async");
var fs = require('fs-extra')
var env = require('./environment');
var connection = env.Dbconnection;
var usersCRUD = CRUD(connection,'users');
var Uber = require('node-uber');

var uber = new Uber({
  client_id: env.clientId,
  client_secret: env.clientSecret ,
  server_token: env.serverToken  ,
  redirect_uri:env.redirectUri  ,
  name: env.appname,
  language: 'en_US', // optional, defaults to en_US
  sandbox: true // optional, defaults to false
});

exports.login = function(req, res) {
    var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
  res.redirect(url);
	
};

exports.callback = function(request, response) {
   uber.authorization({
     authorization_code: request.query.code
   }, function(err, access_token, refresh_token) {
     if (err) {
       console.error(err);
     } else {
        console.log(access_token);
            response.redirect('/index.html?access_token='+access_token);
     }
   });
};
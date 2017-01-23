var request = require('request');
var config  = require('./config');
var express = require('express');
var Uber = require('node-uber');

var app = express();

var TOKEN   = null;

app.use('/', express.static('web'));

var uber = new Uber({
  client_id: config.uber.clientId,
  client_secret: config.uber.clientSecret ,
  server_token: config.uber.serverToken  ,
  redirect_uri:config.uber.redirectUri  ,
  name: config.uber.appname,
  language: 'en_US', // optional, defaults to en_US
  sandbox: true // optional, defaults to false
});

app.get('/api/login', function(request, response) {
  var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
  response.redirect(url);
});

app.get('/api/callback', function(request, response) {
   uber.authorization({
     authorization_code: request.query.code
   }, function(err, access_token, refresh_token) {
     if (err) {
       console.error(err);
     } else {
        console.log(access_token);
       // store the user id and associated access token
       // redirect the user back to your actual app
       //response.redirect('/dashboard.html');
         uber.products.getAllForLocation(3.1357, 101.6880, function (err, res) {
          if (err) console.error(err);
          else console.log(res);
        });
       

     }
   });
});


var getproducts = function(lat,lon){
    var productlist =  uber.products.getAllForLocation(3.1357, 101.6880, function (err, res) {
          if (err) console.error(err);
          else console.log(res);
        });
    return productlist ;
}

var server = app.listen(18000, function() {
  console.log('Visit http://localhost:18000/login');
});

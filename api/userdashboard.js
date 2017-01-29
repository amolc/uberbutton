var mysql = require('mysql');
var CRUD = require('mysql-crud');
var async = require("async");
var fs = require('fs-extra')
var env = require('./environment');
var connection = env.Dbconnection;
var productCRUD = CRUD(connection, 'user_products');
var imageCRUD = CRUD(connection, 'images');
var userCRUD = CRUD(connection, 'users');

/**
 * @api {get} /allproduct generate list of products
 * @apiName findAll
 * @apiGroup /admin/product
 *
 */
exports.userproduct = function(req, res) {

    var id = req.params.userid;
    connection.query("SELECT * from user_products as u join images as m on(u.UProduct_id = m.RecordId) where u.CreatedBy = " + id, function(err, rows) {
        if (rows.length > 0) {
            res.jsonp(rows);
        } else {
            res.jsonp("");
        }
    });
};

exports.purchase = function(req, res) {

    var id = req.params.userid;
    connection.query("SELECT * from new_orders where buyer_id = " + id, function(err, rows) {
        if (rows.length > 0) {
            res.jsonp(rows);
        } else {
            res.jsonp("");
        }
    });
};

exports.soldproduct = function(req, res) {

    var id = req.params.userid;
    connection.query("SELECT * from new_orders where seller_id = " + id, function(err, rows) {
        if (rows.length > 0) {
            res.jsonp(rows);
        } else {
            res.jsonp("");
        }
    });
};
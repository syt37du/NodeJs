var settings = require("../settings"),
    mongodb = require("mongodb");

var Db = mongodb.Db,
    // Connection = mongodb.Connection,
    Server = mongodb.Server;

module.exports = new Db(settings.db, new Server(settings.host, settings.port), { safe: true });


// var settings = require('../settings'),
//         Db = require('mongodb').Db,
//         Connection = require('mongodb').Connection,
//         Server = require('mongodb').Server;
//     module.exports = new Db(settings.db, new Server(settings.host, settings.port),
//  {safe: true});
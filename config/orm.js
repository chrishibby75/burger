var connection = require("../config/connection.js");

var orm = {
    all: function(tableName, cb){
        // Connecting to db and query to select what I want
        connection.query('SELECT * FROM ' + tableName + ';', function(err, result){
            if (err) throw err;
            // Sending back results from db
            cb(result);
        })
    },

    update: function(tableName, condition, cb){
        // Connecting to db and query to update what I want
        connection.query('UPDATE ' + tableName + ' SET devoured = true WHERE id =' + condition + ';', function(err, result){
            if(err) throw err;
            // Sending back results from db
            cb(result);
        })
    },

    create: function(tableName, val, cb){
        // Connecting to db and query to add new data to db
        connection.query("INSERT INTO " + tableName + " (burger_name) VALUES ('" + val + "');", function(err, result){
            if(err) throw err;
            // Sending back results from db
            cb(result);
        })
    }

}

// Exporting ORM so we don't have to keep making query calls to DB
module.exports = orm;
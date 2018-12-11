var orm = require('../config/orm.js');

var burger = {
    // Selecting all from "burgers" table
    all: function(cb){
        orm.all('burgers', function(response){
            // Sending back results
            cb(response);
        })
    },
    // Updating from selected id from "burgers" table
    update: function(id, cb){
        orm.update('burgers', id, cb);
    },
    // Adding new data to the "burgers" table
    create: function(name, cb){
        orm.create('burgers', name, cb);
    }
}

// Exporting burger object to use in app.js
module.exports = burger;
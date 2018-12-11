// Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')

// Main Screen URL
router.get('/', function(req, res){
    burger.all(function(data){
        // Rending "index.handlebars & burger data from db"
        res.render('index', {data});
    })
})

// Update URL
router.put('/burgers/update', function(req, res){
    burger.update(req.body.burger_id, function(result){
        // Redirecting to main screen after the data has been updated
        res.redirect('/');
    })
})

// Add Burgers URL
router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

// Exporting Routes to server
module.exports = router;
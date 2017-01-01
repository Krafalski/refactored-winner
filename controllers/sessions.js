var express = require('express');
session = express.Router();
var User = require('../models/user.js');

session.get('/new', function(req, res){
    res.render('sessions/new.ejs');
});

session.post('/', function(req, res){
    User.findOne({ username: req.body.username }, function(err, foundUser){
        if(req.body.password == foundUser.password){
            req.session.currentuser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong password');
        }
    });
});

session.delete('/', function(req, res){
    req.session.destroy(function(){
        res.redirect('/');
    });
})

module.exports = session;

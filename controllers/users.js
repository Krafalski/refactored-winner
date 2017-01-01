var express         = require ( 'express' );
user                = express.Router();
var User            = require( '../models/user.js');

user.get( '/new', (req, res) => {
  res.render ( 'users/new.ejs' );
});

user.post ( '/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect ('/');
  });
});

module.exports      = user;

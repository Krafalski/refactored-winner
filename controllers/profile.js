var express         = require ( 'express' );
var profile         = express.Router();
var Profile         = require ('../models/profile.js');
var User            = require ('../models/user.js');

//INDEX
profile.get('/', (req,res)=>{
  Profile.find({}, (err, foundProfile)=> {
    res.render('profile/index.ejs', {
      profile : foundProfile
    });
  });
});

module.exports      = profile;

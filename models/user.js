var mongoose        = require ( 'mongoose' );
var Profile         = require ( './profile.js');
var Schema          = mongoose.Schema;

var userSchema      = Schema({
  username: String,
  password: String,
  profile : [Profile.schema]
});

var User            = mongoose.model('User', userSchema);

module.exports      = User;

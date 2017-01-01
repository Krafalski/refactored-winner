var mongoose        = require ('mongoose');

var profileSchema   = mongoose.Schema ({
  name: String,
  title: String,
  comment: String
});

var Profile         = mongoose.model('Profile', profileSchema);

module.exports = Profile;

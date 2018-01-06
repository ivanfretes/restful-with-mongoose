var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});

// Creating and exporting the UserModel
module.exports = mongoose.model('User', UserSchema);

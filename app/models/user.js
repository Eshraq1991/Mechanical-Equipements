var Q = require('q');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
var User = mongoose.model ('user', UserSchema);

User.comparePassword = function (candidatePassword, savedPassword, res, cb) {
  bcrypt.compare ( candidatePassword, savedPassword, function (err, isMatch) {
    if (err) {
      res.status (500).send ('Error');
    } else if (cb) {
      cb (isMatch);
    }
  });
};


UserSchema.pre ('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified ('password') ) {
    return next ();
  }

  // generate a salt
  bcrypt.genSalt (SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next (err);
    }

    // hash the password along with our new salt
    bcrypt.hash (user.password, salt, null, function (err, hash) {
      if (err) {
        return next (err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next ();
    });
  });
});


module.exports = User;
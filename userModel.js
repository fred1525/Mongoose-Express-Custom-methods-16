var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "username is required to proceed"
  },
  password: {
    type: String,
    trim: true,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should contain at least 6 characters"
    ],
    required: "password is required"
  },
  email: {
    type: String,
    required: "an email is required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  isCool: {
    type: Boolean,
    default: false
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.coolifier = function() {
  this.username = this.username + "This is the coolest person";
  return this.username;
};

UserSchema.methods.makeCool = function() {
  this.isCool = true;
  return this.isCool;
};

var User = mongoose.model("User", UserSchema);

module.exports = User;

var express = require("express");
var mongoose = require("mongoose");
var User = require("./userModel.js");

mongoose.connect("mongodb://localhost/custommethods", {
  useNewUrlParser: true
});

var PORT = 3000;
var app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", function(req, res) {
  var user = new User(req.body);
  user.coolifier();
  user.makeCool();

  User.create(user)
    .then(function(userdb) {
      res.json(userdb);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.listen(PORT, function() {
  console.log("The app is listening on PORT " + PORT);
});
